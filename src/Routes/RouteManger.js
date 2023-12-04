const fs = require('fs');
const path = require('path');

function scanFolders(basePath, currentPath = '') {
    const folders = [];

    const files = fs.readdirSync(path.join(basePath, currentPath));

    files.forEach(file => {
        const filePath = path.join(currentPath, file);
        const stats = fs.statSync(path.join(basePath, filePath));

        if (stats.isDirectory()) {
            // Recursively scan subfolders
            const subFolders = scanFolders(basePath, filePath);
            folders.push(...subFolders);
        } else if (file === 'page.js') {
            // If the file is named 'path.js', add it to the result
            // Modify the path before pushing to the array
            const modifiedPath = filePath.replace(/\\/g, '/').replace(/^\//, '').replace(/\/$/, '');
            folders.push({ path: `/${modifiedPath}`, data: `/${modifiedPath}` });
        }
    });

    return folders;
}

const basePath = __dirname;
const result = scanFolders(basePath);
for(var i=0;i<result.length;i++){
    const x=result[i].path.replace("page.js","")
    const x2=x.replace("/main/","/")
    result[i].path=x2;
    result[i].data="."+result[i].data;
}

const Route=require("express").Router();
for(var i=0;i<result.length;i++){
Route.use(result[i].path,require(result[i].data))}
module.exports=Route;
