import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,f as a}from"./app-4bab2cd9.js";const d={},t=a(`<h1 id="git-order" tabindex="-1"><a class="header-anchor" href="#git-order" aria-hidden="true">#</a> Git Order</h1><h2 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h2><h3 id="拉取远程代码" tabindex="-1"><a class="header-anchor" href="#拉取远程代码" aria-hidden="true">#</a> 拉取远程代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置配置
1.git init 初始化（创建）本地仓库，可以看到项目文件夹下生成的.git隐藏文件夹。这个文件夹会记录以后每次的更改和提交。

2.git config --global user.name &#39;Kael&#39;git初次使用配置个人用户名，如果以前已经配置，通过git config user.name查看。

3.git config --global user.email &#39;pankai486@qq.com&#39;git初次使用时要先配置个人邮箱，如果以前已经配置，通过git config user.email查看。

4.ssh-keygen -t rsa -C &quot;pankai486@qq.com&quot;生成SSH公钥（基于个人邮箱），如果以前已经生成，也可以跳过这步。

5.cat ~/.ssh/id_rsa.pub获取生成的SSH公钥，如果报错，则使用上一步的命令重新生成公钥，复制公钥到阿里云，要从ssh-rsa开头开始复制起。

第一步：拉取远程代码
git clone https://github.com/…/PrettyGirls.git
第2步: 配置远程仓库地址
　　添加远程仓库地址：git remote add origin &quot;git@github.com:Only-APTX-4869/demo.git&quot;
　　查看远程仓库地址：git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><p>git branch -vv 查看本地分支及其关联远程分支</p><p>git branch 查看本地分支</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch pdfPages 创建本地分支

git checkout pdfPages 切换分支

git push origin pdfPages 创建远程分支

git push --set-upstream origin pdfPages 本地分支关联到远程某分支

git checkout -b virtual-folder  origin/virtual-folder 创建本地分支关联远程分支并切换分支

在删除分支前确保代码已经合到主分支上了
git push origin --delete {branchName}  删除远程分支：
git branch -d {branchName}  删除本地分支：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重命名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -m 原始名称 新名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并代码" tabindex="-1"><a class="header-anchor" href="#合并代码" aria-hidden="true">#</a> 合并代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull origin main 当前分支合并远程分支代码
git cherry-pick 671efa02b718913a2d1f5222ea5dd48c23228499 当前分支合并某个提交的代码
 git cherry-pick --abort 终止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销commit" tabindex="-1"><a class="header-anchor" href="#撤销commit" aria-hidden="true">#</a> 撤销commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --soft HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
git commit -m &#39;【pdf预览组件】放大缩小&#39;
git push origin pdfPages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="暂存的内容" tabindex="-1"><a class="header-anchor" href="#暂存的内容" aria-hidden="true">#</a> 暂存的内容</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git stash  暂存修改
git stash list 可以看到保存的信息,其中stash@{0}就是刚才保存的标记
git stash pop stash@{0} 还原暂存的内容
git stash drop stash@{0} 删除指定栈
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><p>您尚未结束您的合并（存在 MERGE_HEAD）。 请在合并前先提交您的修改。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge --abort
git reset --merge
git merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本之间的穿梭回退" tabindex="-1"><a class="header-anchor" href="#版本之间的穿梭回退" aria-hidden="true">#</a> 版本之间的穿梭回退</h3><p>命令方式：</p><ol><li>输入git log 查看所有提交的版本<br> 注意：黄色字体中 commit后面的一串码就是每一个版本号对应的码</li><li>回退到指定版本<br> == 注意：--hard 删除工作空间改动代码，撤销commit，撤销git add . ==</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard [提交号]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>reset是指将HEAD指针指到指定提交，历史记录中不会出现放弃的提交记录。</p><p>3.推送代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin [分支名] -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并特定commit" tabindex="-1"><a class="header-anchor" href="#合并特定commit" aria-hidden="true">#</a> 合并特定commit</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log 
git checkout B
git cherry-pick 29d9493d
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并commits" tabindex="-1"><a class="header-anchor" href="#合并commits" aria-hidden="true">#</a> 合并commits</h3><ol><li>git rebase -i HEAD~3 // 3 代表想要合并最近3个commit<br> 命令输入后，会出现</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pick 5ff9f11 test 1
pick 9fd1a2c test 2
pick 62ee3cd test 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从第二行起将pick改为s（squash）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pick 5ff9f11 test 1
s 9fd1a2c test 2
s 62ee3cd test 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存并退出（esc， :wq）<br> 之后会继续跳转到commit message 的编辑界面<br> 然后写一个新的commit信息作为这3个commit的log信息<br> 保存并退出（esc， :wq）<br> Successfully表示操作成功。<br> git rebase --abort 会放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃；</p><p>commit</p><ol><li>git log: 查看提交历史</li><li>git rebase -i HEAD~4 合并前面四个 commit 记录</li><li>保存退出，按下 esc 再按 ：然后输入 wq 或 x 保存<br> 如果有冲突，可以先解决冲突，解决完之后执行：<br> git add .<br> git rebase --continue<br> 如果不想执行或者想放弃的话可以执行：<br> git rebase --abort</li><li>如果没有冲突，或者冲突已经解决，会弹出窗口，让你注释掉一些提交记录，这里是让我们编辑自己合并的这些记录的概览，如：完成了什么功能，按照实际情况填写。保存退出，按下 esc 再按 ：然后输入 wq 或 x 保存</li></ol><h3 id="子模块" tabindex="-1"><a class="header-anchor" href="#子模块" aria-hidden="true">#</a> 子模块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 取消子模块索引
rm -rf projectfolder 
git rm -r projectfolder 
// 添加子模块
git submodule add git@132.148.160.106:docpal/user-guide.git app/documentation
// 拉取子模块需要在子模块终端键入
&lt;!--git pull git@132.148.160.106:docpal/user-guide.git--&gt;
子模块创建后可直接在子模块终端操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-yarn" tabindex="-1"><a class="header-anchor" href="#npm-yarn" aria-hidden="true">#</a> npm&amp;yarn</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.  npm install
    yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">功能</th><th style="text-align:left;">npm</th><th style="text-align:left;">yarn</th></tr></thead><tbody><tr><td style="text-align:center;">添加所有依赖</td><td style="text-align:left;">npm install / npm i</td><td style="text-align:left;">yarn install</td></tr><tr><td style="text-align:center;">添加</td><td style="text-align:left;">npm install xxx（--save / --save-dev）</td><td style="text-align:left;">yarn add xxx （&#39; &#39; / --dev）</td></tr><tr><td style="text-align:center;">删除</td><td style="text-align:left;">npm uninstall xxx</td><td style="text-align:left;">yarn remove xxx</td></tr></tbody></table><h3 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 设置
npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
pnpm config set registry https://registry.npmmirror.com/

// 查看
npm config get registry
yarn config get registry
pnpm config get registry

node-sass 淘宝镜像设置
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
pnpm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

删除镜像
npm/pnpm config delete registry
npm config delete disturl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ubantu" tabindex="-1"><a class="header-anchor" href="#ubantu" aria-hidden="true">#</a> ubantu</h2><table><thead><tr><th style="text-align:center;">功能</th><th style="text-align:left;">命令行</th></tr></thead><tbody><tr><td style="text-align:center;">安装</td><td style="text-align:left;">sudo dpkg -i google-chrome-stable_current_amd64.deb</td></tr></tbody></table><h3 id="txt-乱码修复" tabindex="-1"><a class="header-anchor" href="#txt-乱码修复" aria-hidden="true">#</a> txt 乱码修复</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>iconv -c -f gb18030 -t UTF-8 nine.txt &gt; newfile1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:w - 保存文件，不退出 vim
:w file -将修改另外保存到 file 中，不退出 vim
:w! -强制保存，不退出 vim
:wq -保存文件，退出 vim
:wq! -强制保存文件，退出 vim
:q -不保存文件，退出 vim
:q! -不保存文件，强制退出 vim
:e! -放弃所有修改，从上次保存文件开始再编辑

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),s=[t];function r(l,c){return i(),n("div",null,s)}const u=e(d,[["render",r],["__file","gitOrder.html.vue"]]);export{u as default};
