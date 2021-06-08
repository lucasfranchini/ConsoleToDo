import readlineSync from 'readline-sync';
import showList from './showList.js';
import fs from 'fs';

toDo();

function toDo() {
    const options = ['add', 'list', 'check', 'remove', 'pomodoro'];
    let list = [];
    if (fs.existsSync('list')) list = JSON.parse(fs.readFileSync('list'));
    let action = readlineSync.keyInSelect(options, 'Type your command ');
    while (action !== -1) {
        if (action === 0) {
            list.push('🔴 ' + readlineSync.question('what do you want to do? '));
        }
        if (action === 1) {
            showList(list);
        }
        if (action === 2) {
            const verify = readlineSync.keyInSelect(list, 'what do you want to check/uncheck? ');
            if (verify !== -1 && list[verify].indexOf('🔴') !== -1) list[verify] = list[verify].replace('🔴', "🟢");
            else if (verify !== -1) list[verify] = list[verify].replace("🟢", '🔴');
            showList(list);
        }
        if (action === 3) {
            const verify = readlineSync.keyInSelect(list, 'what do you want to remove? ');
            if(verify!==-1) list.splice(verify, 1);
            showList(list);
        }
        if (action === 4) {
            const verify = readlineSync.keyInSelect(list, 'what ToDo do you want to have a pomodoro? ');
            if(verify!==-1){
                console.log(`Pomodoro de "${list[verify].replace("🟢 ", '').replace('🔴 ','').replace(' 🍅', '')}" setado!`)
                setTimeout(() => {
                    list[verify] = list[verify].concat(' 🍅');
                    fs.writeFileSync('list', JSON.stringify(list));
                    toDo();
                }, 1500000);
                break;
            }
        }
        fs.writeFileSync('list', JSON.stringify(list))
        action = readlineSync.keyInSelect(options, 'Type your command ');
    }
}