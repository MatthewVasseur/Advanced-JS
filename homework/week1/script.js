console.log("javascript working!"); // Just to test.
$(document).ready(function() {
  populate("http://www.reddit.com/hot.json");

  $("#hot").click(function() {
    populate("http://www.reddit.com/hot.json");
  });
  $("#new").click(function() {
    populate("http://www.reddit.com/new.json");
  });

  $("#petitions").click(function() {
    populate("http://api.whitehouse.gov/v1/petitions.json?limit=3&offset=0&createdBefore=1352924535");
  });
});

//puts in data
var populate = function (link) {
  $.get(link, function(   ) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet.
    var stories = response.data.children;
    $("#list").empty(); // clear list
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element.


      $("#list").append(elem);
      $("#list").append("<p>");
      $("#list").append("<a href='http://reddit.com"+story.permalink+"'>"+story.title+"</a>");
      $("#list").append(" (" + story.score + " points)</p>");
      $("#list").append("<img src='" + story.thumbnail +"'>");


      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    }
  })
};

