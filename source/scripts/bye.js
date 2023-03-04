const printHi = require('./hello');

function printBye() {
    return 'Bye!'
}

console.log(printHi(), ' and ', printBye());