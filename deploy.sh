#!/usr/bin/env sh
set -e # 构建
pnpm run build # 进入构建文件夹
cd src/.vuepress/dist
# echo 'www.example.com' > CNAMEgit init
# git checkout -b main
git add -A
git commit -m 'deploy' 
# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/OnlY0226/oy.github.io.git main:gh-pages
# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:OnlY0226/oy.github.io.git main
cd -
