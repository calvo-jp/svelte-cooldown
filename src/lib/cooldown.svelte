<script lang="ts">
  import type { Snippet } from 'svelte';
  import {
    createCooldown,
    type CreateCooldownConfig,
    type CreateCooldownReturn,
  } from './create-cooldown.svelte.js';

  interface Props extends CreateCooldownConfig {
    children: Snippet<[context: CreateCooldownReturn]>;
  }

  let { children, ...props }: Props = $props();
  let context = createCooldown(props);
</script>

{@render children(context)}
