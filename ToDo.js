import readlineSync from 'readline-sync';

const options = ['add', 'list', 'check', 'remove'];
let list = ['🔴 a'];
let action = readlineSync.keyInSelect(options, 'Type your command ');
while (action !== -1) {
    if (action === 0) {
        list.push('🔴 '+readlineSync.question('what do you want to do? '));
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
        if(list[verify].indexOf('🔴')!==-1) list[verify] = list[verify].replace('🔴',"🟢");
        else list[verify] = list[verify].replace("🟢",'🔴');
    }
    if (action === 3) {
        const verify = readlineSync.keyInSelect(list, 'what do you want to remove? ');
        list.splice(verify,1);
    }
    action = readlineSync.keyInSelect(options, 'Type your command ');
}