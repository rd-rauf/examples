const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What's your Url: `, (answer) => {
    dns.lookup(answer, (err, address, family) => {
        console.log('address: %j family: IPv%s', address, family);
    });
    rl.close();
});