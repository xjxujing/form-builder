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
      :value="field.value.length ? field.value[0].name : ''"
      :placeholder="field.placeholder"
      @click="onClickSelect(field.options)"
    />

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        value-key="name"
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
        return {};
      }
    }
  },

  created() {
    this.getPersonData();
  },

  methods: {
    getPersonData() {
      this.$postL(
        "/corp/staff/listByStoreIdOrOrgId",
        { storeId: this.$route.query.storeId },
        res => {
          // console.log("人员----", res.data.arr)
          this.columns = res.data.arr;
        }
      );
    },

    onConfirm(value) {
      this.field.value[0] = value;
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
