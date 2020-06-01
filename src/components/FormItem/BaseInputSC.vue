<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field
      type="number"
      style="box-sizing: border-box;background-color: #efefef;border-radius: 8px"
      v-model="field.value"
      :name="field.field"
      @input="changeValue"
      :placeholder="field.placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInputSC",
  props: {
    field: {
      type: Object,
      default: () => {}
    },

    score: {
      type: [String, Number, Boolean]
    }
  },

  methods: {
    changeValue(val) {
      if (this.score === false) return;
      if (Number(val) > Number(this.score)) {
        this.$toast({ duration: 500, message: "得分不能超过分值" });
        this.field.value = "";
      }
      if (Number(val) < 0) {
        this.$toast({ duration: 500, message: "得分不能小于0" });
        this.field.value = "";
      }
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
