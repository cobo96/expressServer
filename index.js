var express = require('express');
var app = express();
var path = require('path');
var url = require('url');

/*app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname + "/index.html"));
  var pathname = url.parse(req.url).pathname;
    console.log(pathname);

    if(pathname === "/"){
        res.writeHead('200'{
            "Context-text" : 'text/plain'
        });
        res.end("index.html");
    } elseif(pathname === "/about.html") {
        res.writeHead('200'{
            "Context-text" : 'text/plain'
        });
        res.end("about.html");
    }else {
        res.writeHead('404'{
            "Context-text" : 'text/plain'
        });
        res.end("Page not found");
    }
});*/
app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.listen(3000);