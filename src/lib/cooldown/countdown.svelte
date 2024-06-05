<script lang="ts">
  import type { Assign } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { getCooldownContext } from './context.svelte.js';

  interface Overrides {
    children?: Snippet<[countdown: number]>;
  }

  interface Props extends Assign<SvelteHTMLElements['span'], Overrides> {}

  let { children, ...props }: Props = $props();
  let context = getCooldownContext();
</script>

<span {...props}>
  {#if children}
    {@render children(context.countdown)}
  {:else}
    {context.countdown}
  {/if}
</span>
