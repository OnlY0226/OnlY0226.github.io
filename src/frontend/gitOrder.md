---
icon: pen-to-square
date: 2023-08-30
category:
  - 前端开发
tag:
  - Git
  - 指令
order: 1
---
# Git Order
## git
### 拉取远程代码
```
前置配置
1.git init 初始化（创建）本地仓库，可以看到项目文件夹下生成的.git隐藏文件夹。这个文件夹会记录以后每次的更改和提交。

2.git config --global user.name 'Kael'git初次使用配置个人用户名，如果以前已经配置，通过git config user.name查看。

3.git config --global user.email 'pankai486@qq.com'git初次使用时要先配置个人邮箱，如果以前已经配置，通过git config user.email查看。

4.ssh-keygen -t rsa -C "pankai486@qq.com"生成SSH公钥（基于个人邮箱），如果以前已经生成，也可以跳过这步。

5.cat ~/.ssh/id_rsa.pub获取生成的SSH公钥，如果报错，则使用上一步的命令重新生成公钥，复制公钥到阿里云，要从ssh-rsa开头开始复制起。

第一步：拉取远程代码
git clone https://github.com/…/PrettyGirls.git
第2步: 配置远程仓库地址
　　添加远程仓库地址：git remote add origin "git@github.com:Only-APTX-4869/demo.git"
　　查看远程仓库地址：git remote -v
```

### 分支
git branch -vv  查看本地分支及其关联远程分支 


git branch 查看本地分支

```
git branch pdfPages 创建本地分支

git checkout pdfPages 切换分支

git push origin pdfPages 创建远程分支

git push --set-upstream origin pdfPages 本地分支关联到远程某分支

git checkout -b virtual-folder  origin/virtual-folder 创建本地分支关联远程分支并切换分支

在删除分支前确保代码已经合到主分支上了
git push origin --delete {branchName}  删除远程分支：
git branch -d {branchName}  删除本地分支：
```
重命名
```
git branch -m 原始名称 新名称
```

### 合并代码cherry-pick

```
git pull origin main 当前分支合并远程分支代码
git cherry-pick 671efa02b718913a2d1f5222ea5dd48c23228499 当前分支合并某个提交的代码
 git cherry-pick --abort 终止
```

### 撤销commit
```
git reset --soft HEAD^
```
### 提交代码
```
git add .
git commit -m '【pdf预览组件】放大缩小'
git push origin pdfPages
```
### 暂存的内容
```
git stash  暂存修改
git stash list 可以看到保存的信息,其中stash@{0}就是刚才保存的标记
git stash pop stash@{0} 还原暂存的内容
git stash drop stash@{0} 删除指定栈
```
### 错误处理
您尚未结束您的合并（存在 MERGE_HEAD）。 请在合并前先提交您的修改。
```
git merge --abort
git reset --merge
git merge
```

###  版本之间的穿梭回退
命令方式：
1. 输入git log 查看所有提交的版本
注意：黄色字体中 commit后面的一串码就是每一个版本号对应的码
2. 回退到指定版本
== 注意：--hard 删除工作空间改动代码，撤销commit，撤销git add . ==
```
git reset --hard [提交号]
```
reset是指将HEAD指针指到指定提交，历史记录中不会出现放弃的提交记录。

3.推送代码
```
git push origin [分支名] -f
```

### 合并特定commit
```
git log 
git checkout B
git cherry-pick 29d9493d
git push
```
### 合并commits
#### git rebase
1. git rebase -i HEAD~3      // 3 代表想要合并最近3个commit
命令输入后，会出现
```
pick 5ff9f11 test 1
pick 9fd1a2c test 2
pick 62ee3cd test 3
```
从第二行起将pick改为s（squash）
```
pick 5ff9f11 test 1
s 9fd1a2c test 2
s 62ee3cd test 3
```
保存并退出（esc， :wq）
之后会继续跳转到commit message 的编辑界面
然后写一个新的commit信息作为这3个commit的log信息
保存并退出（esc， :wq）
Successfully表示操作成功。
git rebase --abort 会放弃合并，回到rebase操作之前的状态，之前的提交的不会丢弃；

commit
1. git log: 查看提交历史
2. git rebase -i HEAD~4 合并前面四个 commit 记录
3. 保存退出，按下 esc 再按 ：然后输入 wq 或 x 保存
如果有冲突，可以先解决冲突，解决完之后执行：
git add .
git rebase --continue
如果不想执行或者想放弃的话可以执行：
git rebase --abort
1. 如果没有冲突，或者冲突已经解决，会弹出窗口，让你注释掉一些提交记录，这里是让我们编辑自己合并的这些记录的概览，如：完成了什么功能，按照实际情况填写。保存退出，按下 esc 再按 ：然后输入 wq 或 x 保存

