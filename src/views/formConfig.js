export const formConfig = [
  {
    label: "邮箱",
    key: "email",
    type: "INPUT",
    placeholder: "请输入",
    validate: {
      required: "T",
      pattern: /^.+@.+$/
    },
    isEnable: "T"
  },
  {
    label: "单选一个",
    key: "radio",
    type: "RADIO",
    direction: "horizontal",
    options: ["夏琪", "莉莉", "女帝"],
    validate: {
      required: "T",
      pattern: /^.+@.+$/,
      tips: "请选择"
    },
    isEnable: "T"
  }
];
