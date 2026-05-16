# LeoPet — 全球宠物综合平台

仿制 [petopic.com](https://www.petopic.com/zh/) 首页的宠物综合信息平台，使用 Next.js 16 + TypeScript + Tailwind CSS 构建。

## 功能特性

- **免费领养** — 宠物领养信息卡片展示
- **宠物类别** — 按狗、猫、鹦鹉、仓鼠、兔子、鱼类浏览
- **宠物服务** — 兽医、美容、训练等专业服务
- **宠物友好场所** — 咖啡馆、公园等宠物友好地点
- **领养者匹配** — 寻找宠物的领养人资料
- **宠物指南** — 护理、喂养、健康知识库
- **宠物百科** — 各品种宠物详细资料
- **LeoPet 社交** — 宠物专属社交平台入口
- **AI 寻宠** — 智能匹配走失宠物
- **多语言支持** — 6 种语言切换
- **响应式设计** — 适配桌面、平板、手机

## 技术栈

| 技术 | 说明 |
|------|------|
| Next.js 16 | React 框架，App Router |
| TypeScript | 类型安全 |
| Tailwind CSS | 原子化 CSS |
| Lucide React | 图标库 |
| LoremFlickr | 真实宠物图片 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# 访问 http://localhost:3000

# 生产构建
npm run build
npm start
```

## 项目结构

```
├── app/
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页（组合所有区段）
│   └── globals.css        # 全局样式
├── components/
│   ├── header/            # 导航栏（TopBar + MainNav）
│   ├── home/              # 首页 15 个区段组件
│   ├── shared/            # 可复用卡片组件
│   └── footer/            # 页脚
├── data/                  # Mock 数据
├── types/                 # TypeScript 类型定义
└── public/                # 静态资源
```

## 页面区段

Hero → 免费领养 → 分类导航 → 精选宠物 → 宠物类别 → 领养者 → LeoPet社交 → 宠物友好场所 → 宠物服务 → 宠物指南 → 博客 → 平台统计 → 免费发布CTA → 宠物百科 → AI寻宠 → Footer
