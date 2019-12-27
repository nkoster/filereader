const
    app = require('express')(),
    http = require('http').createServer(app),
    fs = require('fs'),
    io = require('socket.io')(http)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', socket => {
    console.log('a user connected')
    console.log(socket.rooms)
    socket.on('upload', data => {
        socket.upload = '/tmp/' + data.filename
        console.log(socket.upload)
        socket.fd = fs.openSync(socket.upload, 'w')
    })
    socket.on('chunk', chunk => {
        fs.appendFile(socket.upload, chunk, err => {
            if (err) {
              console.error(err)
            }
        })
    })
})
  
http.listen(9999, () => {
    console.log('flextube listening on :9999')
})
