# YouTube Enhance

为 **YouTube** 和 **YouTube Music** 启用**后台播放**和 **画中画（PiP）**功能的 Surge 模块。

基于 [Maasea/sgmodule](https://github.com/Maasea/sgmodule) 的 YouTube Enhance 精简，只保留后台播放与画中画功能，去除广告拦截、字幕翻译、界面元素隐藏等其他逻辑。

---

## 功能

- **后台播放** — 锁屏或切换到其他应用时，YouTube 音频继续播放
- **画中画（PiP）** — 小窗悬浮播放，边看视频边做其他事
- 同时支持 **YouTube** 和 **YouTube Music**（自动识别）

## 安装

### Surge

在 Surge 的 **模块** 标签页中，点击「安装」，输入以下链接：

```
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/YouTube.Enhance/YouTube.Enhance.sgmodule
```

要求 Surge 已开启 **HTTPS 解密（MITM）**，`youtubei.googleapis.com` 会自动追加到 MITM 主机名列表。

## 文件结构

```
YouTube.Enhance/
├── README.md
├── YouTube.Enhance.sgmodule   # Surge 模块配置
└── youtube.js                  # 核心脚本
```

## 工作原理

模块通过 MITM 拦截 YouTube 的 `youtubei/v1/player` 和 `youtubei/v1/get_watch` API 响应，解析其 protobuf 数据，修改 `playabilityStatus` 中的以下字段：

- `pictureInPictureRender.pictureInPictureAbility.active = true`
- `backgroundPlayerRender.backgroundAbility.active = true`

YouTube 客户端会根据这些字段决定是否允许后台播放和画中画，修改后即可解锁这两个功能。

## 技术细节

脚本基于 [protobuf-ts](https://github.com/timostamm/protobuf-ts) 解析 YouTube 的 protobuf 响应。核心处理流程：

1. `Ni(l)` — 清除广告相关字段（`adPlacements`、`adSlots` 等）
2. `Si(l)` — 设置 `playabilityStatus` 中的 PiP 和后台播放能力
3. `Pi(l,e)` — 处理字幕轨道

## 更新日志

- **2026-07-25**：修复核心处理逻辑，确保 `Br()` 正确调用 `Ni()`、`Si()`、`Pi()`；简化模块配置，仅保留 `player` 和 `get_watch` 端点

## 致谢

- [Maasea/sgmodule](https://github.com/Maasea/sgmodule) — 原始 YouTube Enhance 项目

## 许可

本项目仅供学习交流使用，请遵守 YouTube 服务条款。
