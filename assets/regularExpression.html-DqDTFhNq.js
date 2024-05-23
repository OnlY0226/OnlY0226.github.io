import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,g as i}from"./app-DKLaxlxX.js";const n={},o=i('<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h1><h2 id="正则表达式常用模式如下" tabindex="-1"><a class="header-anchor" href="#正则表达式常用模式如下"><span>正则表达式常用模式如下：</span></a></h2><ol><li>&#39;[pjc]ython&#39;可以匹配&#39;python&#39;、&#39;jython&#39;、&#39;cython&#39;</li><li>&#39;[a-zA-Z0-9]&#39;可以匹配一个任意大小写字母或数字</li><li>&#39;[^abc]&#39;可以一个匹配任意除&#39;a&#39;、&#39;b&#39;、&#39;c&#39;之外的字符</li><li>&#39;python|perl&#39;或&#39;p(ython|erl)&#39;都可以匹配&#39;python&#39;或&#39;perl&#39;</li><li>子模式后面加上问号表示可选。r&#39;(http://)?(www.)?python.org&#39;只能配&#39;http://www.python.org&#39;、&#39;http://python.org&#39;、&#39;www.python.org&#39;和&#39;python.org&#39;</li><li>&#39;^http&#39;只能匹配所有以&#39;http&#39;开头的字符串</li><li>(pattern)*：允许模式重复0次或多次</li><li>(pattern)+：允许模式重复1次或多次</li><li>(pattern){m,n}：允许模式重复m~n次</li><li>&#39;(a|b)*c&#39;：匹配多个（包含0个）a或b，后面紧跟一个字母c。</li><li>&#39;ab{1,}&#39;：等价于&#39;ab+&#39;，匹配以字母a开头后面带1个至多个字母b的字符串。</li><li>&#39;^[a-zA-Z]{1}([a-zA-Z0-9.<em>]){4,19}$&#39;：匹配长度为5-20的字符串，必须以字母开头、可带数字、“</em>”、“.”的字串。</li><li>&#39;^(\\w){6,20}$&#39;：匹配长度为6-20的字符串，可以包含字母、数字、下划线。</li><li>&#39;^\\d{1,3}.\\d{1,3}.\\d{1,3}.\\d{1,3}$&#39;：检查给定字符串是否为合法IP地址。</li><li>&#39;^(13[4-9]\\d{8})|(15[01289]\\d{8})$&#39;：检查给定字符串是否为移动手机号码。</li><li>&#39;^[a-zA-Z]+$&#39; ：检查给定字符串是否只包含英文字母大小写。</li><li>&#39;^\\w+@(\\w+.)+\\w+$&#39; ：检查给定字符串是否为合法电子邮件地址1。</li><li>^([a-zA-Z.0-9]+)@[a-zA-Z0-9]+.[a-zA-Z]{3}$ ：检查给定字符串是否为合法电子邮件地址2。</li><li>\\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}.[a-zA-Z]{1,4}\\b ：检查给定字符串是否为合法电子邮件地址3。</li><li>&#39;^(-)?\\d+(.\\d{1,2})?$&#39;：检查给定字符串是否为最多有2位小数的正数或负数。</li><li>&#39;[\\u4e00-\\u9fa5]&#39;：匹配给定字符串中所有汉字。</li><li>&#39;^\\d{18}|\\d{15}$&#39;：检查给定字符串是否为合法身份证格式。</li><li>&#39;\\d{4}-\\d{1,2}-\\d{1,2}&#39;：匹配指定格式的日期，例如2016-1-31。</li><li>&#39;^(?=.<em>[a-z])(?=.</em>[A-Z])(?=.<em>\\d)(?=.</em>[,._]).{8,}$&#39;：检查给定字符串是否为强密码，必须同时包含英语字母大写字母、英文小写字母、数字或特殊符号（如英文逗号、英文句号、下划线），并且长度必须至少8位。 &quot;(?!.*[&#39;&quot;/;=%?]).+&quot;：如果给定字符串中包含’、”、/、;、=、%、?则匹配失败。</li><li>‘(.)\\1+’：匹配任意字符的一次或多次重复出现。注：\\1中第一个\\为转义，\\1表示匹配第1个分组的内容</li></ol>',3),a=[o];function r(p,h){return e(),l("div",null,a)}const m=t(n,[["render",r],["__file","regularExpression.html.vue"]]),y=JSON.parse(`{"path":"/frontendBlog/regularExpression.html","title":"正则表达式","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-10-11T00:00:00.000Z","category":["前端开发实用方法","前端开发"],"order":1,"description":"正则表达式 正则表达式常用模式如下： '[pjc]ython'可以匹配'python'、'jython'、'cython' '[a-zA-Z0-9]'可以匹配一个任意大小写字母或数字 '[^abc]'可以一个匹配任意除'a'、'b'、'c'之外的字符 'python|perl'或'p(ython|erl)'都可以匹配'python'或'perl' 子模...","head":[["meta",{"property":"og:url","content":"https://github.com/OnlY0226/OnlY0226.github.io/frontendBlog/regularExpression.html"}],["meta",{"property":"og:site_name","content":"Only"}],["meta",{"property":"og:title","content":"正则表达式"}],["meta",{"property":"og:description","content":"正则表达式 正则表达式常用模式如下： '[pjc]ython'可以匹配'python'、'jython'、'cython' '[a-zA-Z0-9]'可以匹配一个任意大小写字母或数字 '[^abc]'可以一个匹配任意除'a'、'b'、'c'之外的字符 'python|perl'或'p(ython|erl)'都可以匹配'python'或'perl' 子模..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-23T05:41:12.000Z"}],["meta",{"property":"article:author","content":"OnlY"}],["meta",{"property":"article:published_time","content":"2023-10-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-23T05:41:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正则表达式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-23T05:41:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OnlY\\"}]}"]]},"headers":[{"level":2,"title":"正则表达式常用模式如下：","slug":"正则表达式常用模式如下","link":"#正则表达式常用模式如下","children":[]}],"git":{"createdTime":1708909493000,"updatedTime":1716442872000,"contributors":[{"name":"oy","email":"OY.Ou@weltronics.com","commits":2}]},"readingTime":{"minutes":2.38,"words":715},"filePathRelative":"frontendBlog/regularExpression.md","localizedDate":"2023年10月11日","excerpt":"\\n<h2>正则表达式常用模式如下：</h2>\\n<ol>\\n<li>'[pjc]ython'可以匹配'python'、'jython'、'cython'</li>\\n<li>'[a-zA-Z0-9]'可以匹配一个任意大小写字母或数字</li>\\n<li>'[^abc]'可以一个匹配任意除'a'、'b'、'c'之外的字符</li>\\n<li>'python|perl'或'p(ython|erl)'都可以匹配'python'或'perl'</li>\\n<li>子模式后面加上问号表示可选。r'(http://)?(www.)?python.org'只能配'http://www.python.org'、'http://python.org'、'www.python.org'和'python.org'</li>\\n<li>'^http'只能匹配所有以'http'开头的字符串</li>\\n<li>(pattern)*：允许模式重复0次或多次</li>\\n<li>(pattern)+：允许模式重复1次或多次</li>\\n<li>(pattern){m,n}：允许模式重复m~n次</li>\\n<li>'(a|b)*c'：匹配多个（包含0个）a或b，后面紧跟一个字母c。</li>\\n<li>'ab{1,}'：等价于'ab+'，匹配以字母a开头后面带1个至多个字母b的字符串。</li>\\n<li>'^[a-zA-Z]{1}([a-zA-Z0-9.<em>]){4,19}$'：匹配长度为5-20的字符串，必须以字母开头、可带数字、“</em>”、“.”的字串。</li>\\n<li>'^(\\\\w){6,20}$'：匹配长度为6-20的字符串，可以包含字母、数字、下划线。</li>\\n<li>'^\\\\d{1,3}.\\\\d{1,3}.\\\\d{1,3}.\\\\d{1,3}$'：检查给定字符串是否为合法IP地址。</li>\\n<li>'^(13[4-9]\\\\d{8})|(15[01289]\\\\d{8})$'：检查给定字符串是否为移动手机号码。</li>\\n<li>'^[a-zA-Z]+$' ：检查给定字符串是否只包含英文字母大小写。</li>\\n<li>'^\\\\w+@(\\\\w+.)+\\\\w+$' ：检查给定字符串是否为合法电子邮件地址1。</li>\\n<li>^([a-zA-Z.0-9]+)@[a-zA-Z0-9]+.[a-zA-Z]{3}$ ：检查给定字符串是否为合法电子邮件地址2。</li>\\n<li>\\\\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}.[a-zA-Z]{1,4}\\\\b ：检查给定字符串是否为合法电子邮件地址3。</li>\\n<li>'^(-)?\\\\d+(.\\\\d{1,2})?$'：检查给定字符串是否为最多有2位小数的正数或负数。</li>\\n<li>'[\\\\u4e00-\\\\u9fa5]'：匹配给定字符串中所有汉字。</li>\\n<li>'^\\\\d{18}|\\\\d{15}$'：检查给定字符串是否为合法身份证格式。</li>\\n<li>'\\\\d{4}-\\\\d{1,2}-\\\\d{1,2}'：匹配指定格式的日期，例如2016-1-31。</li>\\n<li>'^(?=.<em>[a-z])(?=.</em>[A-Z])(?=.<em>\\\\d)(?=.</em>[,._]).{8,}$'：检查给定字符串是否为强密码，必须同时包含英语字母大写字母、英文小写字母、数字或特殊符号（如英文逗号、英文句号、下划线），并且长度必须至少8位。 \\"(?!.*['\\"/;=%?]).+\\"：如果给定字符串中包含’、”、/、;、=、%、?则匹配失败。</li>\\n<li>‘(.)\\\\1+’：匹配任意字符的一次或多次重复出现。注：\\\\1中第一个\\\\为转义，\\\\1表示匹配第1个分组的内容</li>\\n</ol>","autoDesc":true}`);export{m as comp,y as data};
