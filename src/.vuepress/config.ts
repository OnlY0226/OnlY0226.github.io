import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Only",
  description: "Only 的博客演示",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
