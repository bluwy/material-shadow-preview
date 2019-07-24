<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
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

a {
  text-decoration: none;
}
</style>
