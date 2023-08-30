[toc]
# git
## 拉取远程代码
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

## 分支
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

## 合并代码
```
git pull origin main 当前分支合并远程分支代码
git cherry-pick 671efa02b718913a2d1f5222ea5dd48c23228499 当前分支合并某个提交的代码
```
## 撤销commit
```
git reset --soft HEAD^
```
## 提交代码
```
git add .
git commit -m '【pdf预览组件】放大缩小'
git push origin pdfPages
```
## 暂存的内容
```
git stash  暂存修改
git stash list 可以看到保存的信息,其中stash@{0}就是刚才保存的标记
git stash pop stash@{0} 还原暂存的内容
git stash drop stash@{0} 删除指定栈
```
## 错误处理
您尚未结束您的合并（存在 MERGE_HEAD）。 请在合并前先提交您的修改。
```
git merge --abort
git reset --merge
git merge
```

##  版本之间的穿梭回退
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

# npm&yarn
```
1.  npm install
    yarn install
```
| 功能 | npm | yarn | 
| :----: | :---- | :---- | 
| 添加所有依赖 | npm install / npm i  | yarn install | 
| 添加 | npm install xxx（--save / --save-dev）  | yarn add xxx （' ' / --dev）| 
| 删除 | npm uninstall xxx  | yarn remove xxx | 
## 镜像
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
# 合并
## commit
1. git log: 查看提交历史
2. git rebase -i HEAD~4 合并前面四个 commit 记录
3. 保存退出，按下 esc 再按 ：然后输入 wq 或 x 保存
如果有冲突，可以先解决冲突，解决完之后执行：
git add .
git rebase --continue
如果不想执行或者想放弃的话可以执行：
git rebase --abort
4. 如果没有冲突，或者冲突已经解决，会弹出窗口，让你注释掉一些提交记录，这里是让我们编辑自己合并的这些记录的概览，如：完成了什么功能，按照实际情况填写。保存退出，按下 esc 再按 ：然后输入 wq 或 x 保存

## 特定commit
git log 
git checkout B
git cherry-pick 29d9493d
git push

## 合并commit
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
## 子模块
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



# ubantu
| 功能 | 命令行 | 
| :----: | :---- | 
| 安装  | sudo dpkg -i google-chrome-stable_current_amd64.deb | 

## txt 乱码修复
```
iconv -c -f gb18030 -t UTF-8 nine.txt > newfile1.txt
```

## vim
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
