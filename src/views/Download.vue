<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="display-1">Download</h4>
      </v-flex>
      <v-flex md6>
        <download-card title="CSS" href="/css/shadow.css" lang="css">
          <template #desc>
            Copy of <a href="https://vuetifyjs.com">Vuetify</a>'s compiled shadows CSS.
          </template>
        </download-card>
      </v-flex>
      <v-flex md6>
        <download-card title="SCSS Mixin" href="/css/shadow-mixin.scss" lang="scss">
          <template #desc>
            Modified version of Google's <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation">elevation mixin</a>.
          </template>
        </download-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DownloadCard from '@/components/DownloadCard.vue'

export default {
  name: 'Download',
  components: {
    DownloadCard
  }
}
</script>

<style>

</style>
