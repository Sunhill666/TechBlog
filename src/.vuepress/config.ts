import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "荒地",
      description: "在荒地产出知识",
    }
  },

  theme,

  shouldPrefetch: false,
});
