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
   - Windows: `npm run build:win`
   - macOS: `npm run build:mac`
   - Linux: `npm run build:linux`
   - All platforms: `npm run build` (requires additional configuration)
3. Find your distributable files in the `dist` folder:
   - Windows: `.exe` installer/executable
   - macOS: `.dmg` file
   - Linux: `.AppImage` file

## Requirements

- Node.js
- npm (Node Package Manager)
- For building: electron-builder (installed automatically as dev dependency)
