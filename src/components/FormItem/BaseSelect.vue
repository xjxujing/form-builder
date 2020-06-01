<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field
      readonly
      clickable
      :name="field.name"
      :value="field.value"
      :placeholder="field.placeholder"
      @click="onClickSelect(field.options)"
    />

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",

  data() {
    return {
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  },
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

  methods: {
    onConfirm(value) {
      this.field.value = value.text;
      this.showPicker = false;
    },

    onClickSelect(options) {
      this.columns = this.arrData(options);
      this.showPicker = true;
    },

    arrData(arrStr, type) {
      let arr = [];
      try {
        arr = JSON.parse(arrStr);
        if (type == "SELECT") {
          arr.forEach((item, index) => {
            this.$set(arr[index], "value", item.text);
          });
        }
      } catch (err) {
        console.warn(err);
      }
      return arr;
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
