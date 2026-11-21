const vscode = require("vscode");

const COMMANDS = [
  "antigravity.acceptAllChanges",
  "antigravity.inlineDiff.acceptAll",
  "antigravity.sideBySide.acceptAll",
];

function activate(context) {
  let enabled = context.globalState.get("enabled", true);
  let busy = false;
  let timer = null;

  const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  item.command = "antigravityNativeAccept.toggle";

  const render = () => {
    item.text = enabled ? "$(check-all) Auto-Accept ON" : "$(circle-slash) Auto-Accept OFF";
    item.tooltip = "Toggle Antigravity Native Accept (Cmd+Shift+A / Ctrl+Shift+A)";
    item.backgroundColor = enabled ? new vscode.ThemeColor("statusBarItem.warningBackground") : undefined;
    item.show();
  };

  const tick = async () => {
    if (!enabled || busy) return;
    busy = true;
    try {
      for (const cmd of COMMANDS) {
        try {
          await vscode.commands.executeCommand(cmd);
        } catch {}
      }
    } finally {
      busy = false;
    }
  };

  const syncTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (enabled) {
      timer = setInterval(tick, 1000);
    }
  };

  context.subscriptions.push(
    item,
    vscode.commands.registerCommand("antigravityNativeAccept.toggle", async () => {
      enabled = !enabled;
      await context.globalState.update("enabled", enabled);
      render();
      syncTimer();
    }),
    { dispose: () => timer && clearInterval(timer) }
  );

  render();
  syncTimer();
}

function deactivate() {}

module.exports = { activate, deactivate };
