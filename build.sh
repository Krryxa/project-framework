#!/bin/sh
set -e
begin_time=$(date +%s)
echo $(date +"%Y-%m-%d %H:%M:%S") 'build start'

# 保证干净的部署目录
if [ -d output ]; then
  rm -r output
fi

echo $(date +"%Y-%m-%d %H:%M:%S") 'client begin'
cd client && rm -rf node_modules # 清理依赖
yarn # 安装所有依赖
yarn build
echo $(date +"%Y-%m-%d %H:%M:%S") 'client end'

echo $(date +"%Y-%m-%d %H:%M:%S") 'server begin'
cd ../server && rm -rf node_modules # 清理依赖
yarn # 安装所有依赖
yarn tsc # 编译 ts
rm -rf node_modules # 删除所有依赖
# 判断是否存在 view 目录，不存在则创建
if [ ! -d app/view ]; then
  mkdir app/view
fi
mv app/public/index.html app/view/ # 将打包好的 app/public/index.html 移动到 app/view/ 目录
cd .. && cp -r server output # 复制 server 到指定部署目录
cd output && yarn install --production # 安装生产环境依赖
echo $(date +"%Y-%m-%d %H:%M:%S") 'server end'

end_time=$(date +%s)
cost_time=$(($end_time - $begin_time))
echo "执行共花费：$cost_time 秒"