<template>
  <v-card>
    <v-card-title primary-title>
      <slot name="title">{{ title }}</slot>
    </v-card-title>
    <v-card-text>
      <slot name="desc">{{ desc }}</slot>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-checkbox v-model="preview" class="my-auto mr-3 pt-0" label="Preview" hide-details></v-checkbox>
      <v-btn color="primary" :href="href" download>
        Download
        <v-icon right small>mdi-download</v-icon>
      </v-btn>
    </v-card-actions>
    <transition name="code-transition">
      <v-card-text v-show="preview && code">
        <highlight-code class="code-theme" :lang="lang" :code="code"></highlight-code>
      </v-card-text>
    </transition>
  </v-card>
</template>

<script>
export default {
  name: 'DownloadCard',
  props: ['title', 'desc', 'href', 'lang'],
  data () {
    return {
      preview: false,
      previewLoaded: false,
      code: ''
    }
  },
  watch: {
    preview () {
      if (!this.previewLoaded) {
        this.previewLoaded = true
        this.loadCode()
      }
    }
  },
  methods: {
    loadCode () {
      const req = new XMLHttpRequest()
      req.open('GET', this.href)
      req.onreadystatechange = () => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            this.code = req.responseText
          } else {
            this.code = 'Unable to read file'
          }
        }
      }
      req.send(null)
    }
  }
}
</script>

<style>

</style>
