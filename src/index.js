const express = require('express');
const app = express();

app.get('/', function(req, res){
    console.log('root')
    res.send('Hello')
});
app.get('/ox', function(a, b){
    console.log('ok')
    b.send('packet2')
});
app.post('/ox', function(a, b){
    console.log('ok2')
    b.send('packet3')
});


//app.listen(3000);
const PORTNUM= 3001;
app.listen(PORTNUM, function(){
    console.log('port', PORTNUM, 'is active')
});