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
                <HomeSelect v-model="idleElevation" :items="elevationRange"></HomeSelect>
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
                <HomeSelect v-model="hoverElevation" :items="elevationRange"></HomeSelect>
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
                <HomeSelect v-model="activeElevation" :items="elevationRange"></HomeSelect>
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
        <button class="box-result" :class="{ 'idle': simulateIdle, 'hover': simulateHover, 'active': simulateActive }">
          <v-card elevation="0">
            <v-card-title primary-title class="justify-center">
              Result
            </v-card-title>
            <v-card-text>
              All states combined.
              <span v-if="isTouchscreen">
                Simulate state with the radios below:
              </span>
              <span v-else>
                Hover/click me to see results!
              </span>
              <v-layout v-if="isTouchscreen" justify-center>
                <v-flex shrink>
                  <v-radio-group v-model="simulateValue" row>
                    <v-radio label="Idle" value="idle"></v-radio>
                    <v-radio label="Hover" value="hover"></v-radio>
                    <v-radio label="Active" value="active"></v-radio>
                  </v-radio-group>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </button>
      </v-flex>
      <v-flex>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-flex shrink>
            <v-checkbox v-model="viewResultCss" label="View CSS"  hide-details class="ma-0"></v-checkbox>
          </v-flex>
          <v-flex shrink>
            <v-btn color="primary">Download</v-btn>
          </v-flex>
        </v-layout>
        <div v-show="viewResultCss">
          <highlight-code class="code-theme" lang="css">
            .result {
              box-shadow: {{ boxIdleShadow }};
            }
            .result:hover, .result:focus {
              box-shadow: {{ boxHoverShadow }};
            }
            .result:active {
              box-shadow: {{ boxActiveShadow }};
            }
          </highlight-code>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HomeSelect from '@/components/HomeSelect.vue'

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
      simulateValue: '',
      isTouchscreen: false,
      viewResultCss: false
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

    this.isTouchscreen = window.matchMedia('(pointer: coarse)').matches
    if (this.isTouchscreen) {
      this.simulateValue = 'idle'
    }
  },
  components: {
    HomeSelect
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
  width: 100%;
  transition: box-shadow .2s cubic-bezier(.4, 0, .2, 1);
}
.box-result:hover, .box-result:focus {
  box-shadow: var(--box-hover-shadow);
  outline: none;
}
.box-result:active {
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
</style>
