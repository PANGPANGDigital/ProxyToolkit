# YouTube Enhance

为 **YouTube** 和 **YouTube Music** 启用后台播放和画中画（PiP）功能，**无去广告** 的 Surge 模块。

基于 [Maasea/sgmodule](https://github.com/Maasea/sgmodule) 的 YouTube Enhance。为保持与上游模块一致的后台播放行为，核心脚本及响应路由与上游同步。

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

## 致谢

- [Maasea/sgmodule](https://github.com/Maasea/sgmodule) — 原始 YouTube Enhance 项目

## 许可

本项目仅供学习交流使用，请遵守 YouTube 服务条款。
