/**
 * Created with JetBrains WebStorm.
 * User: Спелый
 * Date: 26.09.14
 * Time: 15:22
 * To change this template use File | Settings | File Templates.
 */
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 5000);

app.get('/chat', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
