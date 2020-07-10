<script>
  export let status;
  export let error;
</script>

<style>
  .message {
    margin-top: 2rem;
  }
</style>

<svelte:head>
  <title>Error - {status}</title>
</svelte:head>

{#if status !== 404}
  <div class="container">
    <article class="message is-danger">
      <div class="message-header">Page not found</div>
      <div class="message-body">{error.message}</div>
    </article>
  </div>
{/if}

{#if status === 404}
  <div class="container">
    <article class="message is-warning">
      <div class="message-header">Page not found</div>
      <div class="message-body">
        <a href="/" class="link">Clic here</a>
        to go back.
      </div>
    </article>
  </div>
{/if}
