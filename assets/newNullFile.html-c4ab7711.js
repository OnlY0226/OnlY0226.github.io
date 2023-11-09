import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as l}from"./app-fdc341bb.js";const t={},a=l(`<h1 id="空文件创建" tabindex="-1"><a class="header-anchor" href="#空文件创建" aria-hidden="true">#</a> 空文件创建</h1><ol><li>在public新建文件<br> /public/docTemplate/template.xlsx<br> /public/docTemplate/template.docx<br> /public/docTemplate/template.pptx<br> /public/docTemplate/template.pdf</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const ExtensionMimeTypeMap = {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[a];function s(d,r){return i(),n("div",null,c)}const m=e(t,[["render",s],["__file","newNullFile.html.vue"]]);export{m as default};
