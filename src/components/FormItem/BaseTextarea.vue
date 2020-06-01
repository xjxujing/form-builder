<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field
      v-model="field.value"
      rows="2"
      autosize
      type="textarea"
      :maxlength="Number(field.maxNum) ? field.maxNum : '1000'"
      :placeholder="field.placeholder"
      show-word-limit
      style="box-sizing: border-box;background-color: #efefef;border-radius: 8px"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",
  props: {
    field: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
