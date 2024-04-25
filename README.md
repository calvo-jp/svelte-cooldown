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

<Cooldown
  min={0}
  max={10}
  duration={10000}
  autoplay
  oncooldown={function () {
    /**/
  }}
>
  {#snippet children(context)}
    <div>{context.countdown}</div>

    <button onclick={context.start}>Start</button>
    <button onclick={context.stop}>Stop</button>
    <button onclick={context.restart}>Restart</button>
    <button onclick={context.pause}>
      {#if context.paused}
        Resume
      {:else}
        Pause
      {/if}
    </button>
  {/snippet}
</Cooldown>
```
