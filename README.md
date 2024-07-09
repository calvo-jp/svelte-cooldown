# Svelte Cooldown

## Installation

```bash
npm install svelte-cooldown
```

## Usage

```svelte
<script lang="ts">
  import { createCooldown } from 'svelte-cooldown';

  let cooldown = createCooldown({
    min: 0,
    max: 10,
    duration: 10000,
    autoplay: true,
    allowPause: true,
    oncooldown() {
      /**/
    },
  });
</script>

<div>{cooldown.countdown}</div>
<button onclick={cooldown.start}>
  {#if context.paused}
    Resume
  {:else if context.cooling}
    Pause
  {:else}
    Start
  {/if}
</button>
<button onclick={cooldown.stop}>Stop</button>
<button onclick={cooldown.restart}>Restart</button>
```

or using the component

```svelte
<script lang="ts">
  import { Cooldown } from 'svelte-cooldown';
</script>

<Cooldown.Root
  min={0}
  max={10}
  duration={10000}
  autoplay
  allowPause
  oncooldown={function () {
    /**/
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
```
