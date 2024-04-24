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

<button
  onclick={function () {
    cooldown.start();
  }}
>
  Start
</button>
<button
  onclick={function () {
    cooldown.stop();
  }}
>
  Stop
</button>
```

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

    <button
      onclick={function () {
        context.start();
      }}
    >
      Start
    </button>
    <button
      onclick={function () {
        context.stop();
      }}
    >
      Stop
    </button>
  {/snippet}
</Cooldown>
```
