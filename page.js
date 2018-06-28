console.log('哈罗word');
var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'html'});
    response.write('<!DOCTYPE html>'+
                          '<html>'+
                          '<head>'+
                          '<meta charset="utf-8" />'+
                          '<title>兔子城堡</title>'+
                          '</head>'+
                          '<body>哈哈哈啰我的</body>'+
                          '</html>');
              response.end();
}).listen(8888);
console.log('server running at http://118.25.41.191:8888/');