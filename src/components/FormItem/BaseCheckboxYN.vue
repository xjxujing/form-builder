<template>
  <div class="custom-item">
    <div style="display: flex;justify-content: space-between">
      <div class="item-name">
        <van-icon name="fail" color="red" v-if="field.required === 'T'" />
        <span>{{ field.name }}</span>
      </div>
      <van-checkbox v-model="value" shape="square"></van-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseRadio",
  props: {
    field: {
      type: Object
    }
  },

  data() {
    return {
      value: false
    };
  },

  watch: {
    value: {
      handler(val) {
        this.field.value = val ? "T" : "F";
      }
    }
  },

  created() {
    this.checkValue();
  },

  methods: {
    checkValue() {
      this.value = this.field.value === "T";
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
