# 全栈式框架

## QuickStart

此项目为全栈式基础模板框架，会不断通过实际项目的总结提炼，来加强模板功能，提高项目开发效率，让开发者只需要关心业务即可。

## Technology Stack
Vite + Vue3.2 + Egg + Typescript

## Development

```bash
$ yarn install:all
$ cd client && yarn dev
$ cd server && yarn dev
```

## Deploy

执行 ```build.sh``` 构建

部署 XXX 环境 ```EGG_SERVER_ENV=XXX yarn start```

## Feature
* [x] 目录结构统一化 server/client
* [x] 部署脚本统一化
* [x] 服务端日志统一化
* [x] 添加 precommit hook 校验 ESlint
* [x] 添加 precommit hook 校验 Commit 格式
* [x] 支持请求的直接代理转发

## Contribution
欢迎大家共同推进最佳实践模板的易用性，可以同过 ISSUE/PR 的形式讨论。