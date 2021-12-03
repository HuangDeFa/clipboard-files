const clipboard = require("../lib");
if (process.platform === 'darwin') {
    clipboard.writeFiles(['/Users/Alex/Download/helloWorld.js']); // rewrite an existing path
} else if (process.platform === 'win32') {
    clipboard.writeFiles(['C:\\Users\\Alex\\Documents\\helloWorld.js']); // rewrite an existing path
}else {
    clipboard.readFiles=()=>`no implement in ${process.platform}`
}
console.log("files:", clipboard.readFiles());