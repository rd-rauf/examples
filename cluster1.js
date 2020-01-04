var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
        console.log("worker created: ", worker.id);
    }
} else {
    http.createServer(function (req, res) {
        console.log(`process ${process.pid} handled this request.`);
        res.writeHead(200);
        res.end('process ' + process.pid + ' says hello!');
    }).listen(8000);
}