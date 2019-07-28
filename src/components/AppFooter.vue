<template>
  <v-footer dark color="primary" class="text-center">
    <v-card flat color="primary" width="100%">
      <v-card-text>
        <v-layout row wrap>
          <v-flex shrink>
            Fork on <a class="white--text" href="https://github.com/BjornLuG/material-shadow-preview">GitHub</a>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex shrink>
            &copy; <a class="white--text" href="https://bjornlu.netlify.com">Bjorn Lu</a> {{ new Date().getFullYear() }}
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-footer>
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
