<template>
  <v-container>
    <v-row class="flex-column">
      <v-col>
        <p>
          Material Design uses a 24-depth elevation system to represent how much is lifted upwards.
          Play around with the elevations below and see its result!
          <router-link to="/learn">Learn more...</router-link>
        </p>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="auto">
            <v-select
              v-model="preset"
              class="preset-select"
              :items="presetItems"
              label="Preset"
              hide-details
            ></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn color="primary" icon title="Randomize elevations" @click="randomElevations">
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card :elevation="idleElevation">
              <v-card-title primary-title>
                <span>Idle</span>
                <v-spacer></v-spacer>
                <home-select v-model="idleElevation" :items="elevationRange" @input="elevationChange"></home-select>
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="idleElevation"
                  min="0"
                  max="24"
                  step="1"
                  @change="elevationChange"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card :elevation="hoverElevation">
              <v-card-title primary-title>
                <span>Hover</span>
                <v-spacer></v-spacer>
                <home-select v-model="hoverElevation" :items="elevationRange" @input="elevationChange"></home-select>
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="hoverElevation"
                  min="0"
                  max="24"
                  step="1"
                  @change="elevationChange"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card :elevation="activeElevation">
              <v-card-title primary-title>
                <span>Active</span>
                <v-spacer></v-spacer>
                <home-select v-model="activeElevation" :items="elevationRange" @input="elevationChange"></home-select>
              </v-card-title>
              <v-card-text>
                <v-slider
                  v-model="activeElevation"
                  min="0"
                  max="24"
                  step="1"
                  @change="elevationChange"
                ></v-slider>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="my-5 text-center">
        <button
          class="result"
          :class="{ 'idle': simulateIdle, 'hover': simulateHover, 'active': simulateActive }"
          :style="{ '--idle-shadow': idleShadow, '--hover-shadow': hoverShadow, '--active-shadow': activeShadow }"
        >
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
              <v-row v-if="isTouchscreen" justify-center>
                <v-col cols="auto">
                  <v-radio-group v-model="simulateValue" row>
                    <v-radio label="Idle" value="idle"></v-radio>
                    <v-radio label="Hover" value="hover"></v-radio>
                    <v-radio label="Active" value="active"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </button>
      </v-col>
      <v-col>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-checkbox v-model="viewResultCss" class="my-auto mr-3 pt-0" label="Preview" hide-details></v-checkbox>
          <v-btn color="primary" @click="copyCode">
            Copy result CSS
            <v-icon right small>mdi-content-copy</v-icon>
          </v-btn>
        </div>
        <transition name="code-transition">
          <highlight-code v-show="viewResultCss" ref="code" class="code-theme mt-4" lang="css">
            .result {
              box-shadow: {{ idleShadow }};
            }
            .result:hover, .result:focus {
              box-shadow: {{ hoverShadow }};
            }
            .result:active {
              box-shadow: {{ activeShadow }};
            }
          </highlight-code>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import HomeSelect from '@/components/HomeSelect.vue'

export default {
  name: 'Home',
  components: {
    HomeSelect
  },
  data () {
    return {
      preset: 'custom',
      presetItems: [{ text: 'Custom...', value: 'custom' }],
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
    idleShadow () {
      return this.getElevationShadow(this.idleElevation)
    },
    hoverShadow () {
      return this.getElevationShadow(this.hoverElevation)
    },
    activeShadow () {
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
  watch: {
    preset (val) {
      if (val in this.presets) {
        const elevations = this.presets[val]
        this.idleElevation = elevations[0]
        this.hoverElevation = elevations[1]
        this.activeElevation = elevations[2]
      }
    }
  },
  mounted () {
    Object.keys(this.presets).forEach((val) => {
      this.presetItems.push({ text: this.camelToNormal(val), value: val })
    })

    this.isTouchscreen = window.matchMedia('(pointer: coarse)').matches
    if (this.isTouchscreen) {
      this.simulateValue = 'idle'
    }

    this.randomElevations()
  },
  methods: {
    camelToNormal (val) {
      if (!val) return ''
      val = val.toString()
      return val.charAt(0).toUpperCase() + val.slice(1).replace(/[A-Z]/g, (match) => ' ' + match)
    },
    elevationChange () {
      this.preset = 'custom'
    },
    copyCode () {
      this.copyText(this.$refs.code.$el.innerText)
    },
    copyText (text) {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      textarea.remove()
    },
    randomElevations () {
      this.preset = 'custom'
      this.idleElevation = Math.floor(Math.random() * 25)
      this.hoverElevation = Math.floor(Math.random() * 25)
      this.activeElevation = Math.floor(Math.random() * 25)
    }
  }
}
</script>

<style scoped>
.preset-select {
  width: 210px;
  max-width: 100%;
}

.result {
  box-shadow: var(--idle-shadow);
  width: 100%;
  transition: box-shadow .2s cubic-bezier(.4, 0, .2, 1);
}
.result:hover, .result:focus {
  box-shadow: var(--hover-shadow);
  outline: none;
}
.result:active {
  box-shadow: var(--active-shadow);
}
.result.idle {
  box-shadow: var(--idle-shadow);
}
.result.hover {
  box-shadow: var(--hover-shadow);
}
.result.active {
  box-shadow: var(--active-shadow);
}
</style>
