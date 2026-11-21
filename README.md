# Antigravity Native Accept

<p align="center">
  <img src="icon.png" width="96" alt="Antigravity Native Accept icon" />
</p>

Auto-accept pending Antigravity edits in VS Code using native commands — **no CDP** (`--remote-debugging-port` not required).

- **Toggle**: Click `Auto-Accept ON` / `OFF` in the status bar, or press `Cmd+Shift+A` (macOS) / `Ctrl+Shift+A` (Windows / Linux).
- **How it works**: Runs `antigravity.acceptAllChanges`, `antigravity.inlineDiff.acceptAll`, and `antigravity.sideBySide.acceptAll` every 1s when enabled.
- **Requires**: Official `google.google-antigravity` extension.
- **Install**: Download `.vsix` from [Releases](https://github.com/Jeinn-co/antigravity-native-accept/releases) and run `code --install-extension antigravity-native-accept-<version>.vsix`.

---

## 繁體中文說明

透過 Antigravity 原生 VS Code 指令自動接受待處理的編輯，**不需開啟 CDP**（免加 `--remote-debugging-port`）。

- **開關方式**：點右下角狀態列 `Auto-Accept ON` / `OFF`，或按 `Cmd+Shift+A`（macOS）／`Ctrl+Shift+A`（Windows / Linux）。
- **運作方式**：啟用時每秒執行 `antigravity.acceptAllChanges`、`antigravity.inlineDiff.acceptAll`、`antigravity.sideBySide.acceptAll`。
- **前置需求**：需已安裝官方 `google.google-antigravity` 擴充套件。
- **安裝方式**：至 [Releases](https://github.com/Jeinn-co/antigravity-native-accept/releases) 下載 `.vsix`，執行 `code --install-extension antigravity-native-accept-<version>.vsix`。

---

MIT © [Zevi Liao](LICENSE) · [Jeinn Co](https://www.jeinn.co)
