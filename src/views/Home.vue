<template>
  <main class="d-flex flex-column container">
    <section class="my-5">
      <div class="row mb-3">
        <div class="col">
          <h2 class="my-0 options-header">Settings</h2>
        </div>
        <div class="col-auto">
          <label for="preset">Preset</label>
          <select v-model="preset" name="preset" id="preset">
            <option class="preset-option" value="custom">Custom</option>
            <option v-for="(p, i) in presetKeys" :key="i" class="preset-option" :value="p">{{ p | capitalize }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-4 mb-3">
          <div class="box box-idle">
            <Slider v-model="idleElevation" label="Idle" minValue="0" maxValue="24" step="1"/>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-3">
          <div class="box box-hover">
            <Slider v-model="hoverElevation" label="Hover" minValue="0" maxValue="24" step="1"/>
          </div>
        </div>
        <div class="col-12 col-lg-4 mb-3">
          <div class="box box-active">
            <Slider v-model="activeElevation" label="Active" minValue="0" maxValue="24" step="1"/>
          </div>
        </div>
      </div>
    </section>
    <section class="d-flex flex-grow-1 mb-5">
      <div class="box box-combine">
        <div class="box-content">
          <span>Combine</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  data () {
    return {
      preset: 'custom',
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
    presetKeys () {
      return Object.keys(this.presets)
    },
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
  watch: {
    boxIdleShadow (val) {
      document.documentElement.style.setProperty('--box-idle-shadow', val)
    },
    boxHoverShadow (val) {
      document.documentElement.style.setProperty('--box-hover-shadow', val)
    },
    boxActiveShadow (val) {
      document.documentElement.style.setProperty('--box-active-shadow', val)
    },
    preset (val) {
      if (val !== 'custom') {
        const elevations = this.presets[this.preset]
        this.idleElevation = elevations[0]
        this.hoverElevation = elevations[1]
        this.activeElevation = elevations[2]
      }
    }
  },
  filters: {
    capitalize (val) {
      if (!val) return ''
      val = val.toString()
      return val.charAt(0).toUpperCase() + val.slice(1)
    }
  },
  mounted () {
    this.idleElevation = 2
    this.hoverElevation = 4
    this.activeElevation = 6
  },
  components: {
    Slider
  }
}
</script>

<style scoped>
.options-header {
  color: var(--primary-color);
}

.preset-option {
  text-transform: capitalize;
}

.box {
  position: relative;
  padding: 1rem;
  border-radius: .25rem;
  transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.box .box-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

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
  width: 100%;
  box-shadow: var(--box-idle-shadow);
}
.box-combine:hover {
  box-shadow: var(--box-hover-shadow);
}
.box-combine:focus, .box-combine:active {
  box-shadow: var(--box-active-shadow);
}
</style>
