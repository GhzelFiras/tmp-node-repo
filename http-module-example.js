const http = require('http');
const server = http.createServer((req,res) => {
    res.write('hello there');
    res.end();
});
server.listen(5000);