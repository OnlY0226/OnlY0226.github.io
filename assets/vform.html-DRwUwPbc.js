import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,g as n}from"./app-DKLaxlxX.js";const r={},o=n(`<h1 id="v-form" tabindex="-1"><a class="header-anchor" href="#v-form"><span>v-form</span></a></h1><h2 id="新增组件设置" tabindex="-1"><a class="header-anchor" href="#新增组件设置"><span>新增组件设置</span></a></h2><ol><li>在‘/v_form_designer/src/components/form-designer/setting-panel/property-editor/*’新增‘file-type-editor.vue’ editor组件</li><li>在‘/v_form_designer/src/components/form-designer/setting-panel/propertyRegister.js’注册组件</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>const COMMON_PROPERTIES = {
    ***
    &#39;fileType&#39;         :             &#39;fileType-editor&#39;,
    ***
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在‘/v_form_designer/src/components/form-designer/widget-panel/widgetsConfig.js’中为组件关联组件设置</li></ol><h2 id="自定义组件新增" tabindex="-1"><a class="header-anchor" href="#自定义组件新增"><span>自定义组件新增</span></a></h2><p>以auto-complete-widget为例</p><ol><li>在‘/v_form_designer/src/extension’中 新增组件 auto-complete-widget</li><li>在‘/v_form_designer/src/extension/samples/extension-schema.js’ 中 新增字段组件架构 autoCompleteSchema 参考‘/v_form_designer/src/components/form-designer/widget-panel/widgetsConfig.js’</li><li>在‘/v_form_designer/src/extension/extension-loader.js’ <ul><li>加载字段组件 AutoCompleteWidget</li><li>加载字段组件 架构 autoCompleteSchema</li><li>注册字段组件的代码生成器 autoCompleteTemplateGenerator</li></ul></li><li>其他（extension-schema.js/type） <ol><li>在packages/v_form_designer/src/icons/svg/*配置新增组件图标</li><li>在packages/v_form_designer/src/lang/zh-CN_extension.js、packages/v_form_designer/src/lang/en-US_extension.js 配置新增组件名称</li></ol></li></ol><h2 id="组件新增editor" tabindex="-1"><a class="header-anchor" href="#组件新增editor"><span>组件新增editor</span></a></h2><ol><li><p>新增： onQuerySearchAsync-editor.vue</p></li><li><p>注册： （src/components/form-designer/setting-panel/propertyRegister.j）</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        &#39;onQuerySearchAsync&#39;:            &#39;onQuerySearchAsync-editor&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>解释：（src/components/form-designer/form-widget/field-widget/fieldMixin.js）</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>   querySearchAsync(queryString, cb) {
     if (!!this.field.options.onQuerySearchAsync) {
       let remoteFn = new Function(&#39;queryString&#39;,&#39;cb&#39;, this.field.options.onQuerySearchAsync)
       remoteFn.call(this, queryString, cb)
     }
   },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>绑定：（src/extension/samples/autoComplete/auto-complete-widget.vue）</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>:fetch-suggestions=&quot;querySearchAsync&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>在‘/v_form_designer/src/components/form-designer/widget-panel/widgetsConfig.js’中为组件关联组件设置</li></ol>`,16),s=[o];function l(a,d){return t(),i("div",null,s)}const p=e(r,[["render",l],["__file","vform.html.vue"]]),g=JSON.parse(`{"path":"/vform/vform.html","title":"v-form","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-08-30T00:00:00.000Z","category":["前端开发"],"order":1,"description":"v-form 新增组件设置 在‘/v_form_designer/src/components/form-designer/setting-panel/property-editor/*’新增‘file-type-editor.vue’ editor组件 在‘/v_form_designer/src/components/form-designer/s...","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/vform/vform.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"v-form"}],["meta",{"property":"og:description","content":"v-form 新增组件设置 在‘/v_form_designer/src/components/form-designer/setting-panel/property-editor/*’新增‘file-type-editor.vue’ editor组件 在‘/v_form_designer/src/components/form-designer/s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-23T05:41:12.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:published_time","content":"2023-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-23T05:41:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"v-form\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-23T05:41:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[{"level":2,"title":"新增组件设置","slug":"新增组件设置","link":"#新增组件设置","children":[]},{"level":2,"title":"自定义组件新增","slug":"自定义组件新增","link":"#自定义组件新增","children":[]},{"level":2,"title":"组件新增editor","slug":"组件新增editor","link":"#组件新增editor","children":[]}],"git":{"createdTime":1695111144000,"updatedTime":1716442872000,"contributors":[{"name":"oy","email":"OY.Ou@weltronics.com","commits":3}]},"readingTime":{"minutes":0.79,"words":238},"filePathRelative":"vform/vform.md","localizedDate":"2023年8月30日","excerpt":"\\n<h2>新增组件设置</h2>\\n<ol>\\n<li>在‘/v_form_designer/src/components/form-designer/setting-panel/property-editor/*’新增‘file-type-editor.vue’ editor组件</li>\\n<li>在‘/v_form_designer/src/components/form-designer/setting-panel/propertyRegister.js’注册组件</li>\\n</ol>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>const COMMON_PROPERTIES = {\\n    ***\\n    'fileType'         :             'fileType-editor',\\n    ***\\n}\\n</code></pre></div>","autoDesc":true}`);export{p as comp,g as data};
