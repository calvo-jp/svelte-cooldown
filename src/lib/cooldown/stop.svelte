<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';
  import { cx } from '../cx.js';
  import { getCooldownContext } from './context.svelte.js';

  let {
    children,
    onclick,
    class: className,
    ...props
  }: SvelteHTMLElements['button'] = $props();
  let context = getCooldownContext();
</script>

<button
  type="button"
  onclick={(e) => {
    context.stop();
    onclick?.(e);
  }}
  class={cx('svelte-cooldown__stop', className)}
  data-state={context.paused
    ? 'paused'
    : context.cooling
      ? 'cooling'
      : undefined}
  {...props}
>
  {@render children?.()}
</button>
