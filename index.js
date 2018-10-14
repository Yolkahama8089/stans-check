const express = require("express");
const bodyParser = require("body-parser");

var path = require("path");
const app = express();
const port = 3000;
const spawn = require("child_process").spawnSync;
var userName;
var topic;

const fs = require("fs");
var tweetText;
var tweetDate;
var tweetLink;
var tweetID;
var tweet;
var tweetJSON;

app.use(express.static(__dirname));

/*
  app.options for a request will run automatically before 
  running the request. here we can specify what headers are 
  allowed, and then we can specify our headers.
*/
app.options("/tweets", function(req, res) {
  console.log("OPTIONS");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  res.send(200);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/tweets", function(req, res) {
  console.log("HELLO");
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  let a = JSON.parse(Object.keys(req.body)[0]);
  console.log(a);
  userName = a["name"];
  topic = a["topic"];
  console.log(topic);
  console.log(userName);
  const pythonProcess = spawn("python2", ["StanceCheck.py", userName, topic]);
  console.log("reached");
  tweetLink = JSON.parse(
    fs.readFileSync(__dirname + "/OutputPermalink.json", "utf8")
  );
  tweetText = JSON.parse(
    fs.readFileSync(__dirname + "/OutputText.json", "utf8")
  );
  tweetDate = JSON.parse(
    fs.readFileSync(__dirname + "/OutputDate.json", "utf8")
  );
  tweetID = JSON.parse(fs.readFileSync(__dirname + "/OutputID.json", "utf8"));
  tweet = {};
  tweet[0] = tweetLink;
  tweet[1] = tweetID;
  tweet[2] = tweetText;
  tweet[3] = tweetDate;
  console.log("reached");
  res.send(tweet);
});
app.listen(port, () => console.log("listening on port " + port));
