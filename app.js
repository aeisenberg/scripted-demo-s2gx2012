/*global process require  */
 
var stat = require('node-static'),
    http = require('http'),
    util = require('util');
var webroot = './client',
    port = 8231;

/** @type Server */
var file = new stat.Server(webroot, {
    cache: 600,
    headers: {
        'X-Powered-By': 'node-static'
    }
});

/** 
 * @param {ClientRequest} req 
 * @param {ServerResponse} res 
 */
http.createServer(function(req, res) {
    if (req.url.indexOf(".ico") !== -1) {
        // ignore favicon.ico
        res.end();
        return;
    }

    if (req.url.indexOf("easteregg") !== -1) {
        res.write("aaaaaa");
        res.end();
        return;
    }
    
    if (req.url.indexOf("kill") !== -1) {
        // kill switch to close server
        process.exit(0);
    }


    req.addListener('end', function() {
        file.serve(req, res, function(err, result) {
            if (err) {
                console.error('Error serving %s - %s', req.url, err.message);
                if (err.status === 404 || err.status === 500) {
                    file.serveFile(util.format('/%d.html', err.status), err.status, {}, req, res);
                } else {
                    res.writeHead(err.status, err.headers);
                    res.end();
                }
            } else {
                console.log('%s - %s', req.url, res.message);
            }
        });
    });
}).listen(port);
console.log('node-static running at http://localhost:%d', port);
