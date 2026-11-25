# iPad 蜂窝网络直连

适用于 Surge 5 的轻量模块。当 iPad 当前处于蜂窝网络时，将匹配到的流量设为直连（`DIRECT`），同时临时覆盖主配置 DNS 为境外加密 DNS（DoH）与系统原生 DNS，避免主配置中的国内 DNS 对境外流量造成解析污染。

## 安装与启用

在目标 iPad 上打开 [Surge 安装链接](surge:///install-module?url=https%3A%2F%2Fraw.githubusercontent.com%2FPANGPANGDigital%2FProxyToolkit%2Fmain%2FSurge%2FSgmodule%2FiPad-Cellular-Direct%2FiPad-Cellular-Direct.sgmodule)，或在 Surge 的「模块」页面通过 URL 添加模块：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/iPad-Cellular-Direct/iPad-Cellular-Direct.sgmodule
```

导入后，**仅在使用境外 / 漫游卡（如 CTM 澳门卡）的目标 iPad** 的 Surge「模块」页面启用它。

Surge 官方资料说明：已安装模块可在 iOS 设备间通过 iCloud 同步，但模块的启用状态不会同步到其他设备。因此，同步后模块可能出现在其他设备上；**请勿在插有内地运营商 SIM 卡的设备上启用本模块**，否则蜂窝直连查询 `1.1.1.1` / `8.8.8.8` / 海外 DoH 会超时或遭到污染。

## 行为说明

- `[Rule]`：`SUBNET,TYPE:CELLULAR,DIRECT` 在当前为蜂窝网络时将所有命中流量设为 `DIRECT`。
- `[SSID Setting]`：`TYPE:CELLULAR dns-server=system,1.1.1.1,8.8.8.8 encrypted-dns-server=https://cloudflare-dns.com/dns-query,https://dns.google/dns-query` 在蜂窝网络下临时替代主配置的 `dns-server` / `encrypted-dns-server`，防止国内明文 DNS 污染 Telegram、APNs 等海外域名。
- 连接 Wi-Fi 时，`TYPE:CELLULAR` 条件不匹配，所有规则与 DNS 自动恢复为主配置设置。

## 参考

- [Surge 规则手册：Protocol and Network Rules](https://manual.nssurge.com/rules/protocol-and-network.html)
- [Surge 模块手册](https://manual.nssurge.com/profile/module.html)
- [Surge 子网设置手册：Subnet Settings](https://manual.nssurge.com/others/subnet.html)
- [Surge iOS 更新日志](https://kb.nssurge.com/surge-knowledge-base/release-notes/surge-ios)
