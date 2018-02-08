// javascript:var%20regularExpression%20=%20/\/([^\s\/]+)/g;var%20match%20=%20regularExpression.exec(window.location);var%20searchString%20=%20match[1];window.location%20=%20%22http://www.google.com/search?q=site:%22%20+%20searchString%20+%20encodeURIComponent(%22%20%22);

// Loads a Google site search of the base URL of the currently viewed site. I.e., this is a quick way to start searching the site you are currently viewing.

var regularExpression = /\/([^\s\/]+)/g;
// Matches the first instance of a slash followed by matching until reaching a character that is whitespace or a slash

var match = regularExpression.exec(window.location);
var searchString = match[1];

window.location = "http://www.google.com/search?q=site:" + searchString + encodeURIComponent("%20");