<template>
  <view class="index">
    <view>测试方式：在输入框中快速输入一串数字，如：123456789</view>
    <van-divider contentPosition="center">会出现卡顿</van-divider>
    <view>封装了 van-field 的自定义组件，通过 v-model 进行双向绑定：</view>
    <VanInput v-model="value1" />
    <view>封装了 van-field 的自定义组件，通过监听事件进行双向绑定：</view>
    <VanInput :value="value2" @input="value2 = $event" />
    <van-divider contentPosition="center">不会出现卡顿</van-divider>
    <view>单独的 van-field，通过 v-model 进行双向绑定：</view>
    <van-field v-model="value3" />
    <view>封装了小程序原生输入框的自定义组件，通过 v-model 进行双向绑定：</view>
    <AppInput v-model="value4" />
    <view>小程序原生输入框，通过 v-model 进行双向绑定：</view>
    <input v-model="value5" />
  </view>
</template>

<script lang="ts">
import Vue from "vue";
import './index.css'
import AppInput from '../../components/AppInput.vue'
import VanInput from '../../components/VanInput.vue'

export default Vue.extend({
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    }
  },
  components: {
    AppInput, VanInput
  }
})
</script>

<style >
.index {
  padding: 20px;
}
</style>