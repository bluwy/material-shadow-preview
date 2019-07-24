<template>
  <v-container grid-list-xl>
    <v-layout column>
      <v-flex>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-flex shrink>
            <v-select
              :items="presetItems"
              v-model="preset"
              label="Preset"
              outlined
              style="width: 200px;"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row wrap justify-center>
          <v-flex xs12 md4>
            <v-card class="box-idle">
              <v-card-title primary-title>
                Idle
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="idleElevation"
                  min="0"
                  max="24"
                  step="1"
                  thumb-label
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card class="box-hover">
              <v-card-title primary-title>
                Hover
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="hoverElevation"
                  min="0"
                  max="24"
                  step="1"
                  thumb-label
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card class="box-active">
              <v-card-title primary-title>
                Active
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="activeElevation"
                  min="0"
                  max="24"
                  step="1"
                  thumb-label
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex my-5 text-center>
        <v-card class="box-combine">
          <v-card-title primary-title class="justify-center">
            Result
          </v-card-title>
          <v-card-text>
            All states combined. Hover/click me to see results!
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      preset: 'custom',
      presetItems: [{ text: 'Custom', value: 'custom' }],
      idleElevation: 0,
      hoverElevation: 0,
      activeElevation: 0
    }
  },
  computed: {
    ...mapState([
      'presets'
    ]),
    ...mapGetters([
      'getElevationShadow'
    ]),
    boxIdleShadow () {
      return this.getElevationShadow(this.idleElevation)
    },
    boxHoverShadow () {
      return this.getElevationShadow(this.hoverElevation)
    },
    boxActiveShadow () {
      return this.getElevationShadow(this.activeElevation)
    }
  },
  methods: {
    capitalize (val) {
      if (!val) return ''
      val = val.toString()
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  },
  watch: {
    boxIdleShadow (val) {
      this.preset = 'custom'
      document.documentElement.style.setProperty('--box-idle-shadow', val)
    },
    boxHoverShadow (val) {
      this.preset = 'custom'
      document.documentElement.style.setProperty('--box-hover-shadow', val)
    },
    boxActiveShadow (val) {
      this.preset = 'custom'
      document.documentElement.style.setProperty('--box-active-shadow', val)
    },
    preset (val) {
      if (this.presets.hasOwnProperty(val)) {
        const elevations = this.presets[val]
        this.idleElevation = elevations[0]
        this.hoverElevation = elevations[1]
        this.activeElevation = elevations[2]
      }
    }
  },
  mounted () {
    this.idleElevation = 2
    this.hoverElevation = 4
    this.activeElevation = 6

    Object.keys(this.presets).forEach((val) => {
      this.presetItems.push({ text: this.capitalize(val), value: val })
    })
  }
}
</script>

<style scoped>

.box-idle {
  box-shadow: var(--box-idle-shadow);
}

.box-hover {
  box-shadow: var(--box-hover-shadow);
}

.box-active {
  box-shadow: var(--box-active-shadow);
}

.box-combine {
  box-shadow: var(--box-idle-shadow);
}
.box-combine:hover {
  box-shadow: var(--box-hover-shadow);
}
.box-combine:focus, .box-combine:active {
  box-shadow: var(--box-active-shadow);
}
</style>
