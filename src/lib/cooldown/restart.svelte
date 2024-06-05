<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { getCooldownContext } from './context.svelte.js';

  let { children, onclick, ...props }: SvelteHTMLElements['button'] = $props();
  let context = getCooldownContext();
</script>

<button
  type="button"
  onclick={(e) => {
    context.restart();
    onclick?.(e);
  }}
  {...props}
>
  {@render children?.()}
</button>
