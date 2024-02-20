import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-f75c153d.js";const t={},r=a(`<h1 id="type-与-interface的区别" tabindex="-1"><a class="header-anchor" href="#type-与-interface的区别" aria-hidden="true">#</a> type 与 interface的区别</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>不清楚什么时候用interface/type，能用 interface 实现，就用 interface , 如果不能就用 type</p></div><h2 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h2><ul><li>都可以用来定义类型</li><li>都可以用来定义对象</li></ul><h2 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h2><ul><li>type 用来定义类型，interface 用来定义对象</li><li>type 定义的类型是值类型，interface 定义的类型是引用类型</li><li>type 定义的类型是可以被赋值的，interface 定义的类型是不能被赋值的</li></ul><h3 id="type-可以声明基本类型别名-联合类型-元组等类型-而-interface-不行" tabindex="-1"><a class="header-anchor" href="#type-可以声明基本类型别名-联合类型-元组等类型-而-interface-不行" aria-hidden="true">#</a> type 可以声明基本类型别名，联合类型，元组等类型，而 interface 不行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. 基本类型别名 
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface能够声明合并-而-type-不行" tabindex="-1"><a class="header-anchor" href="#interface能够声明合并-而-type-不行" aria-hidden="true">#</a> interface能够声明合并, 而 type 不行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>interface User {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),s=[r];function d(l,c){return i(),n("div",null,s)}const m=e(t,[["render",d],["__file","type-interface.html.vue"]]);export{m as default};
