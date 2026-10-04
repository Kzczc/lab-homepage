# Guang Zhang Research Group

[在线预览](https://kzczc.github.io/lab-homepage/) · [调研与素材清单](https://kzczc.github.io/lab-homepage/references.html) · [English](README.en.md)

香港科技大学（广州）张光研究组主页：连接大模型学习与推理、智能体协作与决策、金融数据与计量模型。

![Homepage preview](preview-cover.png)

**3 个研究主题 · 3 个代表项目 · 15 篇公开成果 · 8 名当前学生**

支持中英切换、论文搜索、年份与主题筛选、成员关联论文、校友展开及手机导航。正式 Lab 名称仍在筹备，GZ 为工作标识。成果来源和待核验区别见 [SOURCES.md](planning/SOURCES.md)。

## 本地运行

Node.js 18+，无第三方构建依赖。

```sh
npm run build
npm start
```

打开 http://127.0.0.1:61332 。修改 `content/site.json` 后重新构建。部署使用 `main:/docs`。

| 文件 | 用途 |
|---|---|
| content/site.json | 双语内容、成果和培养记录 |
| scripts/build.cjs | 生成静态首页 |
| docs/ | GitHub Pages 发布文件 |
| planning/RESEARCH.md | 11 个参考网站与研究定位 |
| planning/MATERIALS.md | 下一批素材清单 |
| planning/SOURCES.md | 内容来源与差异 |
| planning/DEPLOYMENT.md | GitHub 上传与 key 使用 |

GitHub PAT 仅用于本地发布；主页无需模型 API key。原始 Word 和本地核对工作文件不上传。预览 `noindex` 不限制访问。PI 肖像及学术资料保留原权利；研究图为原创概念图；字体许可见 assets。
