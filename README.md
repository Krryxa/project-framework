# 全栈式模板框架

## Description

此项目为全栈式基础模板框架，会不断通过实际项目的总结提炼，来加强模板功能，提高项目开发效率，让开发者只需要关心业务即可。

## Technology Stack

```client``` 客户端、```server``` 服务端采用技术架构：
- **client**：```Vite``` + ```Vue3.2``` + ```Typescript```
- **server**：```Egg``` + ```Typescript```

对于常用功能，框架也引入了如下依赖，并有应用示例：
- **client**：```vue-router``` + ```axios``` + ```pinia```
- **server**: ```egg-validate``` + ```egg-apigw-tracer```

eslint + stylelint + commit 格式校验

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
* [x] 目录结构统一化，客户端 client / 服务端 server
* [x] client 提供 router、axios http 库、pinia 全局状态管理
* [x] server 约定 RESTful API 和路由风格，提供唯一请求 requestId
* [x] 全面采用 Typescript
* [x] 部署脚本 build.sh 自动化
* [x] 服务端日志统一化
* [x] 提供 precommit hook 校验 ESlint / Stylelint / Commit
* [x] 支持请求直接代理转发

## Contribution
欢迎大家共同推进最佳实践模板的易用性，可以通过 ```ISSUE``` / ```PR``` 的形式讨论。