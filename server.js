import http from 'http'

http.createServer((req, res)  => {

  const total = 5 

  if (total % 2 === 1) {
    res.end('é impar!')
  } else {
    res.end('é par!')
  }
 

}).listen('3033')
