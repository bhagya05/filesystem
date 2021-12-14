
const fs = require('fs');
const path = require('path');
const utility = require('./utility');
function treeFn(destPath,indent)
{
    if(destPath == undefined)
    {
        console.log('Please enter a path');
    }
    else if(utility.isFile(destPath))
    {
        let baseName = path.basename(destPath);
        console.log(indent +"__"+baseName);
        return;
    }
    else 
    {
        let baseName = path.basename(destPath);
        console.log(indent + "|__" + baseName);
        let children = utility.getDirFiles(destPath);
        for(let i=0;i<children.length;i++)
        {
            treeFn(path.join(destPath,children[i]),indent +"\t");
        }
    }
}

module.exports = {treeFn};