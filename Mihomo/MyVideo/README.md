# MyVideo

适用于 **Mihomo (Clash.Meta) / OpenClash** 的台湾 **MyVideo**（台湾大哥大旗下 OTT 影音平台）分流规则集，基于 [Surge/Rule/MyVideo/MyVideo.list](https://github.com/PANGPANGDigital/ProxyToolkit/blob/main/Surge/Rule/MyVideo/MyVideo.list) 转换编译，提供 `.mrs` 二进制格式及对应明文源文件。

## 文件说明

| 文件 | 类型 (`behavior`) | 说明 |
| --- | --- | --- |
| `myvideo.mrs` | `domain` | 匹配 `+.myvideo.net.tw`（主站、播放及静态资源）、`+.taiwanmobile.com`（台湾大哥大账号认证及关联接口）及 `cdn.plyr.io`（Plyr 播放器静态资源 CDN） |
| `myvideo.txt` | 明文源文件 | 用于查看规则明细与重新编译 `.mrs` |

## 使用方法

### 1. 添加 `rule-providers`

```yaml
rule-anchor:
  domain: &domain {type: http, interval: 86400, behavior: domain, format: mrs}

rule-providers:
  myvideo:
    <<: *domain
    url: "https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Mihomo/MyVideo/myvideo.mrs"
    path: ./ruleset/myvideo.mrs
```

### 2. 添加 `proxy-groups`（示例）

> MyVideo 有严格的台湾地区版权限制，请将代理组指向可解锁台湾流媒体的台湾节点或策略组。

```yaml
proxy-groups:
  - name: TW-Media
    type: select
    icon: https://raw.githubusercontent.com/PANGPANGDigital/ProxyToolkit/main/Surge/icon/images/MyVideo.png
    proxies:
      - 台湾节点1
      - 台湾节点2
```

### 3. 添加 `rules`（务必放在 `MATCH` 或通用 `GEOIP` 规则之前）

```yaml
rules:
  - RULE-SET,myvideo,TW-Media
  # ... 其余规则
```

## 注意事项

* **节点解锁要求**：MyVideo 仅限台湾地区 IP 播放，需确保所选节点具备台湾原生/流媒体解锁能力。
* **关联域名说明**：规则包含 `+.taiwanmobile.com`，用于覆盖台湾大哥大账号登录与相关接口请求。
* **补充排查**：如后续遇到新 CDN 或第三方组件无法加载，可在 Mihomo 日志或面板请求连接中排查对应域名后补充至 `myvideo.txt` 并重新编译。

## 本地重编译（维护用）

修改 `myvideo.txt` 明文文件后，可使用 Mihomo 内核重新生成 `.mrs`：

```bash
mihomo convert-ruleset domain text myvideo.txt myvideo.mrs
```
