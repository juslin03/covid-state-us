<script>
  export let segment;

  let isOpen = false;
  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<style>
  @media (min-width: 769px) {
    nav {
      box-shadow: 1px 0.5px 2px 3px rgba(32, 32, 32, 0.1);
    }
  }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">
      <img src="logo-192.png" alt="logo-virus" />
    </a>
    <span
      class:is-active={isOpen}
      on:click={toggleNav}
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>
  <div class="navbar-menu" class:is-active={isOpen}>
    <div class="navbar-start">
      <a href="/" class="navbar-item" class:is-active={segment === undefined}>
        Home
      </a>
      <a
        href="/about"
        class="navbar-item"
        class:is-active={segment === 'about'}>
        About
      </a>
    </div>
  </div>
</nav>
