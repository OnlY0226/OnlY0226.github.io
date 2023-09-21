import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-dae4c553.js";const r={},d=a(`<h1 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h1><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h3 id="数组变树" tabindex="-1"><a class="header-anchor" href="#数组变树" aria-hidden="true">#</a> 数组变树</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>toTree (data) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤树级数据" tabindex="-1"><a class="header-anchor" href="#过滤树级数据" aria-hidden="true">#</a> 过滤树级数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>filter (data) {
  data.map(item =&gt; item.children &amp;&amp; (item.children = this.filter(item.children)))
  var newData = data.filter(item =&gt; {
    if (!item.reviewProposalCount) item.reviewProposalCount = 0
    if (!item.expertCount) item.expertCount = 0
    return Number(item.reviewProposalCount) &gt; Number(item.expertCount * 25) || (item.children &amp;&amp; item.children.length !== 0)
  })
  return newData
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[d];function s(l,c){return i(),n("div",null,t)}const u=e(r,[["render",s],["__file","js.html.vue"]]);export{u as default};
