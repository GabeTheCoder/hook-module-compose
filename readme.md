
# Hook Module Compose

## Installation

I said this was a WIP. You're a rebel. I like it. Run `npm install --save hook-module-compose` and add this line to your `package.json` scripts.

```
"scaffold": "npm explore hook-module-compose -- npm run scaffold"
```

## Usage

Pretty much this only works if your app is structured with an src/components directory.

```
npm run scaffold
```

It's also cool to setup a keyboard shortcut in VS Code to automatically add components to your React app.

```
{
  "key": "ctrl+a",
  "command": "workbench.action.terminal.sendSequence",
  "args": {
    "text": "npm run scaffold\u000D"
  }
}
```
