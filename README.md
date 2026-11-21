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

Lightweight VS Code extension by Zevi Liao ([Jeinn Co](https://www.jeinn.co)) that automatically accepts pending Antigravity edits using native VS Code commands—without Chrome DevTools Protocol (CDP) or `--remote-debugging-port`.

## Why Native (No CDP)?

Most Antigravity auto-accept extensions require launching VS Code with `--remote-debugging-port` and injecting scripts over CDP. **Antigravity Native Accept** calls Antigravity's built-in VS Code commands directly inside the extension host:

| | Antigravity Native Accept | CDP-Based Extensions |
| --- | --- | --- |
| `--remote-debugging-port` | Not required | Required |
| Port / debugger exposure | None | Opens local debug port |
| Runtime dependencies | `0` (single 65-line `extension.js`) | WebSocket / CDP client |
| Toggle shortcut & status bar | Built-in (`Cmd+Shift+A` / `Ctrl+Shift+A`) | Varies |

## Features

- **Native Command Polling**: Triggers Antigravity's native accept commands every `1s` when enabled, with a concurrency guard so ticks never overlap.
- **One-Click Status Bar Toggle**: Displays `Auto-Accept ON` (highlighted) or `Auto-Accept OFF` in the bottom-right status bar.
- **Keyboard Shortcut**: Press `Cmd+Shift+A` (macOS) or `Ctrl+Shift+A` (Windows / Linux) anytime to pause or resume.
- **Persistent State**: Remembers your last ON/OFF state across VS Code reloads via `globalState` (defaults to ON).

## How It Works

While enabled, the extension executes these native Antigravity commands once per second (ignoring errors when no pending diff is active):

- `antigravity.acceptAllChanges`
- `antigravity.inlineDiff.acceptAll`
- `antigravity.sideBySide.acceptAll`

## Installation

### Option 1: Install from GitHub Release (`.vsix`)

1. Download the latest `.vsix` from [Releases](https://github.com/Jeinn-co/antigravity-native-accept/releases).
2. Install via CLI:

```bash
code --install-extension antigravity-native-accept-<version>.vsix
```

Or in VS Code: open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) → run **Extensions: Install from VSIX...** and select the downloaded file.

### Option 2: Build Locally

```bash
git clone https://github.com/Jeinn-co/antigravity-native-accept.git
cd antigravity-native-accept
npx @vscode/vsce package
code --install-extension antigravity-native-accept-<version>.vsix
```

## Notes & Scope

- Requires the official **Google Antigravity** extension (`google.google-antigravity`) in VS Code so the native `antigravity.*` accept commands exist.
- Only invokes Antigravity's diff/change accept commands; it does not auto-approve arbitrary external prompts outside those commands.

## Author & License

Created by **Zevi Liao** ([Jeinn Co](https://www.jeinn.co)) · MIT © [Zevi Liao](LICENSE)
