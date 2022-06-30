# auto-deploy
Use Node to automatically deploy the project to the test server

使用nodejs自动部署项目到测试服务器上

此版本为git版

## 安装 install

```
npm i git-auto-deploy -D
// or
pnpm add git-auto-deploy -D
```

## 创建配置文件 create config file

根目录下创建配置文件 deployConfig.js

内容如下

```javascript
module.exports = Object.freeze({
  development: {
    // 测试
    SERVER_PATH: "", // ssh地址 服务器地址
    SSH_USER: "", // ssh 用户名
    PASSWORD: "", // 服务器密码
    PATH: "", // 需要上传的服务器目录地址, 项目文件的    ！！！父级文件夹！！！
    FOLDER_NAME: "", // 需要上传的服务器目录地址，项目文件名
    git_PATH: "", // git项目路径
    git_USER: "", // git账号
    git_PASSWORD: "", // git密码
    FOLDER: "", // 打包后的文件
    buildScripts: "", // 项目构建语句，例如npm run build
  },
});
```

然后在 package.json 中的 scripts 中添加下列语句

```json
"scripts": {
  ...
  "deploy": "deploy"
  ...
}
```

## 使用

```
npm run deploy
```

or

```
yarn deploy
```

or

```
pnpm deploy
```
