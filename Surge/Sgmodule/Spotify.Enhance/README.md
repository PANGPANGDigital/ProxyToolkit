# Spotify Enhance

为 **Spotify** 提供内置歌词补全与双语翻译的 Surge 模块，仅保留歌词增强功能，不包含会员状态改写与去广告逻辑。

## 功能

- 已有官方歌词时优先保留原歌词，并按需附加翻译轨道
- 缺失官方歌词时，按歌名、歌手与时长自动匹配网易云音乐（支持逐字歌词与自带翻译）及 LRCLIB
- 支持通过 Google Translate 补全双语翻译
- 同步处理曲目元数据（`extended-metadata` / `metadata/4/track`）、播放状态（`connect-state`）与详情页滚动卡片（`scrollsita`），在缺失官方歌词时补出歌词入口
- 保留对 Spotify QUIC 流量的阻断规则，避免客户端走 HTTP/3 绕过 Surge MITM

## 模块参数

| 参数 | 默认值 | 作用 |
| --- | --- | --- |
| 启用歌词补全 | `true` | 开启或关闭歌词补全与外部歌词匹配 |
| 启用歌词翻译 | `true` | 开启或关闭双语歌词翻译 |
| 翻译目标语言 | `zh-CN` | 翻译目标语言代码，例如 `zh-CN`、`zh-TW`、`en`、`ja` |

## 安装

在 Surge 的 **模块** 页面安装：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/Spotify.Enhance/Spotify.Enhance.sgmodule
```

使用前需在 Surge 中开启 HTTPS 解密（MITM）并信任 Surge CA 证书。若同时使用其他 Spotify 歌词模块，请先停用以免同一接口发生冲突。

> 歌词接口返回成功不代表客户端一定显示歌词卡片；部分曲目入口仍可能受 Spotify 本地元数据影响，请以客户端实际界面为准。

## 本地资源与上游依赖

- 模块从本仓库加载 `spotify-lyrics.js`，不从上游仓库拉取运行时脚本。
- `spotify-lyrics.js` 为原生自包含实现，内置轻量级 Protobuf 编解码器，不依赖外部 JS 运行时或远程 Worker。
- 运行时仅请求公开元数据、歌词与翻译接口（Spotify 公开页、`music.163.com`、`lrclib.net`、`translate.googleapis.com`），与 GitHub 上游仓库完全解耦。
- 因此即使上游仓库删除，也不会影响本模块运行；只要本仓库及其 raw 文件仍可访问即可。

## 文件

```text
Spotify.Enhance/
├── README.md
├── Spotify.Enhance.sgmodule
├── spotify-lyrics.js
├── THIRD_PARTY_NOTICES.md
└── LICENSES/
    └── Reukix-ukix-MIT.txt
```

## 致谢与许可

- 歌词脚本与相关匹配规则基于 [Reukix/ukix](https://github.com/Reukix/ukix) 的 `js/Spotify-lyrics.js` 与 `Script/Spotify.sgmodule`，MIT 许可。
- 对应许可证与本地修改说明已随本目录保存，见 `THIRD_PARTY_NOTICES.md` 与 `LICENSES/Reukix-ukix-MIT.txt`。
