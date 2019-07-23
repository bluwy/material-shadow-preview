<template>
  <div id="app" class="d-flex flex-column">
    <AppHeader/>
    <router-view class="flex-grow-1"/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
:root {
  --light-color: #f4f5f7;
  --gray-color: #9aa2bc;
  --primary-color: #8a57cc;
  --accent-color: #7176c4;
  --dark-color: #2c294d;
}

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
}

html {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-display: swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--light-color);
  color: #2c294d;
}

body {
  margin: 0;
}

a {
  position: relative;
  color: var(--light-volor);
  text-decoration: none;
}
a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--light-color);
  transform: scale(0);
  transition: transform .3s cubic-bezier(0.215, 0.610, 0.355, 1);
}
a:hover::after, a:focus::after, a:active::after {
  transform: scaleX(1);
}

button {
  padding: .5rem 1rem;
  border-radius: .25rem;
}
button:focus, button:active {
  outline: none;
}

select {
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: .25rem;
}

label {
  display: inline-block;
  min-width: 55px;
}
</style>
