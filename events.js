const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data, seconData) => {
    console.log('recived')
    console.log(data);
    console.log(seconData);
})

/*
customEmitter.emit('responde', 'hello world!');
customEmitter.emit('response', 'curtis');
customEmitter.emit('response', 30);
customEmitter.emit('response', [1, 2, 3, 4]);
customEmitter.emit('response', {name: "ryan"});
*/

customEmitter.emit('response',[1,2,3],'Bienvenidos', 'a mi','WEB!');

