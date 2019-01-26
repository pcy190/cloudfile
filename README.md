# Cloudfile
Tiny Static Web Server

# 安装
```
npm i -g cloudfile
```

# 使用
```
//先安装nodejs环境
//在当前目录启动
cloudfile

//指定端口号
cloudefile -p 9000

//指定hostname
cloudfile -h 127.0.0.1

//指定文件路径(请使用绝对路径)
cloudfile -d C:\files
```
```
也可以通过  node src/index.js 启动
```

# NPM上的项目地址
https://www.npmjs.com/package/cloudfile
# 更多配置
```
//配置mime方式
路径:src/helper/mime.js
这将可以配置对不同文件的显示方式或者下载方式

//配置压缩支持的格式
路径:config/defalutConfig.js 在compress中添加自己想要压缩的格式，默认支持
如果想禁用压缩，可以直接注释掉defalutConfig.js中的compress
```
# 特性
- 网络传输流进行优化。
- 针对高并发进行优化。
- 服务器端支持压缩传输。

# 应用场景
- 局域网下的文件共享传输。
- 进行网络映射后的云盘功能。

# 待开发功能
- 断点断续传输
- 登录认证功能
- 服务器缓存 (没有那么大的业务量好像并不需要)
