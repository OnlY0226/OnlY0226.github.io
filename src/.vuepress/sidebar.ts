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
      text: "前端开发实用方法",
      icon: "book",
      prefix: "frontendBlog/",
      children: "structure",
    },
  ],
  '/demo/': "structure",
  '/tool/': "structure"
});
