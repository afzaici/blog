# 这是我的个人博客项目

> 一个基于VuePress 搭建markdown文档日志项目；

# 目录结构

```
cwd
├─── bin                // 入口文件
├─── lib                // 项目文件
├─── docs               // 生成静态资源(npm build)
├─── node_modules       // 生成依赖文件(npm install)
├─── original-file      // markdown 原文件
│   ├── README.md       // 配置首页
│   └── .vuepress       // VuePress配置文件夹
│       └── config.js   // 配置
├─── .gitignore         // git忽略文件
├─── .npmignore         // npm忽略文件
├─── .README            // oneself
└── package.json
```

# 使用
> Please make sure your version of Node.js is greater than 8.

``` bash
yarn dev
yarn build
```

## License
`The copyright is from VuePress`
