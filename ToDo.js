import readlineSync from 'readline-sync';

const options = ['add', 'list', 'check', 'remove'];
let list = [];
let action = readlineSync.keyInSelect(options, 'Type your command ');
while (action !== -1) {
    if (action === 0) {
        list.push('🔴 '+readlineSync.question('what do you want to do? '));
        console.log(list)
    }
    if (action === 1) {
        console.log('\n======================');
        for (let i=0;i<list.length;i++){
            console.log(list[i])
        }
        console.log('======================');
    }
    if (action === 2) {
        const verify = readlineSync.keyInSelect(list, 'what do you want to check/uncheck? ');
        list[verify].replace('🔴',"🟢");
        console.log(list[verify]);
    }
    if (action === 3) {
        const verify = readlineSync.keyInSelect(list, 'what do you want to check/uncheck? ');
        list.splice(verify,1);
        console.log(list)
    }
    action = readlineSync.keyInSelect(options, 'Type your command ');
}