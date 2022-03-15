#!/bin/sh
set -e
begin_time=$(date +%s)
echo $(date +"%Y-%m-%d %H:%M:%S") 'build start'

rm -rf node_modules # 清理依赖
yarn # 安装所有依赖
yarn tsc # 编译 ts
rm -rf node_modules # 删除所有依赖
yarn install --production # 安装生产环境依赖

echo $(date +"%Y-%m-%d %H:%M:%S") 'build end'

end_time=$(date +%s)
cost_time=$(($end_time - $begin_time))
echo "执行共花费：$cost_time 秒"