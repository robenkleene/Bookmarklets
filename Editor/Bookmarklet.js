// javascript:var%20regularExpression%20=%20/((&|\?)q=)([^&]*)(?!.*&q=)/g;var%20match%20=%20regularExpression.exec(window.location);var%20searchString%20=%20match[3];searchString%20=%20decodeURIComponent(searchString);searchString%20=%20searchString.replace(/\+site:.*$/,%20%27%27);searchString%20=%20searchString.replace(/\%22/g,%20%27%27);searchString%20=%20%22\%22%22%20+%20searchString%20+%20%22\%22%22;siteSearches%20=%20%22+site:nytimes.com+OR+site:newyorker.com%22;searchString%20=%20searchString%20+%20siteSearches;window.location%20=%20%22http://www.google.com/search?q=%22%20+%20searchString;

// Grab the Search String
var regularExpression = /((&|\?)q=)([^&]*)(?!.*&q=)/g;
// ((&|\?)q=) Match the first &q=
// [^&]* Till an &
// (?!.*&q=) Make sure this is the last &q=
var match = regularExpression.exec(window.location);
// The third match is the search string
var searchString = match[3];

// Decode the URL to simplify matching
searchString = decodeURIComponent(searchString);

// Remove everything from "site:" to the end, just to prevent any funny business
// for hitting the bookmarklet multiple times.
searchString = searchString.replace(/\+site:.*$/, '');

// Remove any quotes in the current search string "
searchString = searchString.replace(/\"/g, '');

// Wrap the searchString in quotes
searchString = "\"" + searchString + "\"";

// Add the site searches
siteSearches = "+site:nytimes.com+OR+site:newyorker.com";
searchString = searchString + siteSearches;

window.location = "http://www.google.com/search?q=" + searchString;