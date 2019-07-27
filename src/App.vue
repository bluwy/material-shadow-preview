<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container fluid>
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

.code-theme > .hljs {
  background-color: #1e1e1e;
  color: #dcdcdc;
  width: 100%;
  max-height: 400px;
}
.code-theme > .hljs::before {
  content: none;
}
</style>
