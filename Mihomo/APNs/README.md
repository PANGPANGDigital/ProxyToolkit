# APNs

适用于 **Mihomo (Clash.Meta) / OpenClash** 的 Apple Push Notification service (APNs) 分流规则集，提供 `.mrs` 二进制格式及对应明文源文件。

## 文件说明

| 文件 | 类型 (`behavior`) | 说明 |
| --- | --- | --- |
| `apns_domain.mrs` | `domain` | 匹配 `+.push.apple.com`、`+.push.apple.com.cn` 及其调度 CNAME 域名（`+.push-apple.com.akadns.net`、`+.courier-push-apple.com.akadns.net`），避免误伤通用 `akadns.net` 与其他 Apple 服务 |
| `apns_ip.mrs` | `ipcidr` | 匹配 Apple APNs 专有 IPv4 / IPv6 网段（含 `17.57.144.0/22`、`17.188.128.0/18`、`17.188.20.0/23`、`17.249.0.0/16`、`17.252.0.0/16` 及对应 IPv6 段） |
| `apns_domain.txt` / `apns_ip.txt` | 明文源文件 | 用于查看规则明细与重新编译 `.mrs` |

## 使用方法

### 1. 添加 `rule-providers`

```yaml
rule-anchor:
  ip: &ip {type: http, interval: 86400, behavior: ipcidr, format: mrs}
  domain: &domain {type: http, interval: 86400, behavior: domain, format: mrs}

rule-providers:
  apns_domain:
    <<: *domain
    url: "https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Mihomo/APNs/apns_domain.mrs"
    path: ./ruleset/apns_domain.mrs

  apns_ip:
    <<: *ip
    url: "https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Mihomo/APNs/apns_ip.mrs"
    path: ./ruleset/apns_ip.mrs
```

### 2. 添加 `proxy-groups`（示例）

> 建议优先将支持 TCP `5223` 端口且长连接稳定的节点放在前面；使用 `fallback` 组时需配置 `url` 与 `interval`。

```yaml
proxy-groups:
  - name: APNs
    type: fallback
    icon: https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/icon/images/APNs_official_squircle_144.png
    proxies: [国外流量, DIRECT]
    url: http://www.gstatic.cn/generate_204
    interval: 300
```

### 3. 添加 `rules`（务必放在 `apple` 规则之前）

```yaml
rules:
  - RULE-SET,private_domain,DIRECT
  - RULE-SET,private_ip,DIRECT,no-resolve
  - RULE-SET,apns_domain,APNs
  - RULE-SET,apns_ip,APNs,no-resolve
  # ... 其余规则
```

## 本地重编译（维护用）

修改 `.txt` 明文文件后，可使用 Mihomo 内核重新生成 `.mrs`：

```bash
mihomo convert-ruleset domain text apns_domain.txt apns_domain.mrs
mihomo convert-ruleset ipcidr text apns_ip.txt apns_ip.mrs
```
