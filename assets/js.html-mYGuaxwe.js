import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,f as i}from"./app-DmzVl3R-.js";const a={},r=i(`<h1 id="js" tabindex="-1"><a class="header-anchor" href="#js"><span>js</span></a></h1><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2><h3 id="数组变树" tabindex="-1"><a class="header-anchor" href="#数组变树"><span>数组变树</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>toTree (data) {
  // 空数组
  const result = []
  if (!Array.isArray(data)) return result // 判断不是数组  直接返回
  data.forEach(item =&gt; {
    delete item.children
  }) // 清空children
  const map = {}
  data.forEach(item =&gt; { map[item.id] = JSON.parse(JSON.stringify(item)) })
  data.forEach(item =&gt; {
    const parent = map[item.parentId]
    if (parent) {
      if (!parent.children) parent.children = []
      parent.children.push(item)
    } else {
      result.push(item)
    }
  })
  return result
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤树级数据" tabindex="-1"><a class="header-anchor" href="#过滤树级数据"><span>过滤树级数据</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>filter (data) {
  data.map(item =&gt; item.children &amp;&amp; (item.children = this.filter(item.children)))
  var newData = data.filter(item =&gt; {
    if (!item.reviewProposalCount) item.reviewProposalCount = 0
    if (!item.expertCount) item.expertCount = 0
    return Number(item.reviewProposalCount) &gt; Number(item.expertCount * 25) || (item.children &amp;&amp; item.children.length !== 0)
  })
  return newData
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器对象" tabindex="-1"><a class="header-anchor" href="#浏览器对象"><span>浏览器对象</span></a></h2><h3 id="blob" tabindex="-1"><a class="header-anchor" href="#blob"><span>blob</span></a></h3><h3 id="上传空文件" tabindex="-1"><a class="header-anchor" href="#上传空文件"><span>上传空文件</span></a></h3>`,9),l=[r];function s(d,c){return t(),n("div",null,l)}const p=e(a,[["render",s],["__file","js.html.vue"]]),h=JSON.parse('{"path":"/frontend/js.html","title":"js","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-08-30T00:00:00.000Z","category":["前端开发"],"order":1,"description":"js 数组 数组变树 过滤树级数据 浏览器对象 blob 上传空文件","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontend/js.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"js"}],["meta",{"property":"og:description","content":"js 数组 数组变树 过滤树级数据 浏览器对象 blob 上传空文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-23T05:41:12.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:published_time","content":"2023-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-23T05:41:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"js\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-23T05:41:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[{"level":3,"title":"数组变树","slug":"数组变树","link":"#数组变树","children":[]},{"level":3,"title":"过滤树级数据","slug":"过滤树级数据","link":"#过滤树级数据","children":[]}]},{"level":2,"title":"浏览器对象","slug":"浏览器对象","link":"#浏览器对象","children":[{"level":3,"title":"blob","slug":"blob","link":"#blob","children":[]},{"level":3,"title":"上传空文件","slug":"上传空文件","link":"#上传空文件","children":[]}]}],"git":{"createdTime":1695106861000,"updatedTime":1716442872000,"contributors":[{"name":"Oy","email":"OY.Ou@weltronics.com","commits":4},{"name":"oy","email":"OY.Ou@weltronics.com","commits":1}]},"readingTime":{"minutes":0.43,"words":129},"filePathRelative":"frontend/js.md","localizedDate":"2023年8月30日","excerpt":"\\n<h2>数组</h2>\\n<h3>数组变树</h3>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>toTree (data) {\\n  // 空数组\\n  const result = []\\n  if (!Array.isArray(data)) return result // 判断不是数组  直接返回\\n  data.forEach(item =&gt; {\\n    delete item.children\\n  }) // 清空children\\n  const map = {}\\n  data.forEach(item =&gt; { map[item.id] = JSON.parse(JSON.stringify(item)) })\\n  data.forEach(item =&gt; {\\n    const parent = map[item.parentId]\\n    if (parent) {\\n      if (!parent.children) parent.children = []\\n      parent.children.push(item)\\n    } else {\\n      result.push(item)\\n    }\\n  })\\n  return result\\n}\\n</code></pre></div>","autoDesc":true}');export{p as comp,h as data};
