# 全栈式模板框架

## QuickStart

此项目为全栈式基础模板框架，会不断通过实际项目的总结提炼，来加强模板功能，提高项目开发效率，让开发者只需要关心业务即可。

## Technology Stack
Vite + Vue3.2 + Egg + Typescript

eslint + stylelint + commit 格式校验

```client```: vue-router + axios + pinia<br>
```server```: egg-validate + egg-apigw-tracer

## Development

```bash
$ yarn install:all
$ cd client && yarn dev
$ cd server && yarn dev
```
eg.<br>
http://localhost:3000/<br>http://localhost:3000/detail/1

## Deploy

执行 ```build.sh``` 构建

部署 XXX 环境 ```EGG_SERVER_ENV=XXX yarn start```

## Feature
* [x] 目录结构统一化 client / server
* [x] client 提供 axios http 库、pinia 全局状态管理
* [x] server 约定 RESTful API 和路由风格，提供唯一请求 requestId
* [x] 部署脚本统一化
* [x] 服务端日志统一化
* [x] 提供 precommit hook 校验 ESlint / Stylelint / Commit
* [x] 支持请求的直接代理转发

## Contribution
欢迎大家共同推进最佳实践模板的易用性，可以同过 ISSUE/PR 的形式讨论。