> 当前实现已更新为六个独立页面；最新视觉、字体、图片和布局以 [DESIGN.md](DESIGN.md) 为准。以下保留内容核验及参考站调研记录。

# 实验室主页调研与实施记录

核验日期：2026-10-05。对象：香港科技大学（广州）金融科技学域张光老师。简洁学术型、中英切换。

## 研究定位与正式名称

[学校档案](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page?id=32)确认张光为社会枢纽金融科技学域助理教授，2021 年 5 月获波士顿大学经济学博士。研究兴趣列为 FinTech、Financial Econometrics、Machine Learning、Empirical Finance。公开邮箱 guangzhang@hkust-gz.edu.cn，办公室 W1 L5 509。

学校档案还列有“广州市金融科技前沿研究重点实验室”项目，但记录 isLeader=0；这不足以把它作为本研究组正式名称。已确认使用 AIDE Lab（AI, Decisions & Economics；智能决策与经济研究实验室）作为实验室名称，张光为负责人。

学生论文显示研究已拓展至 LLM 训练与评价、商业推理、多智能体研究及社会决策；公开 arXiv 作者检索还补充了 Skill-Use 与 CoCo-Bench。网站以三条主线组织：①大模型学习与推理；②智能体协作与决策；③金融数据与计量模型。比仅以量化交易为中心更贴合现有资料。

命名提案（尚未进行同名、商标或域名核查，均非正式名称）：

| 候选 | 英文展开 | 适合的取向 |
|---|---|---|
| FIND Lab | Financial Intelligence and Decision-making | 金融问题、智能方法与决策；建议优先讨论 |
| AIDE Lab | AI, Decisions and Economics | 更宽的经济与社会决策研究空间 |
| FinAI Lab | Financial Artificial Intelligence | 金融与 AI 定位最直观，但名称较通用 |

此前 FAME 的计量导向较强，可以保留为备选；不宜仅凭早期教师介绍确定品牌。

## 11 个实际读取的参考网站

| 参考网站 | 已读到的结构 | 本站采用 |
|---|---|---|
| [MedAI Lab · 郑冶枫](https://medai.lab.westlake.edu.cn/) · 西湖大学 | 研究、团队、论文、新闻与 Join us 导航；三类研究主题与 PI 简介明确。 | 首页先建立研究定位，再连接成果与团队。 |
| [MobiX · 刘志丹](https://liuzhidan.github.io/group/) · 香港科技大学（广州） | 个人主页与团队页连通；博士生、RA、校友及去向分组清楚。 | 区分当前成员、联合指导与已完成学位；补充个人主页。 |
| [CIS Lab · 王泽宇](https://cislab.hkust-gz.edu.cn/) · 香港科技大学（广州） | 首页为简介、精简新闻、Recent Research，独立 Members、Publications、Opening。 | 让代表研究承担首页叙事，完整论文另有易用索引。 |
| [Stanford Digital Economy Lab](https://digitaleconomy.stanford.edu/) · Stanford | Economics of AI、经济测量、数字平台与 AI Agents 分主题；精选内容区分项目与论文。 | 最接近本组跨学科定位：让经济问题、AI 方法、实际应用连起来。 |
| [IRIS · Chelsea Finn](https://irislab.stanford.edu/) · Stanford | Home、People、Publications、Contact 四个入口；开篇直接解释研究问题。 | 减少导航层级，突出可读的研究介绍。 |
| [RPL · Yuke Zhu](https://ut-austin-rpl.github.io/) · UT Austin | Robotics 与 Embodied AI 两条主线；Research、Robots、Teaching、Opportunities 分开。 | 按问题组织研究，不把工具与算法名堆成标签墙。 |
| [Stanford Vision and Learning Lab](https://svl.stanford.edu/) · Stanford | 研究项目含 BEHAVIOR、ObjectFolder；团队图与研究项目相衔接。 | 每个项目给出问题、方法、论文与代码入口。 |
| [AUTOLAB · Ken Goldberg](https://autolab.berkeley.edu/) · UC Berkeley | Publications、Open Source Projects、People、Resources、Contact 导航；首页配团队合影。 | 区分论文和代码，把真实团队素材列为优先收集项。 |
| [Hazy Research · Chris Ré](https://hazyresearch.stanford.edu/) · Stanford | 首屏表达研究立场，People 与 Blog 简洁；博客按日期、作者组织。 | 研究笔记应有稳定维护人后再开设。 |
| [Stanford NLP Group](https://nlp.stanford.edu/) · Stanford | People、Research、Blog、Software、Seminar、Join；介绍串联 DSPy、Stanza。 | 让论文与实际可用的开放工具相互连接。 |
| [MIT Media Lab](https://www.media.mit.edu/) · MIT | Research、People、Events 与 Videos；卡片包含主题、类别、时间和研究组。 | 借鉴项目元数据，不照搬大型机构的栏目数量。 |

以上 11 个站点均成功返回可阅读正文。浏览器额外检查了视觉：部分远程字体、图片加载缓慢，MedAI/MobiX 的完整截图等待字体超时，Digital Economy/Media Lab 浏览器导航超时，但 HTTP 正文已读到。本轮也尝试 BAIR，其页面只返回空应用壳，未计入 11 个有效参考。

## 实施的页面结构

研究定位 → 近期动态 → 三条研究主线 → BizSage / PRISM / FinRipple 三项精选研究 → 论文筛选 → PI / 在读学生 / 毕业记录 → 联系。

源数据含 21 条成果，公开论文页呈现其中 17 条已发表或已接收成果：12 篇有出版记录、2 篇有预印本及作者公开的接收信息、1 篇以作者仓库为依据。原文档的 13 条学生论文中，11 条已经有可用公开入口，另外 2 条保留在本地筹备清单；还加入 4 条学校档案或个人页中的其他成果。项目图为本站原创概念图，并已注明概念性质，后续替换正式论文图。

学生名单共 30 条培养记录、28 个不同姓名：7 名在读博士、1 名在读硕士、2 条博士完成记录、20 条硕士完成记录。Jiaxin Liu 和 Junying Ma 各有硕士完成与博士在读两条记录，不重复统计为两个人。主要指导和联合指导保留原表区别；Holam Yu（姓名拼写已由用户确认）按文档列为在读，虽然表列周期截至 2026，需再确认当前状态。

## 与既有网站的发布流程一致

已通过 GitHub API 验证账户 Kzczc 与旧项目 zhiyan-decision-studio，旧站发布源为 main:/docs。新站使用独立 lab-homepage 仓库，静态 HTML/CSS/JS，无第三方运行依赖。content/site.json 维护内容，Node 构建 docs/index.html，GitHub Pages 托管 docs。

GitHub PAT 仅用于本地进程向 api.github.com 认证。凭据不写入源码、Git remote 或网页。模型供应商 key 用于独立后端推理；这个学术主页不调用模型，不需要模型 key。已有授权凭据在内存使用，发布脚本与原始 Word 文件均不上传。

校验覆盖：中英切换与保存、搜索/年份/主题筛选、成员到论文的联动、手机菜单与 Escape、校友展开、静态资源、关闭 JavaScript 阅读，以及 320/390/768/1440 像素宽度。预览保留 noindex；它是公开网址，不是受限访问空间。
