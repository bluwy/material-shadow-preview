<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container class="main-container" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
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

a {
  text-decoration: none;
}

.main-container {
  height: 100%;
}

.code-theme > .hljs {
  background-color: #1e1e1e;
  color: #dcdcdc;
  width: 100%;
  max-height: 400px;
}
.code-theme > .hljs::before {
  content: none;
}

.code-transition-enter, .code-transition-leave-to {
  max-height: 0;
  opacity: 0;
}
.code-transition-enter-to, .code-transition-leave {
  max-height: 400px;
  opacity: 1;
}
.code-transition-enter-active {
  transition: max-height .2s cubic-bezier(.4, 0, .2, 1), opacity .3s .2s cubic-bezier(.4, 0, .2, 1);
}
.code-transition-leave-active {
  transition: max-height .2s .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1);
}
</style>
