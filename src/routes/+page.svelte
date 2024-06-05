<script lang="ts">
  import { Cooldown } from '$lib/index.js';
</script>

<Cooldown.Root
  min={0}
  max={10}
  duration={10000}
  oncooldown={function () {
    console.log('Cooled down!');
  }}
>
  <Cooldown.Countdown />
  <Cooldown.Start>Start</Cooldown.Start>
  <Cooldown.Stop>Stop</Cooldown.Stop>
  <Cooldown.Pause>
    {#snippet children(paused)}
      {#if paused}
        Resume
      {:else}
        Pause
      {/if}
    {/snippet}
  </Cooldown.Pause>
  <Cooldown.Restart>Restart</Cooldown.Restart>
</Cooldown.Root>
