# Better Novius (Chrome Extension)

This extension injects custom JavaScript and CSS into **Everwin SX** to improve the timesheet experience.

---

## Installation

1. **Build/prepare your extension files**

    - Make sure your extension folder contains:
        - `manifest.json`
        - Your JS/CSS files
        - Any assets you want to use

2. **Open Chrome Extensions page**

    - In Chrome, go to:  
      [chrome://extensions/](chrome://extensions/)

3. **Enable Developer Mode**

    - Toggle the switch in the top-right corner: **Developer mode**

4. **Load unpacked extension**

    - Click the **Load unpacked** button
    - Select the folder where your extension files are located (the root with `manifest.json`)

5. **Verify**

    - Your extension should now appear in the extensions list
    - If there are errors, click “Errors” under your extension to see what needs fixing

## Configuration

-   In the option page of the extension set your user email

---

## Updating your extension

When you make changes (e.g. edit JS/CSS in VS Code):

1. Go back to [chrome://extensions/](chrome://extensions/)
2. Click the **Reload** button 🔄 on your extension card
3. Refresh the target page (Everwin SX) to see changes
