import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";

export default hopeTheme({
  hostname: "https://blog.moorlands.cn",

  author: {
    name: "游日山",
    url: "https://blog.moorlands.cn",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",
  logoDark: "/logo-dark.svg",

  repo: "Sunhill666/TechBlog",

  docsDir: "src",
  docsBranch: "master",

  blog: {
    avatar: "/avatar.jpg",
    roundAvatar: true,
    description: "个人开发者，计算机科学与技术专业研一，研究方向为人工智能和机器学习",
    medias: {
      BiliBili: "https://space.bilibili.com/95746945",
      Email: "mailto:sunhilly@qq.com",
      Gitee: "https://gitee.com/sunhill",
      GitHub: "https://github.com/Sunhill666",
      Gmail: "mailto:sunhill666@gmail.com",
      Steam: "https://steamcommunity.com/id/sunhill666/",
      Zhihu: "https://www.zhihu.com/people/you-ri-shan"
    },
  },

  themeColor: {
    blue: "#096dd9",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  displayFooter: true,

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,

      footer: 'El Psy Congroo. | <a href="https://beian.miit.gov.cn/" target="_blank">蒙ICP备2020003520号-1</a>',
      copyright: '<a href="https://github.com/Sunhill666/TechBlog/blob/master/LICENSE">Copyright © 2023 Sunhill666 | MIT License</a>',

      displayFooter: true,

      blog: {
        description: "个人开发者，计算机科学与技术专业准研一，研究方向为人工智能和机器学习",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      }
    },
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "Sunhill666/TechBlog",
      repoId: "R_kgDOI30wXA",
      category: "Announcements",
      categoryId: "DIC_kwDOI30wXM4CT56A",
      mapping: "title"
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: {
        copy: true,
        mhchem: true,
      },
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    autoCatalog: true,

    copyCode: {
      showInMobile: true
    },

    copyright: {
      author: "Sunhill666",
      license: "MIT",
      canonical: "https://blog.moorlands.cn",
      global: true
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
