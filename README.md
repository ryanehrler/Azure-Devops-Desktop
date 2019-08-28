## Azure Devops Desktop
This is an electron app pointed to https://dev.azure.com/.  It uses Electron Forge to package and create an installer for the application.

## To Use

```bash
# Clone this repository
git clone https://github.com/ryanehrler/Azure-Devops-Desktop.git
# Go into the repository
cd AzureDevopsDesktop
# Install dependencies
npm install
# Run the app
npm start
```

```bash
# To package the app but NOT bundle it with an installer
npm run package
```

```bash
# To package the app into an installer. The installer (maker) configs are in package.json
npm run make
```

## Generate Icons for Operating systems

You can use - https://cloudconvert.com/png-to-icns - to convert the .webp or the .png icon to the different icon formats.
In the package.json file the icon is defined @ config.forge.packagerConfig.icon.  You will notice there is no file extension.
Electron-forge will infer the extension based on the OS it is building for - so Windows it uses .ico and Mac it uses .icns.



