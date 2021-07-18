#!usr/bin/env bash
branch="$(git symbolic-ref --short -q HEAD)"

# 定义一个函数
function gitPush() {
  echo -e "\033[34mrunning commit...... \033[0m"
  #判断 函数存在参数 commit message 允许提交
  if [[ -n $1  ]] 
  then 
      echo -e "\033[34mgit add . \033[0m"
      git add . 
      echo -e "\033[34mgit commit -m $* \033[0m"
      # $* 以一个字符串形式获取参数
      git commit -m "$*"
      echo -e "\033[34mgit pull \033[0m"
      git pull
      echo -e "\033[34mgit push origin $branch \033[0m"
      git push origin $branch
      echo -e "\033[32mCommit 'SUCCESS'\033[0m"
  else 
      echo 'message is not found'
  fi
}
# 将运行脚本的参数以一个字符串形式传递
gitPush $*
