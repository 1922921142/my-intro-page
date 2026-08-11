# 小红书内容生产员 Agent 1.1 · 公开展示站

这是一个纯静态交互演示站，用于公开展示 Agent 的功能、规范、流程、能力边界与脱敏运行记录。

## 安全设计

- 不连接 API、Hermes 或飞书；
- 不提供真实文件上传或自由文本输入；
- 不包含 Token、Secret、Webhook、Chat ID 或真实业务数据；
- 所有交互均由本地 `app.js` 切换预置脱敏数据；
- 公开页只展示真实运行记录的脱敏摘录，不上传原始飞书截图；
- CSP 明确设置 `connect-src 'none'` 与 `form-action 'none'`。

## 本地预览

直接打开 `index.html`，或使用任意静态文件服务器预览。

## GitHub Pages

当前发布在 `1922921142/my-intro-page` 仓库的 `agent/` 子目录；仓库可通过 `Settings → Pages → Deploy from a branch → main / (root)` 托管。

公开网址：`https://1922921142.github.io/my-intro-page/agent/`
