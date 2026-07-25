# YouTube Enhance

为 **YouTube** 和 **YouTube Music** 启用**后台播放**和**画中画（PiP）**功能的 Surge 模块。

基于 [Maasea/sgmodule](https://github.com/Maasea/sgmodule) 的 YouTube Enhance 精简，只保留后台播放与画中画功能，去除广告拦截、字幕翻译、界面元素隐藏等其他逻辑。

---

## 功能

- **后台播放** — 锁屏或切换到其他应用时，YouTube 音频继续播放
- **画中画（PiP）** — 小窗悬浮播放，边看视频边做其他事
- 同时支持 **YouTube** 和 **YouTube Music**（自动识别）

## 安装

### 方式一：本地模块

1. 将本项目克隆或下载到本地
2. 在 Surge 的 **模块** 标签页中，点击「安装本地模块」，选择 `YouTube.Enhance.sgmodule`
3. 确保 Surge 已开启 **HTTPS 解密（MITM）**
4. 在 MITM 主机名中添加 `youtubei.googleapis.com`（模块会自动追加）

### 方式二：托管远程 URL

将 `Script/Youtube/youtube.js` 上传到你的托管服务器，然后将模块中的 `script-path` 改为对应的远程 URL。

## 文件结构

```
YouTube Enhance/
├── README.md
├── YouTube.Enhance.sgmodule   # Surge 模块配置
└── Script/
    └── Youtube/
        └── youtube.js          # 核心脚本（精简版）
```

## 工作原理

模块通过 MITM 拦截 YouTube 的 `youtubei/v1/player` API 响应，修改 `playabilityStatus` 中的以下字段：

- `pictureInPictureRender.pictureInPictureAbility.active = true`
- `backgroundPlayerRender.backgroundAbility.active = true`

由于 YouTube 客户端会根据这些字段决定是否允许后台播放和画中画，修改后即可解锁这两个功能。

## 致谢

- [Maasea/sgmodule](https://github.com/Maasea/sgmodule) — 原始 YouTube Enhance 项目

## 许可

本项目仅供学习交流使用，请遵守 YouTube 服务条款。
