<template>
  <van-field
    :label="field.label"
    v-model="field.value"
    :name="field.field"
    :placeholder="field.placeholder"
  >
  </van-field>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
