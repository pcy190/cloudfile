# Cloudfile
Tiny Static Web Server

# 安装
```
npm i -g cloudfile
```

# 使用
```
//指定端口号
cloudefile -p 9000

//指定hostname
cloudfile -h 127.0.0.1

//指定文件路径(请使用绝对路径)
cloudfile -d C:\files
```

# 更多配置
```
//配置mime方式
路径:src/helper/mime.js

//配置压缩支持的格式
路径:config/defalutConfig.js 在compress中添加自己想要压缩的格式，默认支持
如果想禁用压缩，可以直接注释掉defalutConfig.js中的compress
```