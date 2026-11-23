# vuepr

一个基于 Vue 2 构建的前端学习与实践项目。

本项目主要用于探索 Vue 生态中的组件开发、页面路由、状态管理、UI 组件库以及前后端接口交互。

## 🛠 技术栈

| 技术 | 版本 | 说明 |
| --- | --- | --- |
| Vue | 2.6 | 前端框架 |
| Vue Router | 3.3 | 页面路由管理 |
| Vuex | 3.5 | 状态管理 |
| Vant | 2.9 | UI 组件库 |
| Axios | 0.19 | HTTP 请求库 |
| jQuery | 3.5 | JavaScript 工具库 |
| Swipe | 1.7 | 滑动交互库 |
| Vue CLI | 4.4 | 项目构建工具 |
| Babel | - | JavaScript 兼容性转换 |

## 📁 项目结构

```text
vuepr/
├── public/             # 静态资源
├── src/                # 项目源代码
├── dist/               # 构建输出目录
├── .browserslistrc     # 浏览器兼容性配置
├── babel.config.js     # Babel 配置
├── vue.config.js       # Vue CLI 配置
├── package.json        # 项目依赖及脚本
└── README.md           # 项目说明文档
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/s1626197353/vuepr.git
cd vuepr
```

### 2. 安装依赖

确保本地已安装 Node.js 和 npm。

```bash
npm install
```

> 本项目使用较早版本的 Vue 生态依赖，建议使用与旧版 Vue CLI 兼容的 Node.js 环境。

### 3. 启动开发服务器

```bash
npm run serve
```

启动成功后，根据终端提示访问本地开发地址。

### 4. 构建生产版本

```bash
npm run build
```

构建产物默认输出到 `dist/` 目录。

## ⚙️ 开发代理配置

项目通过 `vue.config.js` 配置开发环境代理，将 `/api` 请求转发至后端服务。

```javascript
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:9001",
        changeOrigin: true,
        ws: true
      }
    }
  }
};
```

以上为本地开发配置示例，实际使用时请根据后端服务地址调整 `target`。

## 📚 学习方向

本项目涉及的主要前端技术方向：

- Vue 组件化开发
- Vue Router 路由管理
- Vuex 状态管理
- Vant UI 组件使用
- Axios 网络请求
- 前后端接口联调
- Vue CLI 项目构建与配置

## 📝 说明

本仓库为早期前端学习与实践项目，主要用于代码保存、学习记录和技术交流。

项目使用 Vue 2 及相关旧版依赖，运行时可能需要根据本地环境进行兼容性调整。

## 👤 Author

GitHub: [@s1626197353](https://github.com/s1626197353)
