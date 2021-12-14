
const fs = require('fs');
const path = require('path');
const  utility = require('./utility')
let util = utility.utility;
let cwd = process.cwd();

function organize(destPath)
{
    if(destPath == undefined)
    {
        console.log('Please Provide a path');
        return;
    }
    else 
    {
        // Get all the files of that folder
        // Find extension of each file
        // Copy File to correct destination
        let orgPath = path.join(cwd,'organize');
        if(fs.existsSync(destPath) == false)
        {
            console.log('Enter a valid path');
            return;
        }
        if(fs.existsSync(orgPath) == false)
        {
            fs.mkdirSync(orgPath);
        }
        if(utility.isFile(destPath))
        {
            // It is a file
            let extension = getExtension(destPath);
            organizeHelper(destPath,extension);
            return;
        }
        else{
            // It is a folder
            // Get Content of Folder and pass it to organizeHelper
            let children = utility.getDirFiles(destPath);
            for(let i =0;i<children.length;i++)
            {
                let extension = getExtension(children[i]);
                organizeHelper(path.join(destPath,children[i]),extension);
            }
        }
    }
}


function organizeHelper(childPath,extension)
{

    let orgtype = getOrgType(extension);
    let baseName = path.basename(childPath);
    let destPath = path.join(cwd,'organize',orgtype);
    if(fs.existsSync(destPath) == false)
    {
        fs.mkdirSync(destPath);
    }
    destPath = path.join(destPath,baseName);
    fs.copyFileSync(childPath,destPath);
    
}


function getOrgType(extension)
{
    for(let key in util)
    {
        for(let i =0;i<util[key].length;i++)
        {
            if(extension == util[key][i])
            {
                return key;
            }
        }
    }
    return 'others';
}

function getExtension(filePath)
{
   let ext =  path.extname(filePath);
   return ext.slice(1);
}

module.exports = {organize};
