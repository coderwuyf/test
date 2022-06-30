module.exports = Object.freeze({
  development: {
    // 测试
    SERVER_PATH: "120.25.178.236", // ssh地址 服务器地址
    SSH_USER: "root", // ssh 用户名
    PASSWORD: "WYF920901525wyf", // 服务器密码
    PATH: "/root/project", // 需要上传的服务器目录地址, 项目文件的    ！！！父级文件夹！！！
    FOLDER_NAME: "test", // 需要上传的服务器目录地址，项目文件名
    git_PATH: "https://github.com/coderwuyf/test.git", // git项目路径
    git_USER: "1651263422@qq.com", // git账号
    git_PASSWORD: "920901525wyf", // git密码
    FOLDER: "dist", // 打包后的文件
    buildScripts: "npm run build", // 项目构建语句，例如npm run build
  },
});
