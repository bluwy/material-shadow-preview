<template>
  <v-container class="h-full">
    <v-row class="h-full" justify="center" align="center">
      <v-col class="text-center">
        <h1 class="display-4 font-weight-bold">404</h1>
        <p>Oopsie... Page not found. Go to <router-link to="/">Home page</router-link> instead?</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Null'
}
</script>

<style scoped>
.h-full {
  height: 100%;
}
</style>
