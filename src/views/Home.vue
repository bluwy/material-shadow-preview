<template>
  <v-container grid-list-xl>
    <v-layout column>
      <v-flex>
        <p>
          The Material Design uses a 24-depth elevation system to represent how much is elevated upwards.
          We can use different elevations for different components' states.
          <router-link to="/learn">Learn more...</router-link>
        </p>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-flex shrink>
            <v-select
              :items="presetItems"
              v-model="preset"
              label="Preset"
              hide-details
              style="width: 200px;"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout row wrap justify-center>
          <v-flex xs12 md4>
            <v-card :elevation="idleElevation">
              <v-card-title primary-title>
                <span>Idle</span>
                <v-spacer></v-spacer>
                <v-flex xs1 pa-0>
                  <v-select
                    :items="elevationRange"
                    v-model="idleElevation"
                    hide-details
                    solo
                    flat
                    dense
                    reverse
                    append-icon=""
                    class="pa-0"
                  ></v-select>
                </v-flex>
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="idleElevation"
                  min="0"
                  max="24"
                  step="1"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card :elevation="hoverElevation">
              <v-card-title primary-title>
                <span>Hover</span>
                <v-spacer></v-spacer>
                <v-flex xs1 pa-0>
                  <v-select
                    :items="elevationRange"
                    v-model="hoverElevation"
                    hide-details
                    solo
                    flat
                    dense
                    reverse
                    append-icon=""
                    class="pa-0"
                  ></v-select>
                </v-flex>
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="hoverElevation"
                  min="0"
                  max="24"
                  step="1"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 md4>
            <v-card :elevation="activeElevation">
              <v-card-title primary-title>
                <span>Active</span>
                <v-spacer></v-spacer>
                <v-flex xs1 pa-0>
                  <v-select
                    :items="elevationRange"
                    v-model="activeElevation"
                    hide-details
                    solo
                    flat
                    dense
                    reverse
                    append-icon=""
                    class="pa-0"
                  ></v-select>
                </v-flex>
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="activeElevation"
                  min="0"
                  max="24"
                  step="1"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex my-5 text-center>
        <v-card class="box-result" :class="{ 'idle': simulateIdle, 'hover': simulateHover, 'active': simulateActive }">
          <v-card-title primary-title class="justify-center">
            Result
          </v-card-title>
          <v-card-text>
            All states combined. Hover/click me to see results!
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex class="touchscreen">
        <v-radio-group v-model="simulateValue" row>
          <template v-slot:prepend>
            <span class="mt-1">Simulate: </span>
          </template>
          <v-radio label="Idle" value="idle"></v-radio>
          <v-radio label="Hover" value="hover"></v-radio>
          <v-radio label="Active" value="active"></v-radio>
        </v-radio-group>
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
      elevationRange: [...Array(25).keys()],
      idleElevation: 0,
      hoverElevation: 0,
      activeElevation: 0,
      simulateValue: ''
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
    },
    simulateIdle () {
      return this.simulateValue === 'idle'
    },
    simulateHover () {
      return this.simulateValue === 'hover'
    },
    simulateActive () {
      return this.simulateValue === 'active'
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
:root {
  --box-idle-shadow: none;
  --box-hover-shadow: none;
  --box-active-shadow: none;
}

.box-result {
  box-shadow: var(--box-idle-shadow);
}
.box-result:hover {
  box-shadow: var(--box-hover-shadow);
}
.box-result:focus, .box-result:active {
  box-shadow: var(--box-active-shadow);
}
.box-result.idle {
  box-shadow: var(--box-idle-shadow);
}
.box-result.hover {
  box-shadow: var(--box-hover-shadow);
}
.box-result.active {
  box-shadow: var(--box-active-shadow);
}

/* Is accurate pointer (e.g. mouse) */
@media (pointer: fine) {
  .touchscreen {
    display: none;
    visibility: hidden;
  }
}
</style>
