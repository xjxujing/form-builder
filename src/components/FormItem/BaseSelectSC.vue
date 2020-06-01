<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field
      v-if="isPopup"
      readonly
      clickable
      :name="field.name"
      :value="field.value"
      placeholder="请选择"
      @click="onClickSelect"
    />

    <van-popup v-if="isPopup" v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <van-field
      v-if="!isPopup"
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
  name: "BaseSelectSC",

  data() {
    return {
      showPicker: false,
      isPopup: true
    };
  },

  props: {
    field: {
      type: Object
    },

    score: {
      type: [String, Number, Boolean]
    }
  },

  created() {
    if (this.score === false) {
      this.isPopup = false;
      this.columns = [];
    } else {
      this.isPopup = true;
      this.columns = [...Array(Number(this.score) + 1).keys()];
    }
  },

  methods: {
    onConfirm(value) {
      this.field.value = value;
      this.showPicker = false;
    },

    onClickSelect() {
      this.showPicker = true;
    },

    changeValue(val) {
      if (Number(val) < 0) {
        this.$toast({ duration: 500, message: "扣分不能小于0" });
        this.field.value = "";
      }
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
