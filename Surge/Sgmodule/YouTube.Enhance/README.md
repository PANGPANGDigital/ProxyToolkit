# YouTube Enhance

为 **YouTube** 和 **YouTube Music** 提供后台播放、画中画（PiP）、入口控制和字幕翻译选项的 Surge 模块。不使用 Maasea 的远程 Worker。

## 功能

- 后台播放与画中画
- 按参数隐藏上传、选段和 Shorts 入口
- 为视频字幕添加指定语言的翻译轨道
- 可选输出调试日志

## 模块参数

| 参数 | 默认值 | 作用 |
| --- | --- | --- |
| 屏蔽上传按钮 | `true` | 隐藏上传入口 |
| 屏蔽选段按钮 | `true` | 隐藏选段／沉浸式入口 |
| 屏蔽 Shorts 按钮 | `false` | 默认保留 Shorts 入口 |
| 字幕翻译语言 | `off` | 使用 Google Translate 语言代码；`zh-Hans` 为简体中文，`zh-Hant` 为繁体中文；`off` 关闭 |
| 启用调试模式 | `false` | 输出更多脚本日志 |

## 安装

在 Surge 的 **模块** 页面安装：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/YouTube.Enhance/YouTube.Enhance.sgmodule
```

需要启用 HTTPS 解密（MITM）并信任 Surge 的 CA 证书。模块仅追加 `youtubei.googleapis.com`。

## 本地资源与上游依赖

- 模块从本仓库加载 `youtube.js`，不从 Maasea 仓库拉取运行时代码。
- `youtube.js` 是随仓库保存的响应脚本副本，所需的 protobuf-ts v1.0.8 运行时代码已打包在文件中。
- 本模块不加载 `youtube.request.js`，也不请求 `init-stream.maasea.workers.dev`。字幕翻译轨道使用 YouTube 返回的字幕地址和 `tlang` 参数。
- 因此 Maasea 上游仓库删除不会影响本模块运行；只要本仓库及其 raw 文件仍可访问即可。

## 文件

```text
YouTube.Enhance/
├── README.md
├── YouTube.Enhance.sgmodule
├── youtube.js
├── THIRD_PARTY_NOTICES.md
└── LICENSES/
    ├── Maasea-Apache-2.0.txt
    └── protobuf-ts-Apache-2.0.txt
```

## 致谢与许可

- YouTube 响应脚本基于 [Maasea/sgmodule](https://github.com/Maasea/sgmodule) 的 `youtube.response.js`，Apache-2.0。
- 打包的 protobuf-ts 运行时来自 [timostamm/protobuf-ts](https://github.com/timostamm/protobuf-ts)，版本 v1.0.8，Apache-2.0。
- 对应许可证和来源说明已随本目录保存，见 `THIRD_PARTY_NOTICES.md`。
