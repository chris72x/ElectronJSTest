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

### Method 1: Using Electron Builder

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

### Method 2: Using Electron Forge

Electron Forge is another popular tool for packaging Electron applications:

1. Make sure you have installed all dependencies (`npm install`)
2. Package your application:
   ```
   npm run package
   ```
3. Create distributable installers:
   ```
   npm run make
   ```
4. Find your packaged application in:
   - `out/electron-desktop-files-{platform}-{arch}/` (packaged app)
   - `out/make/` (distributables)

## Portable Version (Windows) - TROUBLESHOOTING

If you're having trouble creating a portable version, try these different methods:

### Using Electron Builder

1. Make sure you've installed all dependencies:
   ```
   npm install
   ```
2. Run the dedicated portable build command:
   ```
   npm run portable
   ```
   
Or try the direct command:
```
npx electron-builder --win portable
```

### Using Electron Forge

1. Install dependencies:
   ```
   npm install
   ```
2. Create a packaged version:
   ```
   npm run package
   ```
3. Find the executable in:
   ```
   out/electron-desktop-files-win32-x64/electron-desktop-files.exe
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
- For building: electron-builder or electron-forge (installed automatically as dev dependencies)
