<template>
  <v-app-bar app dark color="primary">
    <v-toolbar-title>
      <router-link class="white--text" to="/">
        Material Shadow Preview
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn text to="/download">Download</v-btn>
      <v-btn text to="/learn">Learn</v-btn>
      <v-btn text to="/about">About</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>

</style>
