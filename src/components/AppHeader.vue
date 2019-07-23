<template>
  <header class="header elevation-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link class="brand-link" to="/">
            <b>Material Shadow Preview</b>
          </router-link>
        </div>
        <div class="col-auto">
          <nav>
            <router-link class="nav-link" to="/learn">Learn</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: var(--primary-color);
  color: var(--light-color);
}

.brand-link::after {
  content: none;
}

.nav-link {
  padding: .5rem 1rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
  transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
}
.nav-link::after {
  content: none;
}
.nav-link.router-link-active {
  background-color: #f3f4f64d;
}
.nav-link:hover, .nav-link:focus, .nav-link:active {
  background-color: #f4f5f733;
}
</style>
