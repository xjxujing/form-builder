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
      placeholder="请输入得分"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInputNumber",
  props: {
    field: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    changeValue(val) {
      if (Number(val) > Number(this.field.maxNum)) {
        this.$toast({ duration: 500, message: `不能大于${this.field.maxNum}` });
        this.field.value = "";
      }
      if (Number(val) < Number(this.field.minNum)) {
        this.$toast({ duration: 500, message: `不能小于${this.field.minNum}` });
        this.field.value = "";
      }
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
