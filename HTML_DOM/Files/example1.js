// ? Create File

jsobject = { 'artist' : 'Green Day', 'album' : 'Dookie', 'track' : 'She' }

var fs = require('fs');
parse(jsobject)

fs.appendFile('mynewfile1.json', parse(jsobject), function (err){
    if (err) throw err;
    console.log('saved!')
})


