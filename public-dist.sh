#!/bin/bash
lastCommitMsg=`git log -n 1`
srcBranchName=`git symbolic-ref --short -q HEAD`

src_path=`pwd`
echo src 目录：$src_path

cd $TMPDIR
rm -rf resume
git clone --branch=gh-pages --single-branch --depth=1 git@github.com:cungen/resume.git
cd resume

dist_temp_path=`pwd`
echo 临时目录：$dist_temp_path

echo "=========="
checkCmdRet() {
    if [ $? != 0 ]
    then
        echo $2;
        exit 1;
    else
        echo $1;
    fi
}

rm -rf ./dist
cp -r $src_path/dist ./dist
checkCmdRet "拷贝 dist" "拷贝 dist 失败!"

echo "=========="
echo 临时目录内容：
ls -l -a -h
echo dist目录内容：
ls -l -a -h dist

echo "===== dist 仓库 push ====="
git status
git add .
git commit -m "$srcBranchName 分支构建：$lastCommitMsg"
git push origin HEAD:gh-pages