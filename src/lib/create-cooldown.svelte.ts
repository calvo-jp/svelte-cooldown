import { tick } from 'svelte';
import { clamp } from './clamp.js';
import { round } from './round.js';

export interface CreateCooldownConfig {
  /**
   * @default 0
   */
  min?: number;
  /**
   * @default 10
   */
  max?: number;
  /**
   * @default 10000
   */
  duration?: number;
  /**
   * @default false
   */
  autoplay?: boolean;
  oncooldown?: () => void;
}

export interface CreateCooldownReturn {
  /**
   * Starts the cooldown
   */
  start: () => void;
  /**
   * Restarts the cooldown
   */
  restart: () => void;
  /**
   * Pauses/resumes the cooldown
   */
  pause: () => void;
  /**
   * Stops the cooldown
   */
  stop: () => void;
  /**
   * The current countdown value
   */
  readonly countdown: number;
  /**
   * Whether the cooldown has started
   */
  readonly cooling: boolean;
  /**
   * Whether the cooldown is paused
   */
  readonly paused: boolean;
}

export function createCooldown(config?: CreateCooldownConfig): CreateCooldownReturn {
  const {
    /**/
    min,
    max,
    autoplay,
    duration,
    oncooldown,
  } = $derived.by(() => {
    const min = config?.min ?? 0;
    const max = config?.max ?? 10;
    const duration = config?.duration ?? 10000;
    const autoplay = config?.autoplay ?? false;
    const oncooldown = config?.oncooldown ?? function () {};

    return {
      min,
      max,
      autoplay,
      duration,
      oncooldown,
    };
  });

  let paused = $state(false);
  let cooling = $state(false);
  let countdown = $state(min);

  function start() {
    if (cooling) return;

    if (paused) {
      paused = false;
      cooling = true;
      return;
    }

    cooling = true;
    countdown = max - 1;
  }

  function stop() {
    paused = false;
    cooling = false;
    countdown = min;
  }

  function pause() {
    if (paused) {
      paused = false;
      cooling = true;
    } else {
      paused = true;
      cooling = false;
    }
  }

  function restart() {
    stop();
    tick().then(start);
  }

  $effect(() => {
    let timer: NodeJS.Timeout;

    if (cooling && !paused) {
      timer = setInterval(() => {
        countdown = round(clamp(countdown - 1, min, max));

        if (countdown <= min) {
          clearInterval(timer);
          countdown = min;
          cooling = false;
          oncooldown();
        }
      }, duration / max);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  });

  $effect(() => {
    if (autoplay) {
      start();
    }
  });

  return {
    start,
    restart,
    pause,
    stop,
    get paused() {
      return paused;
    },
    get cooling() {
      return cooling;
    },
    get countdown() {
      return countdown;
    },
  };
}
