import readlineSync from 'readline-sync';

const options = ['add','list','check','remove'];
let action = readlineSync.keyInSelect(options,'o que voce quer fazer?');