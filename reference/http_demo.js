const http = require('http')

// CREATE SERVER OBJECT
const server = http.createServer((req, res) => {
  // WRITE RESPONSE
  res.write('Hello World')
  res.end()
})

server.listen(5000, () => console.log('Server running...'))
