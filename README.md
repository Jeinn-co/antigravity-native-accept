# Antigravity Auto Accept (Native · No CDP)

<p align="center">
  <img src="icon.png" width="96" alt="Antigravity Native Accept icon" />
</p>

Auto-accept pending **Google Antigravity** edits in **VS Code** using native editor commands — **no CDP** (`--remote-debugging-port` not required), **zero dependencies**, and **65 lines of auditable MIT JS**.

| | Antigravity Native Accept | Typical CDP Auto-Accept Extensions |
| --- | --- | --- |
| **Remote debugging flag** | **Not needed** (works out of the box) | Requires `--remote-debugging-port` on launch |
| **Scope & safety** | Calls 3 native diff-accept commands only | Injects DevTools scripts & clicks UI elements |
| **Dependencies** | **0 npm packages** ([`extension.js`](extension.js) = 65 lines) | Bundled WebSocket / DOM automation scripts |

- **Toggle**: Click `Auto-Accept ON` / `OFF` in the status bar, or press `Cmd+Shift+A` (macOS) / `Ctrl+Shift+A` (Windows / Linux).
- **How it works**: Runs `antigravity.acceptAllChanges`, `antigravity.inlineDiff.acceptAll`, and `antigravity.sideBySide.acceptAll` every 1s when enabled (file diffs only — does not auto-run terminal commands).
- **Requires**: Official [`google.google-antigravity`](https://marketplace.visualstudio.com/items?itemName=google.google-antigravity) extension in VS Code.
- **Install**: Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jeinn-co.antigravity-native-accept), or download `.vsix` from [Releases](https://github.com/Jeinn-co/antigravity-native-accept/releases) and run `code --install-extension antigravity-native-accept-<version>.vsix`.

---

## 繁體中文說明

透過 Antigravity 原生 VS Code 指令自動接受待處理的檔案編輯，**不需開啟 CDP**（免加 `--remote-debugging-port`）、**零外部相依**、整支核心 [extension.js](extension.js) 僅 65 行 MIT 開源程式碼。

- **開關方式**：點右下角狀態列 `Auto-Accept ON` / `OFF`，或按 `Cmd+Shift+A`（macOS）／`Ctrl+Shift+A`（Windows / Linux）。
- **運作方式**：啟用時每秒呼叫 `antigravity.acceptAllChanges`、`antigravity.inlineDiff.acceptAll`、`antigravity.sideBySide.acceptAll`（只接受檔案編輯 diff，不自動執行終端機指令）。
- **前置需求**：VS Code 需已安裝官方 `google.google-antigravity` 擴充套件。
- **安裝方式**：從 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jeinn-co.antigravity-native-accept) 安裝，或至 [Releases](https://github.com/Jeinn-co/antigravity-native-accept/releases) 下載 `.vsix` 執行 `code --install-extension antigravity-native-accept-<version>.vsix`。

---

MIT © [Zevi Liao](LICENSE) · [Jeinn Co](https://www.jeinn.co)
