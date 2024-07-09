<script lang="ts">
  import type { Assign } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cx } from '../cx.js';
  import { getCooldownContext } from './context.svelte.js';

  interface Overrides {
    children?: Snippet<[countdown: number]>;
  }

  interface Props extends Assign<SvelteHTMLElements['span'], Overrides> {}

  let { children, class: className, ...props }: Props = $props();
  let context = getCooldownContext();
</script>

<span
  class={cx('svelte-cooldown__countdown', className)}
  data-state={context.paused
    ? 'paused'
    : context.cooling
      ? 'cooling'
      : undefined}
  {...props}
>
  {#if children}
    {@render children(context.countdown)}
  {:else}
    {context.countdown}
  {/if}
</span>
