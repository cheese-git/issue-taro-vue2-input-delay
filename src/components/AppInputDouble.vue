<template>
  <AppInput :value="value" @input="$emit('input', $event)" />
</template>

<script lang="ts">
import Vue from 'vue'
import AppInput from './AppInput.vue'

export default Vue.extend({
  props: {
    value: String
  },
  components: {
    AppInput
  }
})
</script>