# iPad 蜂窝网络直连

适用于 Surge 5 的轻量模块。它添加一条规则：当 Surge 当前网络为蜂窝网络时，将匹配到这条规则的请求设为直连（DIRECT）。

## 安装与启用

在目标 iPad 上打开 [Surge 安装链接](surge:///install-module?url=https%3A%2F%2Fraw.githubusercontent.com%2FPANGPANGDigital%2FProxyToolkit%2Fmain%2FSurge%2FSgmodule%2FiPad-Cellular-Direct%2FiPad-Cellular-Direct.sgmodule)，或在 Surge 的「模块」页面通过 URL 添加模块：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/iPad-Cellular-Direct/iPad-Cellular-Direct.sgmodule
```

导入后，只在要使用蜂窝网络直连的这台 iPad 的 Surge「模块」页面启用它。

Surge 官方资料说明：已安装模块可在 iOS 设备间通过 iCloud 同步，但模块的启用状态不会同步到其他设备。因此，同步后模块可能出现在其他设备上；请只在目标 iPad 上启用。

## 行为说明

- `SUBNET,TYPE:CELLULAR,DIRECT` 按 Surge 当前网络环境匹配蜂窝网络，并为匹配的请求选择 `DIRECT`。
- 连接 Wi-Fi 时，这条蜂窝网络规则不匹配；相关请求继续由当前配置中的其他规则处理。
- 模块只包含这一条规则，不修改域名、DNS 或其他代理策略。

## 参考

- [Surge 规则手册：Protocol and Network Rules](https://manual.nssurge.com/rules/protocol-and-network.html)
- [Surge 模块手册](https://manual.nssurge.com/profile/module.html)
- [Surge iOS 更新日志](https://kb.nssurge.com/surge-knowledge-base/release-notes/surge-ios)
