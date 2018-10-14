var topicInput;
var searchObject;
var searchJson;
var recievedTweets;
var tweetsCell;
var nameyy;

// ! START HERE

$(document).ready(function() {
  topicInput = document.getElementById("topic-input");
  searchObject = {
    name: "",
    topic: ""
  };
  searchJson = JSON.stringify(searchObject);
  tweetsCell = document.getElementById("tweets-cell");
  nameyy = "realDonaldTrump";
});

var switchName = function(namey) {
  console.log(namey.innerHTML);
  nameyy = namey.innerHTML.substring(namey.innerHTML.indexOf("@") + 1);
  console.log(nameyy);
};

var onSearch = function() {
  searchObject.name = nameyy;
  searchObject.topic = topicInput.value;
  console.dir(searchObject);
  searchJson = JSON.stringify(searchObject);
  console.log(searchJson);

  $.post("/tweets", searchJson)
    .then(data => {
      console.log("success");
      recievedTweets = data;
      console.log(recievedTweets);
      tweetsCell.innerHTML = "";
      for (var i = 0; i < Object.keys(recievedTweets[0]).length; i++) {
        tweetsCell.innerHTML =
          tweetsCell.innerHTML +
          '<div class="tweet"><b>@' +
          nameyy +
          "</b><br>" +
          recievedTweets[2][i] +
          "<br><sub>" +
          recievedTweets[3][i] +
          "</sub></div>";
      }
    })
    .catch(error => {});
};
