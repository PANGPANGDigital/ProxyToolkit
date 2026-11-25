# APNs

适用于 **Surge**（iOS / macOS）的 Apple Push Notification service (APNs) 精准分流规则集。

## 规则统计

| 类型 | 数量（条） | 说明 |
| --- | --- | --- |
| `DOMAIN-SUFFIX` | 4 | `push.apple.com`、`push.apple.com.cn` 及其调度 CNAME 域名 |
| `IP-CIDR` | 5 | APNs 专有 IPv4 网段（均带 `no-resolve`） |
| `IP-CIDR6` | 4 | APNs 专有 IPv6 网段（均带 `no-resolve`） |
| `AND` | 1 | `17.0.0.0/8` + `DEST-PORT,5223` 兜底 |
| **TOTAL** | **14** | 精准匹配推送，不误伤 App Store / Apple 服务直连 |

## 使用方法

### 1. 规则链接

```ini
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Rule/APNs/APNs.list
```

### 2. 配置示例

#### `[General]`（仅 Surge iOS 需开启，Surge Mac 开增强模式即可）

```ini
include-all-networks = true
include-apns = true
```

#### `[Proxy Group]`

```ini
APNs = fallback, 国外流量, DIRECT, icon-url=https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/icon/images/APNs_official_squircle_144.png
```

#### `[Rule]`（务必放在 `Apple_All.list` 等苹果规则之前）

```ini
RULE-SET,https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Rule/APNs/APNs.list,APNs,update-interval=86400
```

## 与参考源（`QuixoticHeart/rule-set`）的差异

* **新增 `push.apple.com.cn`**：补全大陆推送专线域名（如 `*-courier2-direct.push.apple.com.cn`），避免漏进常规 Apple 规则走直连。
* **收窄 `akadns.net` 匹配范围**：用 `push-apple.com.akadns.net` 与 `courier-push-apple.com.akadns.net` 替换宽泛的 `akadns.net`，避免误伤其他服务及 CDN。
* **移除非推送条目**：剔除 `identity.apple.com` 与 `apple.com.edgekey.net`，防止影响 Apple ID 登录与 App Store 下载更新直连。
* **新增 `AND` 端口兜底**：补充 `17.0.0.0/8` 下 `5223` 端口的复合匹配规则，同时不干扰 `443` 端口的常规 Apple 服务。
