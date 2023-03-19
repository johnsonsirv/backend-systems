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
const server = require('./server')(client)

server.on('response', (response) => {
    process.stdout.write('\u001B[2J\u001B[0;0f') // clear the prompt
    process.stdout.write(response);
    process.stdout.write(`\n${cursorPrompt}`);
});

r1.on('line', (input) => {
    [cmd, ...args] = input.trim().split(' ');
    client.emit('command', cmd, args);
});
