var http = require("http");
var fs = require("fs");

http
  .createServer(function(req, res) {
    if (req.url.indexOf("script.js") != -1) {
      fs.readFile(__dirname + "/script.js", function(err, data) {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(data);
        res.end();
      });
    } else if (req.url.indexOf("style.css") != -1) {
      fs.readFile(__dirname + "/../css/style.css", function(err, data) {
        if (err) console.log(err);
        res.writeHead(200, { "Content-TYpe": "text/css" });
        res.write(data);
        res.end();
      });
    } else if (req.url.indexOf("stans-check.png") != -1) {
      fs.readFile(__dirname + "/../img/stans-check.png", function(err, data) {
        if (err) console.log(err);
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    } else if (req.url.indexOf("uncompressed-jquery-3.3.1.js") != -1) {
      fs.readFile(__dirname + "/uncompressed-jquery-3.3.1.js", function(
        err,
        data
      ) {
        if (err) console.log(err);
        res.writeHead(200);
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile(__dirname + "/../index.html", function(err, data) {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }
  })
  .listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");
