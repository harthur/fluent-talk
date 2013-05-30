Handlebars.registerHelper('date', function(time) {
   var date = new Date(time);
   return (date.getMonth() + 1) + "/" + date.getDate();
});

Handlebars.registerHelper('timeago', function(time) {
   time = time.replace(/.*, /, "");
   return $.timeago(time);
});

$(document).ready(function() {
  var tweetTemplate = Handlebars.compile($("#tweet-template").html());

  searchTwitter('#fluentconf', function(data) {
    var tweetsHTML = "";
    var tweets = data.results;

    tweets.forEach(function(tweet) {
      tweet.text = twttr.txt.autoLink(tweet.text);
      tweetsHTML += tweetTemplate(tweet);
    });
    $("#tweets").html(tweetsHTML);
  });
});

notafunc();
