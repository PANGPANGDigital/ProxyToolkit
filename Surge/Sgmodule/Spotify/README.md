# Spotify Surge 模块（本地快照）

这是 `app2smile/rules` 仓库中 Spotify Surge 模块的一份离线快照。模块本身及其两份 JavaScript 脚本均保存在本目录，不再从 GitHub 下载脚本；上游仓库删除后，这份本地副本仍可用。

## 安装为 Surge 本地模块

把以下三个文件复制到 Surge 的 Profile 目录中（放在同一层）：

- `Spotify.sgmodule`
- `spotify-json.js`
- `spotify-proto.js`

然后在 Surge 的模块列表中启用 `Spotify (local snapshot)`。模块使用相对 Profile 目录的本地脚本路径。Surge 文档说明本地模块是放在 Profile 目录中的 `.sgmodule` 文件，脚本路径支持相对 Profile 目录的本地路径：<https://manual.nssurge.com/profile/module.html> 和 <https://manual.nssurge.com/scripting/overview.html>。

需要已在 Surge 中安装并启用 MITM 证书；该模块会为 Spotify 客户端域名追加 MITM 主机名。原模块注明系统版本需 iOS 15 或以上。具体效果会受 Surge/Spotify 版本和 Spotify 服务端改动影响。

二进制 Protobuf 响应脚本最多处理 1 MiB；超过该大小时 Surge 会跳过脚本并透传响应。主机匹配兼容 URL 中显式出现的 `:443`。

## 快照信息

- 上游仓库：<https://github.com/app2smile/rules>
- 上游模块：<https://raw.githubusercontent.com/app2smile/rules/master/module/spotify.module>
- 固定上游提交：`df6366a7024e0b3f0aa3510c5b791eea6f3cba89`（2026-03-04）
- 获取日期：2026-10-14
- 上游许可证：MIT，见 `LICENSE.md`
- 脚本 SHA-256：`spotify-json.js` = `41cf1074770cdef3948baa12ff4a8db9045d1cac888714c8b7e69909eb531bc9`；`spotify-proto.js` = `2e6850e888d092905c766f0bbedc4b4afb9a712330970cc1265105d7fb4995d0`
- 这是一份静态快照，不会自动跟随上游更新。

## 候选域名规则

模块额外对以下 9 个精确主机名使用 `REJECT`：`aet.spotify.com`、`adeventtracker.spotify.com`、`ads-fa.spotify.com`、`ads-akp.spotify.com`、`audio-ads.spotify.com`、`analytics.spotify.com`、`metrics.spotify.com`、`crashdump.spotify.com`、`log.spotify.com`。规则由模块插入 Surge 的规则列表顶部，只匹配这些完整主机名，不匹配其他 `spotify.com` 子域名。

这些域名不等同于广告素材来源。`aet` 和 `adeventtracker` 更像广告事件/曝光统计端点；`analytics`、`metrics`、`crashdump`、`log` 属于遥测或错误日志类候选，屏蔽它们主要影响统计/日志回传。其余广告域名在旧版第三方屏蔽列表中出现过，但其中 `ads-fa`、`ads-akp`、`audio-ads`、`metrics` 在制作快照时的公共 DNS 查询未返回 A/CNAME 记录，可能已停用或仅在特定区域/客户端版本出现。

因此这些规则有机会阻断仍在使用的独立广告请求或统计请求，但**不能保证移除 Spotify 免费用户广告**。公开客户端流量记录曾观察到广告请求走 `spclient` 主机下的 `/ad-logic/prefetch`、`/ads/v3/ads` 路径；如果广告数据与 Spotify API/CDN 共用主机，按域名封锁会无效或影响其他功能。模块原有 `spotify-proto.js` 对 `ads=false` 的响应改写与这些域名规则是两种独立机制。

## 行为说明

上游脚本会改写 Spotify 客户端收到的二进制响应中的账户属性，包括把部分属性设置为 `premium`、`ads=false` 等。这属于客户端侧响应改写；它不会更改 Spotify 账户的真实订阅状态。请自行评估兼容性和服务条款影响。

快照中对 Protobuf 脚本的 `max-size` 设置做了修正：Surge 使用 `-1` 表示不限制，而不是 `0`；这里设为 1 MiB，避免无限缓冲。响应体超限时会按 Surge 行为跳过脚本并透传。参考 [Surge HTTP Response Script 文档](https://manual.nssurge.com/scripting/http-response.html)。
