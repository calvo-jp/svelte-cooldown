<script lang="ts">
  import { createCooldown } from '$lib/index.js';

  let cooldown = createCooldown();
</script>

<div>{cooldown.countdown}</div>

<button onclick={cooldown.start}>Start</button>
<button onclick={cooldown.stop}>Stop</button>
<button onclick={cooldown.restart}>Restart</button>
<button onclick={cooldown.pause}>
  {#if cooldown.paused}
    Resume
  {:else}
    Pause
  {/if}
</button>
