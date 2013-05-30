function searchTwitter(term, callback) {
  var url = "http://search.twitter.com/search.json?callback=?";
  var params = {
    q: term,
    rpp: 10,
    result_type: "recent"
  };

  $.getJSON(url, params, callback);
  x;
}