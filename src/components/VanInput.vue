<template>
  <van-field :value="value" @input="$emit('input', $event.detail)" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: String
  },
})
</script>