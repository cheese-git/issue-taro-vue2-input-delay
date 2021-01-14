<template>
  <input :value="value" @input="$emit('input', $evnet.detail)" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: String
  }
})
</script>