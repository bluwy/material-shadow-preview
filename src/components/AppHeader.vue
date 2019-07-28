<template>
  <v-app-bar app absolute dark color="primary">
    <v-toolbar-title>
      <router-link class="white--text" to="/">
        Material Shadow Preview
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu v-if="$vuetify.breakpoint.smAndDown">
      <template #activator="{ on }">
        <v-btn text icon v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">{{ item.text }}</v-list-item>
      </v-list>
    </v-menu>
    <v-toolbar-items v-else>
      <v-btn v-for="(item, i) in items" :key="i" text :to="item.link">{{ item.text }}</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      items: [
        { text: 'Download', link: '/download' },
        { text: 'Learn', link: '/learn' },
        { text: 'About', link: '/about' }
      ]
    }
  }
}
</script>

<style>

</style>
