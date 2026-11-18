# LoudPipe

**500 个音频文件响度忽大忽小，文档转有声书还要在五个工具之间来回倒腾？LoudPipe 把响度归一、语音合成、章节写入和质检报告收进同一条本地管线——拖进去，一次跑完。**

**Tired of VO batches that jump in loudness and an audiobook workflow spread across five tools? LoudPipe folds normalization, speech synthesis, chapters and QA into one local-first pipeline — drop files in, ship in one run.**

> 面向 Windows 的批量音频处理与文档转有声书工具 · 本地优先 · 无账号 · 无遥测
> Batch audio processing and document-to-audiobook toolchain for Windows · local-first · no account · no telemetry

[![获取应用，来自微软商店](assets/img/store-badge-zh.svg)](https://apps.microsoft.com/store/detail/9PN6CSWK4JPZ?cid=DevShareMCLPCS) [![Get it from Microsoft Store](assets/img/store-badge-en.svg)](https://apps.microsoft.com/store/detail/9PN6CSWK4JPZ?cid=DevShareMCLPCS)
[![Project site](https://img.shields.io/badge/%E9%A1%B9%E7%9B%AE%E4%B8%BB%E9%A1%B5-GitHub%20Pages-2ea44f?style=for-the-badge)](https://lijiannan1241.github.io/AudioForge/)
[![English](https://img.shields.io/badge/English-Homepage-2ea44f?style=for-the-badge)](https://lijiannan1241.github.io/AudioForge/en/)
[![Blog](https://img.shields.io/badge/%E5%8D%9A%E5%AE%A2-6%20%E7%AF%87%E5%AE%9E%E6%88%98%E6%96%87%E7%AB%A0-8250df?style=for-the-badge)](https://lijiannan1241.github.io/AudioForge/blog/)

---

## 它解决的，正是音频交付里最烦的几件事 / Pain points → fixes

| 你遇到的痛点 Pain | LoudPipe 的做法 Fix |
|---|---|
| 游戏 VO / 播客每集响度不一，平台抽检被打回 | 批量对齐到 **-23 / -19 / -16 LUFS**，4 倍过采样真峰值限制，实测偏差 **≤0.1 LU** |
| 文档转有声书要拆页、OCR、分章、配音、封装，五步五工具 | **8 种输入**（DOCX / PDF / EPUB / SRT / MOBI 等），混合 PDF 逐页判断，扫描件**离线 OCR**，直接输出带章节 M4B |
| 选配音靠猜，A/B 时谁响谁占便宜 | **318 种可试听声音**、70+ 语言；响度对齐后在同一位置切换，比音色不比音量 |
| 交付前只能靠耳朵听，出了问题说不清 | 每批生成 **CSV / JSON / HTML 报告**，含波形、STFT 频谱与六段分带能量 |
| 500 个文件跑批，一个坏了全停、重跑还得从头来 | 失败项隔离、断点续传，重跑只补失败文件；**JSON 预设 + CLI** 可进 CI |
| 格式、采样率、章节标记分散在不同软件里 | **7 种容器**（WAV / MP3 / FLAC / M4A / AAC / OGG / Opus）；WAV / MP3 / FLAC / M4A 也能写章节 |
| 怕音频和文档被上传到云端 | **除语音合成外全部本机完成**；无账号、无遥测、无崩溃上报，文件名与路径不上传 |

## 亮点速览 / Why LoudPipe

- **一次跑完**：归一化 → 降噪去齿音 → 格式转换 → 章节 → 报告，一条管线串起来。
- **数字可查**：≤0.1 LU 响度偏差、318 种声音、70+ 语言、7 种输出容器。
- **本地优先**：音频解码、响度分析、频谱、OCR、报告都在本机；默认语音合成走 Edge 朗读，也可填 Azure / OpenAI / ElevenLabs 密钥。
- **工程化就绪**：JSON 预设、命令行、失败隔离与续传，可直接接进 Wwise / FMOD 管线与 CI。
- **买断制**：Microsoft Store 一次性购买，**14 天试用**（试用期单批最多 20 个文件），无需信用卡、无需账号。

## 谁适合用 / Who it's for

- 🎮 **游戏音频 / 独立开发者**：800 条 VO 一次对齐，导出的 WAV / MP3 直接进 Wwise、FMOD。
- 🎙️ **播客与有声书制作人**：从扫描书到带章节 M4B，不用再拼接四个软件。
- 🔊 **音频后期与 QA**：每批留下一份可机器读取的质检报告，问题能定位、能复现。
- 🧪 **工具链工程师**：CLI + 预设让批处理可进 CI，失败可重试、结果可比对。

## 看它怎么跑 / See it in action

- [项目主页（中文，含 5 段真实操作录屏与截图）](https://lijiannan1241.github.io/AudioForge/)
- [English homepage](https://lijiannan1241.github.io/AudioForge/en/)
- [博客：游戏 VO 响度、扫描书转有声书、语音选择、播客后期、质检数字、CI 批处理](https://lijiannan1241.github.io/AudioForge/blog/)
- [English blog](https://lijiannan1241.github.io/AudioForge/blog/en/)
- [隐私政策](https://lijiannan1241.github.io/AudioForge/privacy.html)

## 获取 / Get it

[![获取应用，来自微软商店](assets/img/store-badge-zh.svg)](https://apps.microsoft.com/store/detail/9PN6CSWK4JPZ?cid=DevShareMCLPCS) [![Get it from Microsoft Store](assets/img/store-badge-en.svg)](https://apps.microsoft.com/store/detail/9PN6CSWK4JPZ?cid=DevShareMCLPCS)

或者点击文字链接：[从 Microsoft Store 获取 LoudPipe](https://apps.microsoft.com/store/detail/9PN6CSWK4JPZ?cid=DevShareMCLPCS) — Windows 10 19041+ (x64)，内置 ffmpeg，无需单独安装。

其他构建形态（MSIX / EXE / ONEDIR / CLI）见 [Releases](https://github.com/lijiannan1241/AudioForge/releases)。

## 关于这个仓库 / About this repository

这里是 **GitHub Pages 站点仓库**：产品文档、演示视频、截图与推广博客。应用源码与站点生成脚本在父工程，生成脚本为 `../store/build_site.py`。

This repository hosts the **GitHub Pages site**: docs, demo videos, screenshots and blog posts. The app source and site generator live in the parent project (`../store/build_site.py`).

本地预览（纯静态，无构建步骤）：

```bash
cd AudioForge
python -m http.server 8000
# http://localhost:8000/
```

重新生成站点：回到父工程根目录运行 `python store/build_site.py`；生成脚本会覆盖页面、`assets/` 与 `privacy.html`，不会动 `.github/`、`LICENSE` 和搜索验证文件。

`.github/workflows/static.yml` 在每次推送到 `main` 时部署整站到 GitHub Pages（仓库设置里 Pages source 需为 **GitHub Actions**）。站点内部全部使用相对路径，换自定义域名无需改链接。

**Keywords / 关键词**：audio loudness normalization, LUFS, true peak, batch audio processing, document to audiobook, text to speech, TTS, audiobook generator, OCR, chapter markers, audio QA, waveform, spectrogram, FFmpeg, Wwise, FMOD, CLI audio tool, Windows audio software, local-first, Microsoft Store, 响度归一, 批量音频处理, 文档转有声书, 有声书制作, 音频质检

## 许可 / License

见 [LICENSE](LICENSE)。See [LICENSE](LICENSE).

联系方式 / Contact: cdljn2022@gmail.com
