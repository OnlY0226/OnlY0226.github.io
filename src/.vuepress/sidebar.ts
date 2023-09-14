import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    // "",
    {
      text: "前端开发",
      icon: "book",
      prefix: "frontend/",
      children: "structure",
    },
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    
    "intro",
    "slides",
  ],
  '/tool/': [
    {
      text: "工具",
      icon: "laptop-code",
      prefix: "tool/",
      link: "/tool/",
      children: "structure",
    }
  ]
});
