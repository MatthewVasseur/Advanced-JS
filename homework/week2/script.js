// Using the jQuery .ready() function!
$(document).ready(function() {
  loadReddit();
  $("#refresh").click(function() {
    loadReddit();
  });

  $(window).mousemove(function(e) {
    // Ex. 3: My Shadow code here

    // You can change the css of an element with the .css function—
    //   look up the documentation for it on jQuery.com!
    setTimeout( function() {
      $("#follow-dot").css({visibility: "visible", left: e.pageX, top: e.pageY});
      //console.log(e.pageX, e.pageY); // Just to see what's going on.

    }, 100);
    // Optionally, add a delay. Hint: look up the setTimeout function!
  });

  getFB(); // Defined below
});

// Ex. 2: Objectify Me code here
// An example person
// var rafi = {
//   fname: ...
//   lname: ...
//   favoriteCereal: ...
//   interests: ...
//   fullname: function() {
//     // Make sure to use `this`
//     // return ...
//   },
//   miniBio: function() {
//     toPrint = "Hi my name is " + ...
//     // "toPrint += X" is a shortcut for "toPrint = toPrint + X"
//     toPrint += " and my favorite cereal is " + ...
//     toPrint += "In my free time, I like to ";
//     for (var i in this.interests) {
//       toPrint += ...
//     }
//     console.log(toPrint);
//     return toPrint;
//   }
// }
var matt = {
  fname: "Matthew",
  lname: "Vasseur",
  favoriteCereal: "HNC",
  interests: ['basketball','volleyball','etc.'],

  fullname: function() {
    return this.fname + " " + this.lname;
  },

  miniBio: function() {
    toPrint = "Hi my name is " + this.fullname();
    toPrint += " and my favorite cereal is " + this.favoriteCereal;
    toPrint += ". In my free time, I like to do ";
    for (var i in this.interests) {
      toPrint += this.interests[i] + " ";
    }
    console.log(toPrint);
    return toPrint;
  }
};

// Gets data from Reddit
var loadReddit = function() {
  console.log("loading hottest stories...");
  $.get("http://www.reddit.com/hot.json", function(response) {
    $("#list").empty(); // Empty all the stuff in the list first.
    var stories = response.data.children;
    for(var i in stories) { // For each story
      story = stories[i].data; // Get the actual object of the story
      var elem = $("<li></li>"); // Create an empty list element
      // Create a link inside a paragraph
      $(elem).append("<p><a href='http://reddit.com" + story.permalink +
                     "'>" + story.title + "</a> (" + story.score + "points)</p>");
      // Add the story thumbnail as an <img> tag
      $(elem).append("<img src='" + story.thumbnail + "'>");
      // Add the newly created element to the list
      $("#list").append(elem);
    }
  });
};

// Ex 4: Me online! Code here
// Get data from Facebook
var getFB = function() {
  $.ajax({
    method: "get", // Using GET
    url: "https://graph.facebook.com/me", // Get my own info
    data: {
      fields: "id,name,picture", // What goes here?
      // Access token obtained at https://developers.facebook.com/tools/explorer
      // Note that it expires after a while, so you occasionally need to go back
      //   and get another one.
      access_token: "CAACEdEose0cBAD4wOHQldaUC3D3Duj5mw4ZCjsss62HbZB7BLQMzJBo1Hcug1OrU4RxHy6IW9L2aKpU00EVjkCGvp87HVH6FZAWnbbt0cjymc9o467StkNfeJxxjwhtk1KgRDWYHCHnhmhGbUfQ9OZAJrYMegQLogAOxZB5UXkDAbuBcecr9rctGgiMQtcwZCZBw41W5Kh2zS2rKYvh0ZBVP"
    },
    success: function(response) {
      console.log(response);
      var elem = $("<div></div>");
      elem.append("<p>"+response.id+"</br>"+response.name+"</p>");
      elem.append("<img src="+response.picture.data.url+">");
      $("body").append(elem);

    },
    error: function(jxqr, text) {
      console.log(jxqr, text);
      $("body").empty();
      for (var i=0;i<100;i++) {
        $("body").append("<h1>ERROR</h1></br>");
      }
    }
  });
};
