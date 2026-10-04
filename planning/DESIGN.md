# 实验室网站：第二版设计与页面结构

这版采用参考站的视觉体系重做，并将主体内容拆成六个独立页面。正式实验室名称没有确定；页眉仅使用张光姓名、研究团队说明和 HKUST(GZ) 学校信息，不使用 GZ 作为实验室品牌。

## 设计依据

| 参考 | 本次实际检查 | 采用的设计方式 |
|---|---|---|
| [西湖大学 MedAI / 郑冶枫](https://medai.lab.westlake.edu.cn/) | 首页截图、完整蓝色背景、导航、标题和正文计算样式、页面 CSS | 深蓝全宽首屏；亮蓝点线背景；橙色导航状态和按钮；背景下方的图片卡片；白色/浅灰分区；标题旁的橙色细线；独立 Research、Team、Publications、News、Join us 导航 |
| [MobiX / 刘志丹](https://liuzhidan.github.io/group/) | 首页完整截图、成员页、侧栏布局、字号、行距 | 团队页左侧 PI 信息、右侧成员与校友；白底与无衬线排版；按学位与当前/毕业状态分层；清晰标注指导关系 |
| [CIS Lab / 王泽宇](https://cislab.hkust-gz.edu.cn/) | 项目首页、字体表、项目标题、图片布局 | Mulish/Muli 标题与 Open Sans 正文的字形取向；项目使用真实研究图；论文、预印本与代码入口靠近项目介绍 |
| [Stanford Digital Economy Lab](https://digitaleconomy.stanford.edu/) | 页面结构与计算字体信息 | 研究问题与项目相连接。此站字体与视觉差异较大，没有混入主视觉 |

MedAI 的主要配色为深蓝、#F18D00 橙色、#F3F5F7 灰底。新版采用这些配色关系及其圆角导航、按钮、模块间距。MedAI 使用 Avenir 系列；新版使用与 CIS 相近的开放字体 Mulish 和 Open Sans，并保留微软雅黑/PingFang 中文回退。字体本地托管，许可证随源码提供。

首页背景沿用 MedAI 的深蓝科技视觉关系，使用可动的亮蓝线网。动效可暂停；系统“减少动态效果”偏好会默认停用；滚出可视区或标签页隐藏后停止绘制。校园横幅使用香港科技大学（广州）官网的真实校园图，不把参考实验室的人物与校园图片用作本组素材。

## 六个独立页面

| 页面 | 链接 | 内容 |
|---|---|---|
| 首页 | [Home](https://kzczc.github.io/lab-homepage/index.html) | 研究定位、3 个图文项目入口、研究概览、精选论文、动态、团队介绍与 PI |
| 研究 | [Research](https://kzczc.github.io/lab-homepage/research.html) | 三条研究主线、相关成果链接、13 张论文图与 4 个代表项目 |
| 团队 | [Team](https://kzczc.github.io/lab-homepage/team.html) | PI 侧栏、8 名当前学生、22 条已完成学位记录 |
| 论文 | [Publications](https://kzczc.github.io/lab-homepage/publications.html) | 19 条成果、年份侧栏、主题/作者/标题筛选、BibTeX 复制与全集下载 |
| 动态 | [News](https://kzczc.github.io/lab-homepage/news.html) | 按年份列出的研究进展与来源链接 |
| 联系与加入 | [Join](https://kzczc.github.io/lab-homepage/join.html) | 公开邮箱、办公室、研究交流方式与校园图 |

所有页面有相同导航及当前页状态；中英文选择跨页面保留。成员页可直接进入该成员的论文筛选结果。搜索和筛选条件会保存在当前 URL，便于分享或刷新。网站直接生成静态 HTML，关闭 JavaScript 仍可阅读主体内容。

## 图片与内容

- BizSage、PRISM、Caught in the Story 使用作者公开仓库里的真实框架图/示意图；FinRipple 使用预印本 Figure 2。来源见 content/asset-sources.json。
- 校园图片和学校字标来自 HKUST(GZ) 官网；PI 照片仍采用学校档案公开版本。上述材料保留原有权利。
- 未确定成员照片继续用姓名缩写显示；不生成虚构人像。
- 19 条成果、指导关系及来源差异保留前一版的核验口径。两篇待核验论文仍未直接发布为正式成果。
- 正式 Lab 名称、成员正式照片、完整团队合影及招生岗位仍待补充。

## 验证

六页均检查中英文、320/390/768/1440 像素宽度、图片加载、当前导航状态和移动菜单。另检查成员到论文的跳转、筛选和 URL 恢复、引用复制、无 JavaScript 阅读、动效暂停和减少动态偏好。公开发布仍保留 noindex 预览标记。
