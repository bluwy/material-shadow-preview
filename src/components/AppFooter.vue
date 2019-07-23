<template>
  <footer class="elevation-8 footer">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          Fork on <a href="https://github.com/bjornlug">GitHub</a>
        </div>
        <div class="col"></div>
        <div class="col-auto">
          <a href="https://bjornlu.netlify.com">Bjorn Lu</a> 2019
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: var(--primary-color);
  color: var(--light-color);
}
</style>
