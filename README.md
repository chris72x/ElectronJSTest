# ElectronJSTest

A simple Electron.js application that displays files from the user's Desktop.

## Features

- Shows a button titled 'Show My Desktop Files'
- When clicked, displays the contents of the current user's Desktop folder
- Works cross-platform (Windows, macOS, Linux)

## Development Setup

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm start` to launch the application in development mode

## Creating a Standalone Application

To create a standalone executable:

1. Make sure you have installed all dependencies (`npm install`)
2. Build the application for your platform:
   - Windows (installer): `npm run build:win`
   - Windows (portable): `npm run portable`
   - macOS: `npm run build:mac`
   - Linux: `npm run build:linux`
3. Find your distributable files in the `dist` folder:
   - Windows: `.exe` installer and `DesktopFilesViewer-Portable.exe` (fully portable)
   - macOS: `.dmg` file
   - Linux: `.AppImage` file

## Portable Version (Windows) - TROUBLESHOOTING

If you're having trouble creating a portable version, try these exact steps:

1. Open a command prompt or PowerShell in your project directory
2. Make sure you've installed all dependencies:
   ```
   npm install
   ```
3. Run the dedicated portable build command:
   ```
   npm run portable
   ```
4. Look for the portable executable in the `dist` folder:
   ```
   dist/DesktopFilesViewer-Portable.exe
   ```

If that doesn't work, you can try running electron-builder directly:
```
npx electron-builder --win portable
```

## Why Use the Portable Version?

The portable version is a completely self-contained executable:
- No installation required
- Can run from any location (USB drive, external drive, etc.)
- No registry entries or system files are modified
- Can be moved around without breaking functionality

## Requirements

- Node.js
- npm (Node Package Manager)
- For building: electron-builder (installed automatically as dev dependency)
