import http from 'http'
import { readFile } from 'fs'

http.createServer((req, res) => {

  res.writeHead(200, { 'Content-type' : 'text/hmtl; charset=utf-8' })  

  let file = ''
  switch(req.url) {
  case '/':
    file = 'index.html'
    break
  case '/clientes':
    file = 'clientes.html'
    break
  case '/contato':
    file = 'contato.html'
    break
  default:
    file = 'index.html'
    break
  }

  readFile(file, 'utf-8', (err, data) => {
    res.write(data)
    res.end()
  })

}).listen(3030)