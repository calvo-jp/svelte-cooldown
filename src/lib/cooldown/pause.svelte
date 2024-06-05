<script lang="ts">
  import type { Assign } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { getCooldownContext } from './context.svelte.js';

  interface Overrides {
    children?: Snippet<[paused: boolean]>;
  }

  interface Props extends Assign<SvelteHTMLElements['button'], Overrides> {}

  let { children, onclick, ...props }: Props = $props();
  let context = getCooldownContext();
</script>

<button
  type="button"
  onclick={(e) => {
    context.pause();
    onclick?.(e);
  }}
  {...props}
>
  {@render children?.(context.paused)}
</button>
