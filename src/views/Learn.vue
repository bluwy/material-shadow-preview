<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <h4 class="display-1">Learn</h4>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-responsive class="mx-auto" :aspect-ratio="16/9" width="100%">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rrT6v5sOwJg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </v-responsive>
          <v-card-title primary-title>
            Material Design
          </v-card-title>
          <v-card-text>
            <p class="body-2">
              Material Design is a design language that mimics papers, and creates depth to the screen.
              The particular study of shadows and elevations plays a major role in the design.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="https://en.wikipedia.org/wiki/Material_Design" target="_blank" rel="noopener noreferrer" text color="primary">
              Wiki
              <v-icon right small>fa-external-link-alt</v-icon>
            </v-btn>
            <v-btn href="https://material.io/design/introduction/" target="_blank" rel="noopener noreferrer" color="primary">
              Guidelines
              <v-icon right small>fa-external-link-alt</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card>
          <v-img :aspect-ratio="16/9" width="100%" src="@/assets/images/material-elevations.jpg" alt="Material elevations cheatsheet"></v-img>
          <v-card-title primary-title>
            Shadows and Elevations
          </v-card-title>
          <v-card-text>
            <p class="body-2">
              Material Design uses a 24-depth elevation system to represent how much is lifted upwards.
              The elevation layers are used to convey distance and importance.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn href="https://material.io/design/environment/elevation.html" target="_blank" rel="noopener noreferrer" color="primary">
              Guidelines
              <v-icon right small>fa-external-link-alt</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Learn'
}
</script>

<style>

</style>
