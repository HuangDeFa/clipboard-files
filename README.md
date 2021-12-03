# clipboard-files

A nodejs addon, read or write file path for clipboard, support win32 and mac osx.

## build for nwjs

```shell
npm i clipboard-files --build-from-source --runtime=node-webkit --target=0.45.0 --target_arch=x64
```
## build for electron

```shell
npm i clipboard-files --build-from-source --runtime=electron --target=10.0.0 --target_arch=ia32 --dist-url=https://atom.io/download/electron
```

```shell
node-pre-gyp rebuild  --build-from-source --runtime=electron --target=12.0.6 --target_arch=x64 --target_platform=linux  --dist-url=https:electronjs.org/headers
```
因为编译需要头文件，如果已经有electron的头文件了 可以通过环境变量 npm_config_devdir指定文件路径

## build for nodejs

```shell
npm i clipboard-files
```

## example

```js
const clipboard = require('clipboard-files')

// for mac
clipboard.writeFiles(['/Users/Alex/Download/helloWorld.js'])

// for win32
clipboard.writeFiles(['C:\\Users\\Alex\\Documents\\helloWorld.js'])

let fileNames = clipboard.readFiles()
```
