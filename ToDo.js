import readlineSync from 'readline-sync';
import showList from './showList.js';
import fs from 'fs';

const options = ['add', 'list', 'check', 'remove'];
let list = [];
if(fs.existsSync('list')) list = JSON.parse(fs.readFileSync('list'));
let action = readlineSync.keyInSelect(options, 'Type your command ');
while (action !== -1) {
    if (action === 0) {
        list.push('🔴 '+readlineSync.question('what do you want to do? '));
    }
    if (action === 1) {
        showList(list);
    }
    if (action === 2) {
        const verify = readlineSync.keyInSelect(list, 'what do you want to check/uncheck? ');
        if(verify!==-1 && list[verify].indexOf('🔴')!==-1) list[verify] = list[verify].replace('🔴',"🟢");
        else if(verify!==-1)list[verify] = list[verify].replace("🟢",'🔴');
        showList(list);
    }
    if (action === 3) {
        const verify = readlineSync.keyInSelect(list, 'what do you want to remove? ');
        list.splice(verify,1);
        showList(list);
    }
    fs.writeFileSync('list',JSON.stringify(list))
    action = readlineSync.keyInSelect(options, 'Type your command ');
}