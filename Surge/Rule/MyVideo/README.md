# MyVideo

适用于 **Surge**（iOS / macOS）的台湾 **MyVideo**（台湾大哥大旗下 OTT 影音平台）分流规则集。

## 规则统计

| 类型 | 数量（条） | 说明 |
| --- | --- | --- |
| `DOMAIN-SUFFIX` | 2 | `myvideo.net.tw`（主站、播放及静态资源）与 `taiwanmobile.com`（账号登录及关联接口） |
| **TOTAL** | **2** | 精准匹配 MyVideo 影音流量 |

## 使用方法

### 1. 规则链接

```ini
https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Rule/MyVideo/MyVideo.list
```

### 2. 配置示例

#### `[Proxy Group]`

```ini
# 请将“台湾节点1, 台湾节点2”替换为配置中实际可用的台湾解锁节点或策略组
TW-Media = select, 台湾节点1, 台湾节点2, icon-url=https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/icon/images/MyVideo.png
```

#### `[Rule]`（务必放在 `FINAL` 或通用 `GEOIP` 规则之前）

```ini
RULE-SET,https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/Rule/MyVideo/MyVideo.list,TW-Media,update-interval=86400
```

## 注意事项

* **节点解锁要求**：MyVideo 有严格的台湾地区版权限制，需将策略组指向可解锁台湾流媒体的台湾节点。
* **关联域名说明**：规则包含 `taiwanmobile.com`，用于覆盖台湾大哥大账号认证与相关接口请求。
* **补充排查**：如后续遇到新 CDN 或第三方组件无法加载，可在 Surge 的「请求记录（Requests）」中查看实际请求的域名后按需补充。
