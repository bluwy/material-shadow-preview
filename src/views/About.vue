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
                  Being a fan of Material Design, I had always liked the idea behind a paper interface.
                  However, I too agree that its overused design in many applications causes some lack of creativity
                  and have a "boring" look. Nonetheless, I really admire their shadow system and it's now being
                  used in all of my designs.
                </p>
                <p>
                  Finding the shadows' CSS values was somewhat trivial too as the Material guidelines didn't actually provide them.
                  Even though the <a href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-elevation">SCSS shadow calculations</a>
                  can be found on GitHub, there wasn't a simple plug-and-play method for it. Visualizing how the elevations
                  look was also another problem.
                </p>
                <p>
                  I ended up using <a href="https://vuetifyjs.com">Vuetify's</a> elevation implementation throughout
                  the website. The download CSS and SCSS are all values from Vuetify.
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
