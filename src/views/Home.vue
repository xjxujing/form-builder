<template>
  <div class="home">
    <van-button @click="$router.push('/about')">按钮</van-button>
    <FormBuilder :formConfig="formConfig" />
  </div>
</template>

<script>
import { formConfig } from "@/views/formConfig";

export default {
  name: "Home",

  props: {
    id: String
  },

  data() {
    return {
      formConfig: []
    };
  },

  created() {
    this.formConfig = formConfig;
    console.log("this.$props：", this.id);
  }
};
</script>

<style>
.home {
  background-color: #f7f8fa;
  height: 100vh;
}
</style>
