var express = require('express')
var socket = require('socket.io')

//App setup
var app = express();
var server = app.listen('3000', ()=> {
  console.log('listening on port 3000')
})

//Client connection ???
app.use(express.static('../client'))

//Socket setup
var io = socket(server)

io.on('connection', (socket)=>{
  console.log("made socket connection")
})