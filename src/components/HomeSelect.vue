<template>
  <v-menu max-height="300">
    <template #activator="{ on }">
      <v-btn text icon small color="primary" v-on="on">
        {{ value }}
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :class="{ 'v-list-item--active': item === value }"
        color="primary"
        @click="$emit('input', item)"
      >
        <v-list-item-title >{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: 'HomeSelect',
  props: ['value', 'items']
}
</script>

<style>

</style>
