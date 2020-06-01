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
      :value="dateValue"
      :placeholder="field.placeholder"
      @click="onClickSelect"
    />

    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        v-model="startDate"
        type="date"
        title="选择时间"
        @confirm="onConfirmStart"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { transDate } from "@/utils/utils";

export default {
  name: "BaseSelectTime",

  data() {
    return {
      showPicker: false,
      dateValue: "",
      endValue: "",
      startDate: new Date(),
      endDate: new Date()
    };
  },
  props: {
    field: {
      type: Object
    }
  },

  watch: {
    timeValue: {
      handler(val) {
        this.field.value = val;
      }
    }
  },

  computed: {
    timeValue() {
      return this.dateValue;
    }
  },

  created() {
    this.getDateValue();
  },

  methods: {
    getDateValue() {
      if (this.field.value) {
        this.dateValue = this.field.value;
      }
    },

    onConfirmStart(val) {
      this.dateValue = transDate(val).split(" ")[0];
      this.showPicker = false;
    },

    onClickSelect() {
      this.showPicker = true;
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
