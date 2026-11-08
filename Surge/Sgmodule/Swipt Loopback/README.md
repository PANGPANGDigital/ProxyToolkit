# Swipt 环回 VPN（Surge）

为 Swipt 提供连接本机 Apple 开发者服务所需的环回 VPN。配置依据 Swipt 的 LocalDevVPN 示例地址，以及 Surge 官方的 IP Rewrite 环回示例。

## 安装

在 Surge 的「模块」中添加：

```text
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Sgmodule/Swipt%20Loopback/Swipt%20Loopback.sgmodule
```

启用模块，并确保 Surge 使用增强模式（Enhanced Mode）或网关模式（Gateway Mode）。同一时间只能启用一个 VPN；使用本模块时请先关闭 LocalDevVPN、sing-box 等其他 VPN。

## 配置说明

- 将 `10.7.0.1/32` 加入 Surge VIF 路由，避免该地址因本地或排除路由而绕过 Surge。
- 对进入 Surge VIF、目标为 `10.7.0.1` 的数据包执行 `reflect`，将数据包环回到发送端。
- 关闭 IPv6 VIF。Surge 官方开发者服务示例采用此设置；如果你的其他配置依赖 IPv6 VIF，启用模块期间会受影响。
- `%INSERT%` 会保留已有的 `tun-included-routes` 条目。

此功能要求支持 IP Rewrite 的 Surge 版本：iOS 5.23.0+ 或 macOS 6.10.0+。Swipt 初始配对仍需按 App 内指引完成；本模块只处理环回 VPN。

## 参考

- [Swipt 初始设置](https://swipt.io/zh-Hans/docs/setup/)
- [Swipt LocalDevVPN 示例配置](https://swipt.io/setup/LocalDevVPN.json)
- [Surge IP Rewrite](https://manual.nssurge.com/features/ip-rewrite.html)
