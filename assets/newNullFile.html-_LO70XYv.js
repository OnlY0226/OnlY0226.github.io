import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,g as l}from"./app-DKLaxlxX.js";const a={},i=l(`<h1 id="空文件创建" tabindex="-1"><a class="header-anchor" href="#空文件创建"><span>空文件创建</span></a></h1><ol><li>在public新建文件 /public/docTemplate/template.xlsx /public/docTemplate/template.docx /public/docTemplate/template.pptx /public/docTemplate/template.pdf</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const ExtensionMimeTypeMap = {
    &#39;pptx&#39;: &#39;application/vnd.openxmlformats-officedocument.presentationml.presentation&#39;,
    &#39;docx&#39;: &#39;application/vnd.openxmlformats-officedocument.wordprocessingml.document&#39;,
    &#39;xlsx&#39;: &#39;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&#39;,
    &#39;pdf&#39;: &#39;application/pdf&#39;
}
async function createFile(fileType: &#39;docx&#39; | &#39;xlsx&#39; | &#39;pptx&#39; | &#39;pdf&#39;, name: string) {
    const path = \`/docTemplate/template.\${fileType}}\`
    const file = await fetch(path)
    const fileArrayBuffer = await file.arrayBuffer()
    return new File([fileArrayBuffer], \`\${name}.\${fileType}\`,{type: ExtensionMimeTypeMap[fileType]})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[i];function o(c,d){return t(),n("div",null,p)}const s=e(a,[["render",o],["__file","newNullFile.html.vue"]]),u=JSON.parse(`{"path":"/frontendBlog/newNullFile.html","title":"空文件创建","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-10-11T00:00:00.000Z","category":["前端开发实用方法","前端开发"],"order":1,"description":"空文件创建 在public新建文件 /public/docTemplate/template.xlsx /public/docTemplate/template.docx /public/docTemplate/template.pptx /public/docTemplate/template.pdf","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontendBlog/newNullFile.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"空文件创建"}],["meta",{"property":"og:description","content":"空文件创建 在public新建文件 /public/docTemplate/template.xlsx /public/docTemplate/template.docx /public/docTemplate/template.pptx /public/docTemplate/template.pdf"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-23T05:41:12.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:published_time","content":"2023-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-23T05:41:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"空文件创建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-23T05:41:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[],"git":{"createdTime":1696995679000,"updatedTime":1716442872000,"contributors":[{"name":"Oy","email":"OY.Ou@weltronics.com","commits":1},{"name":"oy","email":"OY.Ou@weltronics.com","commits":1}]},"readingTime":{"minutes":0.28,"words":85},"filePathRelative":"frontendBlog/newNullFile.md","localizedDate":"2023年10月11日","excerpt":"\\n<ol>\\n<li>在public新建文件\\n/public/docTemplate/template.xlsx\\n/public/docTemplate/template.docx\\n/public/docTemplate/template.pptx\\n/public/docTemplate/template.pdf</li>\\n</ol>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>const ExtensionMimeTypeMap = {\\n    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',\\n    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',\\n    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',\\n    'pdf': 'application/pdf'\\n}\\nasync function createFile(fileType: 'docx' | 'xlsx' | 'pptx' | 'pdf', name: string) {\\n    const path = \`/docTemplate/template.\${fileType}}\`\\n    const file = await fetch(path)\\n    const fileArrayBuffer = await file.arrayBuffer()\\n    return new File([fileArrayBuffer], \`\${name}.\${fileType}\`,{type: ExtensionMimeTypeMap[fileType]})\\n}\\n</code></pre></div>","autoDesc":true}`);export{s as comp,u as data};
