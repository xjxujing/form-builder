<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field :name="field.field">
      <template #input>
        <van-checkbox-group v-model="field.value">
          <van-checkbox
            style="padding-bottom: 5px"
            v-for="(option, i) in arrData(field.options)"
            :name="option.text"
            :key="i"
            shape="square"
          >
            {{ option.text }}
          </van-checkbox>
        </van-checkbox-group>
      </template>
    </van-field>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
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
      // console.log(arr)
      return arr;
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
