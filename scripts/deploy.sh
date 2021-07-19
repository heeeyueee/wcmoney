#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin https://gitee.com/heeeyueee/easy-money-website.git &&
git push -u origin main -f
cd -