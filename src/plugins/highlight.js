import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'

// Import languages
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'

// Import theme
import 'highlight.js/styles/vs2015.css'

Vue.use(VueHighlightJS, {
  languages: {
    css,
    scss
  }
})
