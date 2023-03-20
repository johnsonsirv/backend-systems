const EventEmitter = require('events');


class TaskTermServer extends EventEmitter {
    constructor(client){
        super()
        
        // initialize variables
        this.tasks = {}
        this.taskId = 1;

        // initial server response
        process.nextTick(() => {
            this.emit(
                'response',
                'Type a command (help to list commands)'
            );
        });

        client.on('command', (cmd, args) => {
            switch (cmd) {
                case 'help':
                case 'ls':
                case 'add':
                case 'delete':
                    this[cmd](args)
                    break;
                default:
                    this.emit('response', 'Unknown command');
            }
        });
    }

    help(){

    }
    
    ls(){

    }

    add(args){

    }

    delete(args){

    }
}

module.exports = (client) => new TaskTermServer(client);
