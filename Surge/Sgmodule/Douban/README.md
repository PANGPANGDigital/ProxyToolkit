# 豆瓣 App Ads

为豆瓣 App 去广告的 Surge 模块（适用于官方 App Store 版本）。

本模块完全自包含，采用 Surge 原生 `[Rule]`、`[URL Rewrite]`、`[Map Local]` 和 `[MITM]` 规则，不依赖任何外部 JavaScript 脚本或第三方 CDN 链接，即使上游仓库删库也不影响正常使用。

---

## 功能特性

- **开屏与通用广告接口拦截**：通过 `Map Local` 将 `/v*/app_ads/` 和 `/b*/common_ads` 本地伪造返回空 JSON (`{}`)，避免客户端报网络错误或反复重试。
- **第三方广告联盟兜底拦截**：全面阻断当自有广告为空时调用的第三方广告 SDK：
  - **穿山甲广告联盟 (字节跳动)**：阻断 `pangolin-sdk-toutiao.com`、`pangle.io` 及其风控组件 `mssdk.volces.com`。
  - **优量汇广告联盟 (腾讯广点通)**：阻断 `gdt.qq.com`、`l.qq.com`。
  - **京东开屏广告物料**：精准拦截 `storage.360buyimg.com` 广告视频与弹窗物料（不影响京东正常购物浏览）。
- **设备指纹、风控与遥测日志阻断**：
  - **友盟（Umeng）**：全面切断主备日志域名 `umeng.com` 与 `umengcloud.com`（`cnlogs.umengcloud.com`）。
  - **阿里（UserTrack）**：阻断 `ut.taobao.com`（`h-adashx4bc.ut.taobao.com`）移动行为事件与埋点收集。
  - **羽毛（Puata）**：阻断 `puata.info`（`yumao.puata.info`）设备指纹采集与广告风控监测。
- **数据埋点与追踪阻断**：在分流（Rule）与重写层全面拦截豆瓣专属统计域名 `erebor.douban.com` 与 `ad.doubanio.com`。
- **静态广告素材阻断**：拦截图片 CDN 目录中的静态广告（`dale_ad`）与电影横幅（`movie/banner`）。

---

## 安装与订阅

### Surge

在 Surge 的“模块 (Modules)”标签页中，点击“安装”并选择“从 URL 安装”，输入以下订阅地址：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/Douban/Douban.sgmodule
```

安装后开启该模块即可。

---

## 文件结构

```text
Douban/
├── README.md
└── Douban.sgmodule    # Surge 模块配置文件（无外部依赖）
```

---

## 使用说明与注意事项

1. **HTTPS 解密 (MITM)**：使用前请确保 Surge 已开启 MITM，并且系统已安装并完全信任 Surge 生成的 CA 根证书。模块会自动将 `api.douban.com` 与 `*.360buyimg.com` 追加到 MITM 主机名列表中。
2. **清除开屏广告缓存**：豆瓣 App 本地会缓存开屏广告素材。首次安装启用模块后，请强制退出豆瓣后台并重新打开；若仍有开屏广告，可进入豆瓣「设置」->「清理缓存」，冷启动 1~2 次即可生效。
3. **关于官方 App 的证书绑定 (SSL Pinning)**：由于官方 App 对核心域名 `frodo.douban.com` 启用了严格的 SSL Pinning，因此本模块仅拦截素材与非 Pinning 接口，切勿随意将 `frodo.douban.com` 加入 MITM，以免导致官方客户端无法联网。

---

## 致谢

- [fmz200/wool_scripts](https://github.com/fmz200/wool_scripts) — 原始豆瓣去广告规则
