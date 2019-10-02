<template>
  <v-footer dark color="primary" class="text-center">
    <v-card flat color="primary" width="100%">
      <v-card-text class="white--text">
        <v-row>
          <v-col cols="auto">
            Fork on <a class="white--text font-weight-bold" href="https://github.com/BjornLuG/material-shadow-preview">GitHub</a>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            &copy; <a class="white--text font-weight-bold" href="https://bjornlu.netlify.com">Bjorn Lu</a> {{ new Date().getFullYear() }}
          </v-col>
        </v-row>
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
