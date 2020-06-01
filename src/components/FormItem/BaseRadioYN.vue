<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field>
      <template #input>
        <van-radio-group v-model="field.value" direction="horizontal">
          <van-radio
            v-for="(option, i) in field.options"
            :name="option"
            :key="i"
            >{{ option }}</van-radio
          >
        </van-radio-group>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  props: {
    field: {
      type: Object,
      default: () => {
        return {
          label: "单选",
          field: "radio",
          type: "RADIO",
          options: ["苹果", "梨子"],
          value: ""
        };
      }
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
