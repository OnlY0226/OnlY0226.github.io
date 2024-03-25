import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  "/frontend/",
  {
    text: "工具",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      "tool",
      "demo",
      {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
      },
      "menu",
    ],
  },
  
]);
