<template>
  <div class="custom-item">
    <div class="item-name">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <van-field :name="field.name">
      <template #input>
        <Upload
          dirId="0"
          :id="id"
          format="IMAGE"
          :imgNum="field.maxNum"
          @uploaded="uploadSuccess($event, id)"
          :imgsArr="field.value"
          ref="upload"
        >
        </Upload>
      </template>
    </van-field>
  </div>
</template>

<script>
import Upload from "@/components/Upload";

export default {
  name: "BasePhoto",
  components: { Upload },
  props: {
    id: {
      type: String
    },
    field: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    uploadSuccess(val) {
      this.field.value = val.fileList;
    }
  }
};
</script>

<style lang="less">
@import "base";
</style>
