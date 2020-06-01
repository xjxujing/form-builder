<template>
  <div>
    <template v-for="field in config">
      <div :key="field.key">
        <BaseInput v-if="field.type === 'INPUT'" :field="field"></BaseInput>
        <BaseRadio v-if="field.type === 'RADIO'" :field="field"></BaseRadio>
      </div>
    </template>
  </div>
</template>

<script>
import BaseInput from "@/components/FormItem/BaseInput";
import BaseRadio from "@/components/FormItem/BaseRadio";

function changeStr(str) {
  return str.charAt(0) + str.slice(1).toLowerCase();
}
export default {
  name: "FormBuilder",

  components: { BaseInput, BaseRadio },

  props: {
    formConfig: {
      type: Array
    }
  },

  computed: {
    config() {
      let formConfig = JSON.parse(JSON.stringify(this.formConfig));
      formConfig.forEach(item => {
        const ComName = changeStr(item.type);
        item.component = `Base${ComName}`;
        item.value = "";
      });
      return formConfig;
    }
  }
};
</script>

<style lang="less" scoped></style>
