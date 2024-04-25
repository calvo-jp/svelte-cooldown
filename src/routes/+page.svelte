<script lang="ts">
  import { Cooldown } from '$lib/index.js';
</script>

<Cooldown>
  {#snippet children(context)}
    <div>{context.countdown}</div>

    <button onclick={() => context.start()}>Start</button>
    <button onclick={() => context.stop()}>Stop</button>
    <button onclick={() => context.restart()}>Restart</button>
  {/snippet}
</Cooldown>
