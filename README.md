# Antigravity Native Accept

Lightweight VS Code extension by [Jeinn Co](https://www.jeinn.co) that automatically accepts pending Antigravity edits using native VS Code commands—without CDP or `--remote-debugging-port`.

## How It Works

While enabled, polls Antigravity's native accept commands every second:
- `antigravity.acceptAllChanges`
- `antigravity.inlineDiff.acceptAll`
- `antigravity.sideBySide.acceptAll`

## Usage

- Click `Auto-Accept ON` / `Auto-Accept OFF` in the bottom-right status bar, or
- Press `Cmd+Shift+A` (macOS) / `Ctrl+Shift+A` (Windows/Linux) to toggle.

## License

MIT © [Jeinn Co](LICENSE)
