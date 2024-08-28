import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,g as i}from"./app-BYfPR9Aw.js";const a={},r=i(`<h1 id="type-与-interface的区别" tabindex="-1"><a class="header-anchor" href="#type-与-interface的区别"><span>type 与 interface的区别</span></a></h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type</p></div><h2 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点"><span>相同点</span></a></h2><ul><li>都可以用来定义类型</li><li>都可以用来定义对象</li></ul><h2 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点"><span>不同点</span></a></h2><ul><li>type 用来定义类型，interface 用来定义对象</li><li>type 定义的类型是值类型，interface 定义的类型是引用类型</li><li>type 定义的类型是可以被赋值的，interface 定义的类型是不能被赋值的</li></ul><h3 id="type-可以声明基本类型别名-联合类型-元组等类型-而-interface-不行" tabindex="-1"><a class="header-anchor" href="#type-可以声明基本类型别名-联合类型-元组等类型-而-interface-不行"><span>type 可以声明基本类型别名，联合类型，元组等类型，而 interface 不行</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. 基本类型别名 
 type Name = string
2. 联合类型
 interface Dog { wong(); }
 interface Cat { miao(); }
 type Pet = Dog | Cat
3.具体定义数组每个位置的类型
 type PetList = [Dog, Pet]
4. 其他
 type StringOrNumber = string | number;  
 type Text = string | { text: string };  
 type NameLookup = Dictionary&lt;string, Person&gt;;  
 type Callback&lt;T&gt; = (data: T) =&gt; void;  
 type Pair&lt;T&gt; = [T, T];  
 type Coordinates = Pair&lt;number&gt;;  
 type Tree&lt;T&gt; = T | { left: Tree&lt;T&gt;, right: Tree&lt;T&gt; };

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface能够声明合并-而-type-不行" tabindex="-1"><a class="header-anchor" href="#interface能够声明合并-而-type-不行"><span>interface能够声明合并, 而 type 不行</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[r];function c(s,d){return t(),n("div",null,l)}const m=e(a,[["render",c],["__file","type-interface.html.vue"]]),v=JSON.parse('{"path":"/frontend/type-interface.html","title":"type 与 interface的区别","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-08-30T00:00:00.000Z","category":["前端开发"],"order":1,"description":"type 与 interface的区别 提示 不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 相同点 都可以用来定义类型 都可以用来定义对象 不同点 type 用来定义类型，interface 用来定义对象 type 定义的类型是值类型，interface 定义的类型是...","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontend/type-interface.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"type 与 interface的区别"}],["meta",{"property":"og:description","content":"type 与 interface的区别 提示 不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type 相同点 都可以用来定义类型 都可以用来定义对象 不同点 type 用来定义类型，interface 用来定义对象 type 定义的类型是值类型，interface 定义的类型是..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-23T05:41:12.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:published_time","content":"2023-08-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-23T05:41:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"type 与 interface的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-08-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-23T05:41:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[{"level":2,"title":"相同点","slug":"相同点","link":"#相同点","children":[]},{"level":2,"title":"不同点","slug":"不同点","link":"#不同点","children":[{"level":3,"title":"type 可以声明基本类型别名，联合类型，元组等类型，而 interface 不行","slug":"type-可以声明基本类型别名-联合类型-元组等类型-而-interface-不行","link":"#type-可以声明基本类型别名-联合类型-元组等类型-而-interface-不行","children":[]},{"level":3,"title":"interface能够声明合并, 而 type 不行","slug":"interface能够声明合并-而-type-不行","link":"#interface能够声明合并-而-type-不行","children":[]}]}],"git":{"createdTime":1704159077000,"updatedTime":1716442872000,"contributors":[{"name":"oy","email":"OY.Ou@weltronics.com","commits":2}]},"readingTime":{"minutes":0.91,"words":273},"filePathRelative":"frontend/type-interface.md","localizedDate":"2023年8月30日","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type</p>\\n</div>\\n<h2>相同点</h2>\\n<ul>\\n<li>都可以用来定义类型</li>\\n<li>都可以用来定义对象</li>\\n</ul>\\n<h2>不同点</h2>\\n<ul>\\n<li>type 用来定义类型，interface 用来定义对象</li>\\n<li>type 定义的类型是值类型，interface 定义的类型是引用类型</li>\\n<li>type 定义的类型是可以被赋值的，interface 定义的类型是不能被赋值的</li>\\n</ul>","autoDesc":true}');export{m as comp,v as data};
