<template>
  <div>
    <div class="item-name label">
      <van-icon name="fail" color="red" v-if="field.required === 'T'" />
      <span>{{ field.name }}</span>
    </div>
    <DrawCanvas
      :ref="`drawcanvas_${id}`"
      :id="id"
      :value="field.value"
      @change="confirmSign"
      @clearImg="clearImg"
    ></DrawCanvas>

    <UploadSign
      v-show="false"
      dirId="0"
      id="0"
      format="IMAGE"
      @signUrl="getSignUrl"
      ref="uploadSign"
    ></UploadSign>
  </div>
</template>

<script>
import DrawCanvas from "@/components/DrawCanvas";
import { dataURLtoFile } from "@/utils/utils";
import UploadSign from "@/components/UploadSign";

export default {
  name: "BaseSign",
  components: { DrawCanvas, UploadSign },
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
    // 确认签名
    confirmSign(id) {
      this.$refs.uploadSign.getSignUrl(
        dataURLtoFile(this.$refs[`drawcanvas_${id}`].produceImg(), "sign.png")
      );
    },

    getSignUrl(url) {
      this.$set(this.field, "value", url[url.length - 1].url);
    },

    // 清除签名
    clearImg(e) {
      let { callback } = e;
      this.$set(this.field, "value", "");
      if (callback) {
        callback();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "base";

.label {
  background-color: #fff;
  padding: 10px;
  color: #444;
  font-size: 14px;
}
</style>
