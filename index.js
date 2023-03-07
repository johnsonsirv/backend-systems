const readline = require('readline');
const EventEmitter = require('events');

// Create an interface with standard I/O
const cursorPrompt = 'taskterm> ';
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout, // if null, no output can write
    prompt: cursorPrompt,
});


const client = new EventEmitter();

r1.on('line', (input) => {
    [cmd, ...args] = input.trim().split(' ');
    client.emit('command', cmd, args);
});
