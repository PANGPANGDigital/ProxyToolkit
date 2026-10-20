# NeteaseAds.Unblock（Surge）

本目录保存网易云音乐去广告 Surge 模块及其脚本快照。模块由 [ddgksf2013/Rewrite](https://github.com/ddgksf2013/Rewrite) 的 `AdBlock/NeteaseAds.conf` 转换而来。

## 文件

- `网易云音乐去广告.sgmodule`：Surge 模块配置。
- `netease.adblock.js`：随仓库保存的上游响应处理脚本快照。

## 固化上游脚本

上游规则和脚本来源：

- 规则：[NeteaseAds.conf](https://github.com/ddgksf2013/Rewrite/blob/master/AdBlock/NeteaseAds.conf)
- 脚本：[netease.adblock.js](https://gist.githubusercontent.com/ddgksf2013/4f53b7c6083678df25fecc8ff68b52c4/raw/netease.adblock.js)

本仓库保留了脚本快照（规则版本 `V1.0.33`、规则更新时间 `2025-03-19`；脚本内部版本 `20250319@V1.0.9`）。模块的 `script-path` 指向本仓库的 Raw 文件，不再依赖上游 Gist；即使上游仓库或 Gist 删除，仓库中的快照仍可供模块加载。

Surge 按模块配置每 24 小时检查一次脚本更新。更新快照时，请同时检查模块适配和上游变更，并保留本 README 的来源与致谢信息。

## 安装

在 Surge 的「模块」页面中选择「从 URL 安装」，使用以下地址：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/NeteaseAds.Unblock/NeteaseAds.Unblock.sgmodule
```

使用前请在 Surge 中启用 HTTPS 解密并安装、信任 Surge 证书。模块会将 `interface*.music.163.com` 追加到 MITM 主机名列表。

## 与上游规则的差异

上游的 `reject-200` 规则在模块中用 Surge URL Rewrite 的 `reject` 实现。它会拒绝请求，不能完全复现上游返回空内容 HTTP 200 的行为。

## 致谢

感谢墨鱼（[@ddgksf2013](https://github.com/ddgksf2013)）持续维护并分享网易云音乐规则与脚本。上游规则注明引用时请保留出处；本仓库在此保留原作者、项目和脚本来源。Surge 适配与脚本快照整理由本仓库完成。
