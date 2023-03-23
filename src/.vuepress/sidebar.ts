import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/notes/": "structure",
  "/tutorials/": "structure",
  "/YeeOnlineJudge/": "structure",
  "/impressions/": [
    {
      text: "2023 年",
      icon: "time",
      collapsible: true,
      prefix: "2023/",
      children: [
        "jan-1.md",
      ]
    }
  ],
  "/": [
    "",
    "intro",
    "slides",
  ],
});
