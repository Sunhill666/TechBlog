import { defineUserConfig } from "vuepress";
import mdUml from 'markdown-it-plantuml';
import mdTable from 'markdown-it-multimd-table';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  extendsMarkdown: (md) => {
    md.use(mdTable, {
      rowspan: true
    })
    .use(mdUml)
  },

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
