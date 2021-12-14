#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {organize} = require('./organize');
const {treeFn} = require('./tree');

let input = process.argv.slice(2);
console.log(input);
let command = input[0];

let destPath = input[1];



switch(command)
{
    case 'help':
        console.log('cli help');
        console.log('cli organize destinationFolder');
        console.log('cli tree destinationFolder/File');
        break;

    case 'organize':
        console.log('Organize called');
        organize(destPath);
        break;

    case 'tree':
        console.log('tree called');
        treeFn(destPath,"");
        break;

    default:
        console.log('Please enter correct command');

}







