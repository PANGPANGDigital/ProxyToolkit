小宇宙 FM Surge 去广告模块

从 URL 安装：
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/XiaoYuZhou.Ads.Unblock/XiaoYuZhouAds.sgmodule

在 Surge 中选择“从 URL 安装模块”，粘贴上面的地址并启用模块。模块会从 GitHub Raw 自动下载配套脚本，无需手动安装 JS：
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/XiaoYuZhou.Ads.Unblock/XiaoYuZhouAds.js

使用前请在 Surge 中启用 MITM，并安装、信任 Surge 证书。

模块会让 4 个广告相关 API 返回空的 HTTP 200，并从 discovery-feed/list 的 data 数组中过滤 type 为 DISCOVERY_BANNER 的项目。信息流响应最大处理体积为 1 MiB；超过时 Surge 会跳过脚本处理。
