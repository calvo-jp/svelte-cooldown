<script lang="ts">
  import type { Assign } from '$lib/types.js';
  import type { Snippet } from 'svelte';
  import type { SvelteHTMLElements } from 'svelte/elements';
  import {
    createCooldown,
    type CreateCooldownConfig,
    type CreateCooldownReturn,
  } from '../create-cooldown.svelte.js';
  import { setCooldownContext } from './context.svelte.js';

  interface Overrides extends CreateCooldownConfig {
    children: Snippet<[context: CreateCooldownReturn]>;
  }

  interface Props extends Assign<SvelteHTMLElements['div'], Overrides> {}

  let {
    /**/
    min,
    max,
    autoplay,
    duration,
    oncooldown,
    children,
    ...props
  }: Props = $props();

  let context = createCooldown({
    min,
    max,
    autoplay,
    duration,
    oncooldown,
  });

  setCooldownContext(context);
</script>

<div {...props}>
  {@render children(context)}
</div>
