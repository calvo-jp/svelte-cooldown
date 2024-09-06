<script lang="ts">
  import { Cooldown } from '$lib/index.js';
</script>

<Cooldown.Root
  autoplay
  min={0}
  max={10}
  duration={10000}
  oncooldown={function () {
    console.log('Cooled down!');
  }}
>
  {#snippet children(context)}
    <Cooldown.Countdown />
    <Cooldown.Start>
      {#if context.paused}
        Resume
      {:else if context.cooling}
        Pause
      {:else}
        Start
      {/if}
    </Cooldown.Start>
    <Cooldown.Stop>Stop</Cooldown.Stop>
    <Cooldown.Restart>Restart</Cooldown.Restart>
  {/snippet}
</Cooldown.Root>
