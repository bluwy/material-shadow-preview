<template>
  <div class="row">
    <div class="col">
      <label for="slider">{{ label }}</label>
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        type="range"
        name="slider"
        id="slider"
        :step="step"
        :min="minValue"
        :max="maxValue"
        :aria-valuemin="minValue"
        :aria-valuemax="maxValue"
        :aria-valuenow="value"
      >
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        type="number"
        name="number"
        id="number"
        :step="step"
        :min="minValue"
        :max="maxValue"
        :aria-valuemin="minValue"
        :aria-valuemax="maxValue"
        :aria-valuenow="value"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: [
    'value',
    'label',
    'minValue',
    'maxValue',
    'step'
  ]
}
</script>

<style>

</style>
