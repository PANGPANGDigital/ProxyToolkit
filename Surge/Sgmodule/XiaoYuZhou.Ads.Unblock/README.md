# 小宇宙 FM 去广告

为小宇宙 FM 去广告的 Surge 模块。

基于 [ddgksf2013/Rewrite](https://github.com/ddgksf2013/Rewrite) 的 `XiaoYuZhouAds.conf` 转换，拦截广告相关接口，并移除首页信息流横幅。

---

## 功能

- 搜索推广：拦截 `/search/get-express`
- 搜索填词：拦截 `/search/get-preset`
- 搜索建议：拦截 `/category/list-daily-suggestion`
- 开屏广告：拦截 `/flash-screen/list`
- 首页信息流：从 `discovery-feed/list` 的 `data` 数组中移除 `type` 为 `DISCOVERY_BANNER` 的项目

## 安装

### Surge

在 Surge 的“模块”标签页中，点击“安装”并选择“从 URL 安装”，输入以下地址：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/XiaoYuZhou.Ads.Unblock/XiaoYuZhouAds.sgmodule
```

模块会自动从 GitHub Raw 加载配套脚本，无需单独安装 JS。使用前请启用 HTTPS 解密（MITM），并安装、信任 Surge 证书。模块会将 `api.xiaoyuzhoufm.com` 追加到 MITM 主机名列表。

## 文件结构

```text
XiaoYuZhou.Ads.Unblock/
├── README.md
├── XiaoYuZhouAds.sgmodule  # Surge 模块配置
└── XiaoYuZhouAds.js        # API 拦截与信息流过滤脚本
```

## 致谢

- [ddgksf2013/Rewrite](https://github.com/ddgksf2013/Rewrite) — 原始小宇宙去广告规则

## 说明

首页信息流脚本最多处理 1 MiB 的响应；超过该大小时，Surge 会跳过脚本处理并透传响应。

转载或引用原始规则时，请注明上游作者及来源。
