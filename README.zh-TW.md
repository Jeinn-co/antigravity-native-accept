# Antigravity Native Accept

[![Latest Release](https://img.shields.io/github/v/release/Jeinn-co/antigravity-native-accept?display_name=tag)](https://github.com/Jeinn-co/antigravity-native-accept/releases)
![VS Code](https://img.shields.io/badge/VS%20Code-%5E1.80.0-007ACC?logo=visualstudiocode&logoColor=white)
![Zero CDP](https://img.shields.io/badge/CDP-None%20(Native%20API)-2E7D32)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-111111)
![License MIT](https://img.shields.io/badge/License-MIT-white)

[English](./README.md) | [繁體中文](./README.zh-TW.md)

<p align="center">
  <img src="icon.png" width="128" alt="Antigravity Native Accept icon" />
</p>

由 Zevi Liao（[Jeinn Co](https://www.jeinn.co)）製作的輕量 VS Code 擴充套件：透過 Antigravity 原生 VS Code 指令自動接受待處理的程式碼變更，**不需開啟 Chrome DevTools Protocol (CDP)** 或 `--remote-debugging-port`。

## 為什麼選擇原生方案（無 CDP）？

市面上多數 Antigravity auto-accept 擴充套件必須替 VS Code 加上 `--remote-debugging-port`，並透過 CDP 注入腳本點擊按鈕。**Antigravity Native Accept** 直接在 VS Code extension host 內呼叫原生指令：

| 比較項目 | Antigravity Native Accept | 傳統 CDP 版擴充套件 |
| --- | --- | --- |
| `--remote-debugging-port` | 不需要 | 必須開啟 |
| 本機除錯埠暴露風險 | 無 | 會開啟本機 debug port |
| 執行期外部依賴 | `0`（僅單檔 65 行 `extension.js`） | WebSocket / CDP 套件 |
| 狀態列開關與快捷鍵 | 內建（`Cmd+Shift+A` / `Ctrl+Shift+A`） | 依各套件而異 |

## 功能特色

- **原生指令輪詢**：啟用時每 `1` 秒呼叫一次 Antigravity 原生 accept 指令，內建 `busy` 防重入保護不重疊執行。
- **右下角狀態列一鍵切換**：顯示 `Auto-Accept ON`（醒目底色）或 `Auto-Accept OFF`，點擊即可切換。
- **快捷鍵開關**：隨時按 `Cmd+Shift+A`（macOS）或 `Ctrl+Shift+A`（Windows / Linux）暫停或恢復。
- **記住開關狀態**：透過 VS Code `globalState` 保存狀態（初次安裝預設為 `ON`），重載視窗後維持設定。

## 運作原理

啟用狀態下，擴充套件每秒依序執行以下三個原生指令（目前沒有待接受變更時會靜默略過）：

- `antigravity.acceptAllChanges`
- `antigravity.inlineDiff.acceptAll`
- `antigravity.sideBySide.acceptAll`

## 安裝方式

### 方式一：從 GitHub Release 安裝（`.vsix`）

1. 前往 [Releases](https://github.com/Jeinn-co/antigravity-native-accept/releases) 下載最新 `.vsix`。
2. 執行 CLI 安裝：

```bash
code --install-extension antigravity-native-accept-0.1.0.vsix
```

或在 VS Code 按 `Cmd+Shift+P` / `Ctrl+Shift+P` → 執行 **Extensions: Install from VSIX...** 選取下載好的 `.vsix`。

### 方式二：本機自行打包

```bash
git clone https://github.com/Jeinn-co/antigravity-native-accept.git
cd antigravity-native-accept
npx @vscode/vsce package
code --install-extension antigravity-native-accept-0.1.0.vsix
```

## 注意事項與邊界

- 需已安裝官方 **Google Antigravity** 擴充套件（`google.google-antigravity`），原生 `antigravity.*` 指令才會存在。
- 僅觸發 Antigravity 的檔案變更／diff 接受指令，不會自動核准上述指令範圍以外的其他確認視窗。

## 作者與授權

作者：**Zevi Liao**（[Jeinn Co](https://www.jeinn.co)）· MIT © [Zevi Liao](LICENSE)