#### git commit --amend
```
git reset --soft <第一个 commit 的 id>
git commit --amend
```
::: tip
将当前分支的状态切换到第一个提交中，并保留本地的修改以及暂存区的设置；
将现在的暂存区的内容直接 amend 到前一个提交（在这里指的就是第一个 commit）。
:::
更多配置
```
// 如果不希望保留第一个 commit 的作者信息，可以加参数--reset-author：
git commit --amend --reset-author

// 如果希望不要修改作者和日期，可以加参数--no-edit：
git commit --amend --no-edit

// 如果希望修改日期，可以加参数--date，例如：
git commit --amend --date "Mon Aug 1 12:23:11 2022 +0800"
           
```
vim修改
1. 输入i插入
2. Esc推出编辑
3. :wq保存
4. git push --force-with-lease origin master // 强制推送到远程分支
### 子模块
```
// 取消子模块索引
rm -rf projectfolder 
git rm -r projectfolder 
// 添加子模块
git submodule add git@132.148.160.106:docpal/user-guide.git app/documentation
// 拉取子模块需要在子模块终端键入
<!--git pull git@132.148.160.106:docpal/user-guide.git-->
子模块创建后可直接在子模块终端操作
```


## npm&yarn&pnpm
```
npm install xxx@1.0.1 // 指定版本安装
npm install xxx@latest // 最新版本安装
npm install xxx@next // 最新版本安装
npm install xxx@beta // 最新版本安装
npm install xxx@canary // 最新版本安装
npm install xxx@tag // 最新版本安装
npm install xxx@file:../xxx // 本地安装
npm update [packageName] // npm update 包名
npm outdated // 查看所有已安装包的最新版本
npm update-notifier // 检查npm更新
npm uninstall xxx // 卸载包
npm cache clean // 清除缓存
npm config get registry // 查看npm源
npm config set registry https://registry.npm.taobao.org/ // 设置npm源
npm config set registry https://registry.npmjs.org/ // 设置npm源
npm config set registry http://registry.npmjs.org/ // 设置npm源
npm config set registry http://registry.cnpmjs.org/ // 设置npm源

```
| 功能 | npm | yarn | 
| :----: | :---- | :---- | 
| 添加所有依赖 | npm install / npm i  | yarn install | 
| 添加 | npm install xxx（--save / --save-dev）  | yarn add xxx （' ' / --dev）| 
| 删除 | npm uninstall xxx  | yarn remove xxx | 
### pnpm i --shamefully-hoist
### 镜像
```
// 设置
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
```
## nvm
```
nvm install <version> // 安装指定版本的Node.js。例如，nvm install 12.18.3会安装Node.js的12.18.3版本
nvm uninstall <version> // 卸载指定版本的Node.js。例如，nvm uninstall 12.18.3会卸载Node.js的12.18.3版本
nvm reinstall-packages <version> // 重新安装指定版本的Node.js，并重新安装该版本下的全局npm包

nvm ls // 列出已安装的Node.js版本。这个命令会显示所有已安装的Node.js版本，并用一个箭头标记出当前正在使用的版本
nvm use <version> // 切换到指定版本的Node.js。例如，nvm use 12.18.3会切换到Node.js的12.18.3版本
nvm current // 显示当前正在使用的Node.js版本。

nvm alias <name> <version> // 创建一个别名，用于指定版本的Node.js。例如，nvm alias default 12.18.3会创建一个名为"default"的别名，指向Node.js的12.18.3版本。

nvm deactivate
```


## ubantu
| 功能 | 命令行 | 
| :----: | :---- | 
| 安装  | sudo dpkg -i google-chrome-stable_current_amd64.deb | 
| 启动终端  | shift+alt+T | 

### txt 乱码修复
```
iconv -c -f gb18030 -t UTF-8 nine.txt > newfile1.txt
```
### 清理系统垃圾
```
sudo apt-get autoclean

sudo apt-get autoremove

sudo apt-get clean
```
### 优化系统启动项
Ubuntu默认启动了很多服务和应用，这些服务和应用会占用系统资源，导致系统运行变慢。我们可以通过优化系统启动项来提高系统性能。

具体操作：打开系统设置 -> 应用程序 -> 启动，将不必要的应用程序禁止启动即可。

### vim
```
:w - 保存文件，不退出 vim
:w file -将修改另外保存到 file 中，不退出 vim
:w! -强制保存，不退出 vim
:wq -保存文件，退出 vim
:wq! -强制保存文件，退出 vim
:q -不保存文件，退出 vim
:q! -不保存文件，强制退出 vim
:e! -放弃所有修改，从上次保存文件开始再编辑

```
