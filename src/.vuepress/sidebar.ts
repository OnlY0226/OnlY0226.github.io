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
  ],
  '/demo/': "structure",
  '/tool/': "structure"
});
