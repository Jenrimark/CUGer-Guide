# 地大新生导航

面向中国地质大学（武汉）学生的公益信息导航站

基于原站抓包文件(见 `reference/` 目录下的 HTML)用 **Vite + React + TypeScript + Tailwind CSS v4** 重建。

## 技术栈

- **Vite**(构建工具,`vite preview` 可直接预览生产产物)
- **React 19 + TypeScript**
- **React Router v7**(SPA 路由)
- **Tailwind CSS v4**(`@tailwindcss/vite`)
- **lucide-react**(图标)

## 页面

| 路由           | 说明                                                       |
| -------------- | ---------------------------------------------------------- |
| `/`          | 首页:hero、快捷入口、分类、精选指南、AI 问答横幅、审核内容 |
| `/guide`     | 新生指南:搜索、来源筛选、分类 Tab、指南卡片                |
| `/services`  | 服务大厅:12 个官方入口 + 安全提示                          |
| `/community` | 校园内容:审核内容流                                        |
| `/assistant` | 问问纪小萌:知识库问答界面(静态还原)                        |

## 运行

```bash
npm install
npm run dev       # 开发模式 http://localhost:5173
npm run build     # 类型检查 + 构建到 dist/
npm run preview   # 预览生产构建
```

## 目录结构

```
index.html                # 入口(字体、标题、根挂载点)
src/
  main.tsx                # 应用入口
  App.tsx                 # 路由与布局(SiteLayout / AssistantLayout / NotFound)
  globals.css             # 原站设计系统(完整移植)
  components/             # SiteHeader / SiteFooter / MobileNav / Icon / CampusArt
  pages/                  # Home / Guide / Services / Community / Assistant
  lib/seo.ts              # usePageMeta:设置页面标题与描述
public/icon.svg           # 品牌 favicon
reference/                # 原站抓包 HTML + 提取的 CSS 等素材
```

## 设计系统

原站的完整样式已原样移植到 `app/globals.css`(去掉抓包工具注入的图片数据和 Tailwind 自身引导代码)。设计令牌:

- 纸色 `#f4f1ec`、表面 `#fbfaf7`、墨色 `#2a2a28`
- 强调色:绿 `#6b8a7f`、珊瑚 `#b07a6a`、蓝 `#7a90a0`、金 `#b8a06b`、紫 `#8e84a0`
- 标题字体 Cormorant Garamond + 中文衬线回退

## 已知差异(复刻占位)

- **校园照片**:抓包中为 base64,已用 `CampusArt` 渐变占位组件代替。后续可替换为真实图片或远程 URL。
- **指南内容**:保留原站的测试数据(如「测试测试」「1282722727」等),可替换为真实数据。
- **移动端底部导航**:原站抓包时该导航未水合,按设计还原(5 个入口 + 激活圆点)。
- **交互**:搜索、筛选、聊天均为静态还原,未接后端。
