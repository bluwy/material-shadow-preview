<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="display-1">About</h4>
      </v-flex>
      <v-flex md6>
        <v-layout column>
          <v-flex>
            <v-card>
              <v-card-title primary-title>
                Author
              </v-card-title>
              <v-card-text>
                <p>
                  Hi, I'm Bjorn. You can find more info of me on <a href="https://bjornlu.netlify.com">my website</a>.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card>
              <v-card-title primary-title>
                Website
              </v-card-title>
              <v-card-text>
                <p>
                  I had always liked the idea of a paper interface from Material Design.
                  Although the widespread adoption had caused some lack of creativity on the web,
                  the particular study of elevations in the guidelines has still stood out for me.
                </p>
                <p>
                  Visualizing how the elevations look was a problem I had, so I figured I'll build
                  a playground to test out the values, and thats generally how this website came about.
                </p>
                <p>
                  In the end, I kind of overdid the whole playground idea and made custom CSS output,
                  downloadable styles and a learning section. Many thanks to <a href="https://vuetifyjs.com">Vuetify</a>
                  for the build-in Material look and its provided SCSS that made this project a smooth sailing.
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-card-title primary-title>
            Attributions
          </v-card-title>
          <v-card-text>
            <p>This website was made possible thanks to:</p>
            <ul>
              <li><a href="https://vuejs.org">Vue</a></li>
              <li><a href="https://vuex.vuejs.org">Vuex</a></li>
              <li><a href="https://router.vuejs.org">Vue Router</a></li>
              <li><a href="https://vuetifyjs.com">Vuetify</a></li>
              <li><a href="https://highlightjs.org">Highlight.js</a></li>
              <li><a href="https://netlify.com">Netlify</a></li>
              <li><a href="https://material.io/design/">Material Design</a></li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>
