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
    ]
  },
  { text: "随想", icon: "creative", link: "/impressions/README.md" },
  { text: "YeeOnlineJudge", icon: "", link: "/YeeOnlineJudge/"},
]);
