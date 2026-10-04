# 上传、凭据与 GitHub Pages

## 既有方式

已通过 GitHub API 核验：旧站为 `Kzczc/zhiyan-decision-studio`，Pages 源 `main:/docs`。本网站以独立仓库 `Kzczc/lab-homepage` 发布，不修改旧站。

## 本网站方式

1. 编辑 `content/site.json` 或 `docs/` 中的样式、交互。
2. 运行 `npm run build`，然后 `npm start` 本地查看。
3. 提交源文件与构建好的 `docs/`。
4. 上传到 GitHub 的 `main` 分支。
5. 仓库 Settings → Pages → Deploy from a branch → main → /docs。
6. 等待 Pages 构建成功，验证网站、静态资源及论文筛选。

这次使用 GitHub REST / Git Data API 上传，按 blob → tree → commit → branch reference 的顺序生成提交；首次仓库初始化后配置 Pages。后续可使用常规 Git 工作流：

```sh
git add content scripts docs planning README.md README.en.md package.json preview-cover.png
git commit -m "Update research group website"
git push origin main
```

不要将 token 拼入 Git 远程地址。采用已登录的 Git Credential Manager，或在仅限本地的发布进程中读取凭据。

## 两类 key 的区别

| 类别 | 用途 | 使用位置 |
| --- | --- | --- |
| GitHub PAT | 仓库文件、分支、Pages 配置的认证 | 本地发布进程 → api.github.com；不写入仓库 |
| 模型供应商 API key | Gemini、Claude 等模型推理 | 未来独立后端环境变量；本主页当前不需要 |

已授权的 GitHub 凭据通过账号身份校验，账户为 Kzczc。本项目只使用创建仓库、写内容、查询/配置 Pages 所需操作。凭据真实值不出现在本站或任何交付文件中。

GitHub Pages 不运行服务端代码。若未来需要 AI 助手、表单收件或数据库，另行部署服务端，再由前端访问公开接口；供应商 key 保留在服务端。

## 更新与回退

每次发布使用普通提交，不覆盖已有历史。回退某次内容更新可用 `git revert <commit>` 生成反向提交后推送，并重新确认 Pages 构建；不使用强制推送。

更换正式名称不要求立即更换仓库名。确定最终名称和域名后，再统一更新主页标题、README 与相关链接。
