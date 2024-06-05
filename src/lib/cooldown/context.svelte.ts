import { createCooldown, type CreateCooldownReturn } from '$lib/create-cooldown.svelte.js';
import { getContext, setContext } from 'svelte';

export function createCooldownContext() {
  const cooldown = createCooldown();

  return {
    get cooling() {
      return cooldown.cooling;
    },
    get countdown() {
      return cooldown.countdown;
    },
    get paused() {
      return cooldown.paused;
    },
    start: cooldown.start,
    pause: cooldown.pause,
    restart: cooldown.restart,
    stop: cooldown.stop,
  };
}

export function setCooldownContext(context: CreateCooldownReturn) {
  setContext('cooldown', context);
}

export function getCooldownContext() {
  return getContext<CreateCooldownReturn>('cooldown');
}
