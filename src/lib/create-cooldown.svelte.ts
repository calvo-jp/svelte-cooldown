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
  start: () => void;
  /**
   * Not yet implemented
   */
  restart: () => void;
  /**
   * Not yet implemented
   */
  pause: () => void;
  stop: () => void;
  readonly countdown: number;
  readonly cooling: boolean;
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

  let cooling = $state(false);
  let countdown = $state(min);

  function start() {
    if (cooling) return;

    cooling = true;
    countdown = max - 1;
  }

  function stop() {
    if (!cooling) return;

    cooling = false;
    countdown = min;
  }

  function pause() {}

  function restart() {}

  $effect(() => {
    let timer: NodeJS.Timeout;

    if (cooling) {
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
    get cooling() {
      return cooling;
    },
    get countdown() {
      return countdown;
    },
  };
}
