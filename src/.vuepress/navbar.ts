import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "笔记", icon: "alias", link: "/notes/" },
  {
    text: "知识库",
    icon: "repo",
    children: [
      {
        text: "目录",
        icon: "list",
        link: "/tutorials/"
      },
      {
        text: "运维",
        icon: "engine",
        link: "/tutorials/ops/"
      },
      {
        text: "后端",
        icon: "back-stage",
        link: "/tutorials/backend/"
      },
      {
        text: "文档",
        icon: "article",
        link: "/tutorials/docs/"
      },
      {
        text: "其他",
        icon: "others",
        link: "/tutorials/others/"
      },
    ]
  },
  { text: "随想", icon: "creative", link: "/impressions/README.md" },
  { text: "YeeOnlineJudge", icon: "", link: "/YeeOnlineJudge/"},
]);
