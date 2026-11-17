# LoudPipe

**批量音频处理 · 文档转有声书 · 质检报告 — 为 Windows 而做的本地优先工具链。**

**Batch audio processing · document-to-audiobook · quality reports — a local-first toolchain for Windows.**

[🌐 项目网站 Project site](https://lijiannan1241.github.io/AudioForge/) · [📖 博客 Blog](https://lijiannan1241.github.io/AudioForge/blog/) · [💻 源码 Source](https://github.com/lijiannan1241/AudioForge) · [📄 隐私政策 Privacy](https://lijiannan1241.github.io/AudioForge/privacy.html)

---

## 这是什么 / What is it

LoudPipe 把音频交付里重复的部分收进一条管线：响度归一化、真峰值限制、降噪去齿音、格式转换、章节写入、文档转语音，以及随批产出的质检报告。除语音合成外全部在本机完成；没有账号、没有遥测、没有崩溃上报。

LoudPipe folds the repetitive parts of audio delivery into one pipeline: loudness normalization, true-peak limiting, denoise and de-ess, format conversion, chapter writing, document-to-speech, and a report for every batch. Everything except speech synthesis runs locally — no account, no telemetry, no crash reporting.

这个仓库是 **GitHub Pages 站点**：产品文档、演示视频、截图与推广博客。应用本身的构建脚本与源码在仓库外的主工程中；站点的生成脚本是 `../store/build_site.py`（主工程内）。

This repository is the **GitHub Pages site**: product docs, demo videos, screenshots and promotional blog posts. The app source and build scripts live in the parent project; the site generator is `../store/build_site.py` in that project.

## 网站内容 / Site contents

| 路径 Path | 内容 Content |
|---|---|
| `/` | 中文首页：功能、5 段演示视频、截图画廊、下载、FAQ、博客入口 |
| `/en/` | English homepage: features, 5 demos, gallery, downloads, FAQ, blog |
| `/blog/` | 中文博客，6 篇推广文章（完整正文，非摘要） |
| `/blog/en/` | English blog, 6 full-length articles |
| `/privacy.html` | 隐私政策（中英双语单页，可直接用于商店提交） |
| `/assets/videos/` | 5 段真实操作录屏（H.264 / yuv420p，浏览器可直接播放） |
| `/assets/img/screens/` | 中英界面截图 1366×768，点击可放大 |
| `/assets/css/`, `/assets/js/` | 零依赖样式与脚本（响应式、灯箱、移动导航） |
| `/sitemap.xml`, `/robots.txt` | 搜索引擎收录入口，覆盖全部 17 个内容页 |
| `/llms.txt` | GEO：面向生成式引擎的产品事实摘要与引用指引 |

**商店入口**：全部 17 个内容页的页头、页脚均带微软商店徽章（首页下载区另有一枚大徽章），统一指向 [LoudPipe 商店详情](https://apps.microsoft.com/detail/9pn6cswk4jpz?cid=DevShareMCLPCS&hl=zh-CN&gl=US)。徽章图形为本地 SVG，没有外部资源依赖。`google*.html` 是搜索站点验证文件，按要求保持原样。

**SEO / GEO**：每页有 canonical、hreflang（中/英/x-default）、Open Graph、Twitter Card 与 JSON-LD（WebSite / SoftwareApplication / FAQPage / BlogPosting / BreadcrumbList）；文章页带机器可读发布日期。GEO 部分提供 `llms.txt`、首页事实速览区与可引用的结构化事实。改文案后重新生成并校验 JSON-LD 合法性。

## 功能一览 / Capabilities

- **响度归一**：-23 / -19 / -16 LUFS，4 倍过采样真峰值限制，实测偏差 ≤0.1 LU
- **文档转语音**：DOCX / PDF / EPUB / SRT / MOBI 等 8 种输入，混合 PDF 逐页判断，扫描件离线 OCR
- **318 种声音**：70+ 语言试听，发音词典、多角色路由、断点续传
- **可视化质检**：CSV / JSON / HTML 报告，波形、STFT 频谱、六段分带能量
- **公平 A/B**：响度对齐后同位置切换语音
- **工程化**：JSON 预设、CLI、失败隔离与续传，可进 CI 与 Wwise / FMOD 管线
- **7 种输出容器**：WAV / MP3 / FLAC / M4A / AAC / OGG / Opus，章节标记不局限于 M4B

English summary: batch loudness alignment at -23 / -19 / -16 LUFS with ≤0.1 LU measured deviation; 8 document formats with offline OCR; 318 auditionable voices across 70+ languages; CSV / JSON / HTML reports with waveform and STFT; loudness-matched A/B; JSON presets, CLI, failure isolation and resume; 7 output containers.

## 博客 / Blog

| # | 中文 | English |
|---|---|---|
| 01 | 你的游戏语音为什么总被说"忽大忽小" | Why Your Game VO Always Sounds Off |
| 02 | 300 页扫描书，怎么变成能跳章的有声书 | From a 300-Page Scan to a Chaptered Audiobook |
| 03 | 318 个声音里怎么选一个 | Choosing One Voice Out of 318 |
| 04 | 把播客后期从 40 分钟压到 4 分钟 | Podcast Post-Production: 40 Minutes Down to 4 |
| 05 | 有声书交付前，我必查的 7 个数字 | Seven Numbers I Check Before Shipping |
| 06 | 把 500 个文件的批处理写进 CI | A 500-File Batch Inside CI |

每篇都有独立页面、目录、上一篇/下一篇导航与对应语言版本。Each article has its own page, table of contents, prev/next navigation and a matching translation.

## 本地预览 / Local preview

站点是纯静态文件，没有构建步骤：

```bash
cd AudioForge
python -m http.server 8000
# http://localhost:8000/
```

修改内容后从主工程重新生成：

```bash
cd ..                 # 回到主工程根目录
python store/build_site.py
```

生成脚本会覆盖本站的页面、`assets/` 与 `privacy.html`，但不会动 `.github/`、`LICENSE`、搜索引擎验证文件。

The site is plain static HTML with no build step. Regenerate it from the parent project with `python store/build_site.py`; the generator overwrites pages, `assets/` and `privacy.html`, leaving workflows, license and search-console verification files untouched.

## 部署 / Deployment

`.github/workflows/static.yml` 在每次推送到 `main` 时部署整个仓库到 GitHub Pages。仓库设置里的 Pages source 必须是 **GitHub Actions**。

原有示例 workflow `jekyll-gh-pages.yml` 已停用（改名为 `.disabled`）：它与 static 工作流争用同一个 `concurrency: pages` 部署槽，会导致相互取消。

Site URL: `https://lijiannan1241.github.io/AudioForge/`

> 站点内部全部使用相对路径，因此换成自定义域名时不需要改任何链接。
> All internal links are relative, so switching to a custom domain needs no URL rewrite.

## 目录约定 / Conventions

- 所有内部链接使用相对路径，页面可在任意路径前缀下工作
- 视频 `preload="none"`，首屏只加载一张首图；截图懒加载
- 无外部字体、脚本或 CDN；离线打开也能正常渲染
- 中英页面结构逐节对应，语言切换链接指向当前文章的对应版本
- 隐私政策与商店文案同源，修改 `../store/copy/privacy.html` 后需重新生成

## 许可 / License

见 [LICENSE](LICENSE)。See [LICENSE](LICENSE).

联系方式 / Contact: cdljn2022@gmail.com
