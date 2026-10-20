小宇宙 FM Surge 转换文件

文件：
- XiaoYuZhouAds.sgmodule：Surge 模块
- XiaoYuZhouAds.js：模块调用的配套脚本

使用方式：
1. 将两个文件放到 Surge 可读取的位置。
2. 模块里的 script-path 是相对路径 XiaoYuZhouAds.js。按 Surge 文档，相对脚本路径以配置文件目录为基准；若脚本放在其他位置，请改成该设备可访问的本地路径或 HTTPS 脚本 URL。
3. 启用模块，并在 Surge 中启用 MITM、安装并信任 Surge 证书。

脚本会让 4 个广告相关 API 返回空的 HTTP 200，并从 discovery-feed/list 的 data 数组中过滤 type 为 DISCOVERY_BANNER 的项目。信息流响应最大处理体积为 1 MiB，超过时 Surge 会跳过脚本处理。
