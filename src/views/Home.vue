<template>
  <div class="home">
    <FormBuilder :formConfig="formConfig" />
  </div>
</template>

<script>
// @ is an alias to /src
import FormBuilder from "@/components/FormBuilder.vue";
import { formConfig } from "@/views/formConfig";

export default {
  name: "Home",
  components: {
    FormBuilder
  },

  data() {
    return {
      formConfig: []
    };
  },

  created() {
    this.formConfig = formConfig;
  }
};
</script>

<style>
.home {
  background-color: #f7f8fa;
  height: 100vh;
}
</style>
