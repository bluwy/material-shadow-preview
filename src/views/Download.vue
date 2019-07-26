<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="display-1">Download</h4>
        <p>Download the material elevation styles in CSS or SCSS</p>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex>
                CSS
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink>
                <v-btn color="primary">Download</v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <v-layout row wrap>
              <v-flex>
                SCSS
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex shrink>
                <v-btn color="primary">Download</v-btn>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Download'
}
</script>

<style>

</style>
