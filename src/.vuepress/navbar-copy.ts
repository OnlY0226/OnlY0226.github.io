import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/frontend/",
    children: [
      {
        text: "gitOrder",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
        ],
      },

    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
