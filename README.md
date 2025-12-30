# papudding-layout-demo

papudding-layout 的演示项目，展示如何使用该布局组件构建现代化的 Vue 3 应用程序。

## 项目简介

这是一个基于 Vue 3 + TypeScript + Vite 开发的前端演示项目，使用 Element Plus 作为 UI 组件库，并集成了 papudding-layout 布局组件。项目展示了如何使用该布局组件构建具有完整侧边栏导航、顶部栏和内容区域的现代化应用程序界面。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **语言**: TypeScript
- **构建工具**: Vite
- **UI 组件库**: Element Plus
- **路由管理**: Vue Router 4
- **状态管理**: Vuex 4
- **布局组件**: papudding-layout

## 项目结构

```
papudding-layout-demo/
├── public/                 # 静态资源文件
│   ├── nav/               # 导航图标
│   ├── logo-full.png      # 完整 Logo
│   └── logo.png           # 简化 Logo
├── src/                   # 源代码目录
│   ├── pages/             # 页面组件
│   │   ├── HelloWorld.vue # 首页
│   │   ├── Login.vue      # 登录页
│   │   ├── TestPage.vue   # 测试页面
│   │   └── TestTablePage.vue # 测试表格页面
│   ├── store/             # Vuex 状态管理
│   │   └── index.ts       # 主 store 文件
│   ├── utils/             # 工具函数
│   │   └── menuItemBuilder.ts # 菜单构建工具
│   ├── App.vue            # 根组件
│   ├── main.ts            # 应用入口
│   └── router.ts          # 路由配置
├── index.html             # HTML 入口文件
├── package.json           # 项目配置
├── tsconfig*.json         # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── yarn.lock              # Yarn 依赖锁定文件
```

## 功能特性

1. **完整的布局系统**: 使用 papudding-layout 组件提供的侧边栏、顶部栏和内容区域布局
2. **导航菜单**: 支持嵌套菜单和图标展示
3. **登录功能**: 完整的登录页面和认证流程
4. **页面路由**: 使用 Vue Router 管理页面导航
5. **响应式设计**: 适配不同屏幕尺寸
6. **国际化**: 使用 Element Plus 中文本地化

## 快速开始

### 安装依赖

```bash
# 使用 Yarn
yarn install
```

### 开发模式

```bash
# 使用 Yarn
yarn dev
```

项目将在 http://localhost:5173 启动。

### 调试 papapudding-layout 
```bash
# 使用 Yarn
yarn remove papudding-layout
```
前序：
- 确保已在 papudding-layout 项目目录下执行 `yarn build` 构建项目
- 确保已在 papudding-layout 项目目录下执行 `yarn link` 链接项目

```bash
yarn link papudding-layout
```
### 取消调试：
```bash
yarn unlink papudding-layout
```
```bash
yarn add papudding-layout
```


## 开发说明

- 所有页面组件位于 `src/pages/` 目录下
- 路由配置在 `src/router.ts` 中管理
- 状态管理在 `src/store/` 目录下
- 工具函数在 `src/utils/` 目录下
- 静态资源在 `public/` 目录下

## License

MIT

