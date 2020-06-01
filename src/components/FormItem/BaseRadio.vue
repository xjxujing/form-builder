<template>
  <van-field :label="field.label">
    <template #input>
      <van-radio-group v-model="field.value" :direction="field.direction">
        <van-radio v-for="(option, i) in field.options" :name="option" :key="i"
          >{{ option }}
        </van-radio>
      </van-radio-group>
    </template>
  </van-field>
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
  },

  computed: {},
  created() {
    console.log(this.field.value);
  }
};
</script>

<style lang="less">
@import "base";
</style>
