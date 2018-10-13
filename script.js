var nameInput;
var topicInput;
var searchObject;
var searchJson;

// ! START HERE

var onLoad = function() {
  nameInput = document.getElementById("name-input");
  topicInput = document.getElementById("topic-input");
  searchObject = {
    name: "",
    topic: ""
  };
  searchJson = JSON.stringify(searchObject);
};

var onSearch = function() {
  searchObject.name = "@realDonaldTrump";
  searchObject.topic = topicInput.value;
  console.dir(searchObject);
  searchJson = JSON.stringify(searchObject);
  console.log(searchJson);
};
