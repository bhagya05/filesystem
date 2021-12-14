
const fs = require('fs');
const path = require('path');
const { get } = require("http");

let utility = 
{
    media:['mkv','mp4','mp3','win'],
    program:['exe','tar','rar'],
    document:['pdf','doc','docx','pptx','txt'],
    pictures:['jpeg','jpg','png',]
}

function getDirFiles(dirPath)
{
    let content = fs.readdirSync(dirPath)
    return content;
}
function isFile(dirPath)
{
    let isfile = fs.lstatSync(dirPath).isFile();
    return isfile;
}

module.exports = {
    utility:utility,
    getDirFiles:getDirFiles,
    isFile: isFile,
}
