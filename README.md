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
    oncooldown() {
      /**/
    },
  });
</script>

<div>{cooldown.countdown}</div>

<button onclick={cooldown.start}>Start</button>
<button onclick={cooldown.stop}>Stop</button>
<button onclick={cooldown.restart}>Restart</button>
<button onclick={context.pause}>
  {#if context.paused}
    Resume
  {:else}
    Pause
  {/if}
</button>
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
  oncooldown={function () {
    /**/
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
```
