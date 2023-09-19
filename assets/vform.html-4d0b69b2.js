import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as l,a as e,d as i,b as t,f as a}from"./app-92e02dff.js";const c={},o=e("h1",{id:"v-form",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v-form","aria-hidden":"true"},"#"),i(" v-form")],-1),v=e("h2",{id:"官方文档地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方文档地址","aria-hidden":"true"},"#"),i(" 官方文档地址")],-1),u={href:"https://www.vform666.com/document3.html",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),g={href:"http://120.92.142.115:81/vform3/",target:"_blank",rel:"noopener noreferrer"},b=a(`<h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2><h3 id="管理端的vformdesigner配置流程" tabindex="-1"><a class="header-anchor" href="#管理端的vformdesigner配置流程" aria-hidden="true">#</a> 管理端的vformDesigner配置流程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
    p(properties)-.fieldList..-&gt;v(vformDesigner)
    v-.format..-&gt;j(json)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>properties： 初始化fieldList约束表单字段选项<br> json： 表单样式</p><h3 id="客户端的vformrender的渲染流程" tabindex="-1"><a class="header-anchor" href="#客户端的vformrender的渲染流程" aria-hidden="true">#</a> 客户端的vformRender的渲染流程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
    j(json)-.format.-&gt;vr(vformRender)
    p(properties)-.data.-&gt;vr(vformRender)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>properties： 初始化表单数据及依据writable约束表单提交字段<br> json： 表单样式</p><h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2><h3 id="vformdesigner功能" tabindex="-1"><a class="header-anchor" href="#vformdesigner功能" aria-hidden="true">#</a> vformDesigner功能</h3><figure><img src="http://m.qpic.cn/psc?/V53O9kJJ0CzzIT40svUv0PwbPm3bge70/ruAMsa53pVQWN7FLK88i5rBxhh2G3CLGEIz1HIZOX0G5PsH7r.pUrBnbtBKyEYX0uglowEaK4WrYtF3Ph3S2hgFUntVhzKetAhX2q8cbQP4!/b&amp;bo=dQfMAwAAAAADJ78!&amp;rf=viewer_4" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><ol><li>组件库</li><li>画布</li><li>组件详细配置模块/表单（全局）配置模块</li><li>功能区<br> 4.1 清空<br> 4.2 预览<br> 4.3 导入json<br> 4.4 导出json<br> 4.5 submit（提交）<br> 4.6 widgetDetail：json及properties对比</li><li>撤销/重做/json结构查看</li></ol><h3 id="拖动配置-获取json提交" tabindex="-1"><a class="header-anchor" href="#拖动配置-获取json提交" aria-hidden="true">#</a> 拖动配置（获取json提交）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
    组件库(组件库-1区)-.拖动组件..-&gt;画布(画布-2区)
    画布-.选中组件..-&gt;组件设置(组件设置-3区)
    画布..-&gt;表单设置(表单设置-3区)
    画布-.json..-&gt;提交[提交json-4区5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入配置-获取json提交" tabindex="-1"><a class="header-anchor" href="#导入配置-获取json提交" aria-hidden="true">#</a> 导入配置（获取json提交）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph LR
    组件库(导入json-4区3)-.符合格式的json..-&gt;画布(画布-2区)
    画布-.选中组件..-&gt;组件设置(组件设置-3区)
    画布..-&gt;表单设置(表单设置-3区)
    画布-.json..-&gt;提交[提交json-4区5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 符合格式的json可从4区4的导出json获取</p><h2 id="字段组件常用api" tabindex="-1"><a class="header-anchor" href="#字段组件常用api" aria-hidden="true">#</a> 字段组件常用API</h2><p><strong>字段组件实例常用方法——widgetRef</strong></p><table><thead><tr><th style="text-align:center;">方法名</th><th style="text-align:left;">说明</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>setValue</strong></td><td style="text-align:left;">设置组件数据值</td><td style="text-align:left;">(newValue)，组件数据值</td></tr><tr><td style="text-align:center;"><strong>getValue</strong></td><td style="text-align:left;">getValue 获取组件数据值</td><td style="text-align:left;"></td></tr><tr><td style="text-align:center;"><strong>setReadonly</strong></td><td style="text-align:left;">setReadonly 设置组件是否只读，<br>仅input、textarea、time、time-range、date、date-range等部分组件支持</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:center;"><strong>setDisabled</strong></td><td style="text-align:left;">设置组件是否禁用</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:center;"><strong>setHidden</strong></td><td style="text-align:left;">设置组件是否隐藏</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:center;"><strong>setRequired</strong></td><td style="text-align:left;">setRequired 设置组件是否必填</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:center;"><strong>loadOptions</strong></td><td style="text-align:left;">loadOptions 加载选择项，<br>仅支持radio/checkbox/select/cascader/autoComplete组件</td><td style="text-align:left;">options，选项数组，<br>格式为：[<br>{label: &#39;选项1&#39;, value: &#39;1&#39;},<br>{label: &#39;选项2&#39;, value: &#39;2&#39;},<br>{label:&#39;选项3&#39;, value: &#39;3&#39;}<br>]</td></tr><tr><td style="text-align:center;"><strong>getWidgetRef</strong></td><td style="text-align:left;">获取设计器组件实例</td><td style="text-align:left;">(widgetName, showError)，<br>widgetName，组件名称，<br>showError=true/false，如组件不存在是否显示错误</td></tr></tbody></table><h2 id="常用示例" tabindex="-1"><a class="header-anchor" href="#常用示例" aria-hidden="true">#</a> 常用示例</h2><h3 id="获取字段组件实例-getwidgetref" tabindex="-1"><a class="header-anchor" href="#获取字段组件实例-getwidgetref" aria-hidden="true">#</a> 获取字段组件实例 （getWidgetRef）</h3><p><strong>例子：user_creator_id</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const creatorIdRef = this.getWidgetRef(&#39;user_creator_id&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="为字段组件实例设置值-setvalue" tabindex="-1"><a class="header-anchor" href="#为字段组件实例设置值-setvalue" aria-hidden="true">#</a> 为字段组件实例设置值 （setValue）</h3><p><strong>例子：user_creator_id设置为当前用户id</strong><br> 在任一组件设置或表单设置中 设置事件属性<mark>onMounted</mark>/<mark>onFormMounted</mark>：</p><ol><li>通过 this.$cookies.get(&#39;docpal-user&#39;) 获取user</li><li>通过VFormDesigner原生API <mark>this.getWidgetRef()</mark> 获取 ‘user_creator_id’ 的组件实例 ‘creatorIdRef’</li><li>通过<mark>countryRef.setValue()</mark> 设置值</li></ol><p>非user_creator_id组件设置代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const user = this.$cookies.get(&#39;docpal-user&#39;)
const creatorIdRef = this.getWidgetRef(&#39;user_creator_id&#39;)
creatorIdRef.setValue(user.id||user.username)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user_creator_id组件设置代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const user = this.$cookies.get(&#39;docpal-user&#39;)
this.setValue(user.id||user.username)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过api设置下拉框选项-loadoptions" tabindex="-1"><a class="header-anchor" href="#通过api设置下拉框选项-loadoptions" aria-hidden="true">#</a> 通过api设置下拉框选项（loadOptions）</h3><p><strong>例子：user_copy_personnel_id设置下拉框选项</strong><br> 在任一组件设置或表单设置中 设置事件属性<mark>onMounted</mark>/<mark>onFormMounted</mark>：</p>`,32),h=e("ol",null,[e("li",null,[i("通过VFormDesigner原生API "),e("mark",null,"this.getWidgetRef()"),i(" 获取 ‘user_copy_personnel_id’ 的组件实例 ‘copyPersonnelRef’")]),e("li",{"value:":"",",":"","label:":""},[i("通过"),e("mark",null,"copyPersonnelRef.loadOptions()"),i(" 设置选项"),e("br"),i(" 注意：选项格式必须为")])],-1),p=a(`<p>非user_copy_personnel_id组件设置代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const copyPersonnelRef = this.getWidgetRef(&#39;user_copy_personnel_id&#39;)
this.$axios.post(&#39;/nuxeo/identity/users&#39;, {}).then(res =&gt; {
   res = res.data
  const reponse = res.map(item =&gt; ({
    value: item.username,
    label: \`\${item.username}&lt;\${item.email}&gt;\`
  }))
  copyPersonnelRef.loadOptions(reponse)
}).catch(err =&gt; {
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user_copy_personnel_id组件设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$axios.post(&#39;/nuxeo/identity/users&#39;, {}).then(res =&gt; {
   res = res.data
  const reponse = res.map(item =&gt; ({
    value: item.username,
    label: \`\${item.username}&lt;\${item.email}&gt;\`
  }))
  this.loadOptions(reponse)
}).catch(err =&gt; {
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联动方法" tabindex="-1"><a class="header-anchor" href="#联动方法" aria-hidden="true">#</a> 联动方法</h3><h4 id="数据回显不触发联动" tabindex="-1"><a class="header-anchor" href="#数据回显不触发联动" aria-hidden="true">#</a> 数据回显不触发联动</h4><p>// 已在vform插件的setFormData设置setFormDataFlag=true<br> 可根据setFormDataFlag判断是否为回显数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 数据回显不触发联动
if (window.setFormDataFlag) {
  setTimeout(() =&gt; { window.setFormDataFlag = false });
  return false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子1-动态获取数据" tabindex="-1"><a class="header-anchor" href="#例子1-动态获取数据" aria-hidden="true">#</a> 例子1：动态获取数据</h4><p>例子：caseId修改后，接口获取‘country’ 跟 ‘prospectName’（Contract Approval/Start）<br> 在caseId的组件设置中设置事件属性<mark>onChange</mark>：</p><ol><li>通过VFormDesigner原生API <mark>this.getWidgetRef()</mark> 获取 ‘country’ 跟 ‘prospectName’ 的组件实例 ‘countryRef’ 跟 ‘prospectNameRef’</li><li>通过<mark>countryRef.setValue()</mark> 跟 <mark>prospectNameRef.setValue()</mark> 设置值</li></ol><p>代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// onChange方法参数：value, oldValue, subFormData, rowId

// 数据回显不触发联动
if (window.setFormDataFlag) {
  setTimeout(() =&gt; { window.setFormDataFlag = false });
  return false
}    
const _this = this
if(!value) return
value  = value.value ? value.value : value
const countryRef = this.getWidgetRef(&#39;country&#39;)
const countryParams = {
  docType: &#39;Case&#39;,
  filterKey: &#39;case:caseId&#39;,
  key: &#39;car:country&#39;,
  filterValue: value
}

const prospectNameRef = this.getWidgetRef(&#39;prospectName&#39;)
const prospectNameParams = {
  docType: &#39;Case&#39;,
  filterKey: &#39;case:caseId&#39;,
  key: &#39;prospect:prospectName&#39;,
  filterValue: value
}

const prospectIdRef = this.getWidgetRef(&#39;prospectId&#39;)
const prospectIdParams = {
  docType: &#39;Case&#39;,
  filterKey: &#39;case:caseId&#39;,
  key: &#39;prospect:prospectID&#39;,
  filterValue: value
}


getMetaList(countryParams, countryRef)
getMetaList(prospectNameParams, prospectNameRef)
getMetaList(prospectIdParams, prospectIdRef)

function getMetaList (params, widgetRef) {
  _this.$axios.get(&#39;/nuxeo/form/metadata/list&#39;, { params }).then(res =&gt; {
    res = res.data
    const reponse = res.map(item =&gt; ({
      value: item,
      label:item
    }))
    if (!widgetRef) return
    widgetRef.loadOptions(reponse)
    widgetRef.setValue(&#39;&#39;)
    if(reponse.length === 1) {
      widgetRef.setValue(reponse[0].value)
      widgetRef.setDisabled(true)
      widgetRef.setReadonly(true)
    }
  }).catch(err =&gt; {
    _this.$message({
      message: &#39;Server exception, please try again later&#39;,
      duration: 3000,
      type: &#39;error&#39;
    })
  })
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子2-动态切换组件显示" tabindex="-1"><a class="header-anchor" href="#例子2-动态切换组件显示" aria-hidden="true">#</a> 例子2： 动态切换组件显示</h4><p>contractNature改变后， 重新设置组件显隐（Contract Approval/Start）<br> 在contractNature的组件设置中设置事件属性<mark>onChange</mark>：</p><ol><li>通过VFormDesigner原生API <mark>this.getWidgetRef()</mark> 获取 需要改变的组件实例</li><li>根据需求，用setHidden/setRequired 遍历设置需要改变的组件实例 setHidden/setRequired</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// onChange方法参数：value, oldValue, subFormData, rowId 
var otherList = []
var caseList = []
var crList = []
caseList.push({ widget: this.getWidgetRef(&#39;caseId&#39;), require: true })
caseList.push({ widget: this.getWidgetRef(&#39;prospectName&#39;), require: true })
caseList.push({ widget: this.getWidgetRef(&#39;prospectId&#39;), require: true, hidden: true })

crList.push({ widget: this.getWidgetRef(&#39;customerName&#39;), require: true })
crList.push({ widget: this.getWidgetRef(&#39;customerCode&#39;), require: true, hidden: true })
crList.push({ widget: this.getWidgetRef(&#39;crNumber&#39;), require: true })

otherList.push({ widget: this.getWidgetRef(&#39;contractId&#39;), require: true })
switch (value) {
  case &#39;new_case&#39;:
    lootWidgetItem([...otherList, ...crList], true)
    lootWidgetItem([...caseList], false)
    break;
  case &#39;change_request&#39;:
    lootWidgetItem([...caseList], true)
    lootWidgetItem([...crList, ...otherList], false)
    break;
  default:
    lootWidgetItem([...caseList, ...crList], true)
    lootWidgetItem([...otherList], false)
}
function lootWidgetItem(widgetList, isHidden) {
  widgetList.forEach(widgetItem =&gt; {
    if(!widgetItem) return
    if(!widgetItem.hidden) widgetItem.widget.setHidden(isHidden)
    if(widgetItem.require) widgetItem.widget.setRequired(!isHidden)
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="例子3-远程搜索" tabindex="-1"><a class="header-anchor" href="#例子3-远程搜索" aria-hidden="true">#</a> 例子3： 远程搜索</h4><h5 id="_1-提供下拉框" tabindex="-1"><a class="header-anchor" href="#_1-提供下拉框" aria-hidden="true">#</a> 1.提供下拉框</h5><p>需要同时设置Event Setting的: onMouted,onRemoteQuery<br> 同时打开Common Setting的:Filterable ,Remote Query</p><h5 id="_2-使用自定义组件-auto-complete" tabindex="-1"><a class="header-anchor" href="#_2-使用自定义组件-auto-complete" aria-hidden="true">#</a> 2. 使用自定义组件 auto-complete</h5><p>需要同时设置Event Setting的: onQuerySearchAsync,同时 callback一个数组,数组结构如下optionType[]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type optionType = { 
    label: string,
    value: string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字段组件介绍" tabindex="-1"><a class="header-anchor" href="#字段组件介绍" aria-hidden="true">#</a> 字段组件介绍</h2><h3 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h3><p>注意：文件类型为空则默认不校验文件类型</p><h3 id="单选项-多选项-下拉选项" tabindex="-1"><a class="header-anchor" href="#单选项-多选项-下拉选项" aria-hidden="true">#</a> 单选项/多选项/下拉选项</h3><p><img src="http://m.qpic.cn/psc?/V53O9kJJ0CzzIT40svUv0PwbPm3bge70/ruAMsa53pVQWN7FLK88i5ibjhuXEjXLKVZxSfoHlaVpBdngbbeiyPPiPlWfu1MvBKbQBp9c.7YakNwSFwBLivQr*w9D.vPkMU41klcODPPs!/b&amp;bo=0Qa1AwAAAAADJ2M!&amp;rf=viewer_4" alt="image" loading="lazy"><br> 组件库的单选项/多选项/下拉选项可以设置默认选项</p><p>设置默认项：点击选中组件，在组件设置中的选项设置勾选选项<br> 取消默认项：点击选中组件，在组件设置中的选项设置中点击重置选中项</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="preview操作会改变字段组件状态" tabindex="-1"><a class="header-anchor" href="#preview操作会改变字段组件状态" aria-hidden="true">#</a> preview操作会改变字段组件状态</h3><p>一些带控制显隐状态的组件操作会导致json的某些组件显隐状态改变。<br> 建议：在提交前查看Widgets Detail。一一比对readable状态。</p><h3 id="可通过widgetdetail对比-查看数据配置详情" tabindex="-1"><a class="header-anchor" href="#可通过widgetdetail对比-查看数据配置详情" aria-hidden="true">#</a> 可通过widgetDetail对比，查看数据配置详情</h3>`,33);function f(x,y){const n=r("ExternalLinkIcon");return d(),l("div",null,[o,v,e("p",null,[e("a",u,[i("VForm3官方文档"),t(n)]),m,e("a",g,[i("VForm3官方表单设计器Ver 3.0.7"),t(n)])]),b,h,p])}const R=s(c,[["render",f],["__file","vform.html.vue"]]);export{R as default};
