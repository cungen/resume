#!/bin/bash
lastCommitMsg=`git log -n 1`

echo "===== gh-pages 分支 push ====="
git status
npm run build
git switch gh-pages
cp -r dist/* .
rm -rf dist
git add .
git commit -m "build：$lastCommitMsg"
git push