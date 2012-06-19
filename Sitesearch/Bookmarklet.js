// javascript:var%20regularExpression%20=%20/((&|\?)q=)([^&]*)(?!.*&q=)/g;var%20match%20=%20regularExpression.exec(window.location);var%20searchString%20=%20match[3];var%20searchArray%20=%20searchString.split(%22+%22);var%20siteSearchTerm%20=%20searchArray.pop();var%20siteSearchTermArray%20=%20siteSearchTerm.split(%22.%22);if%20(siteSearchTermArray.length%20==%201%20||%20siteSearchTermArray.pop().length%20>%203)%20{siteSearchTerm%20=%20siteSearchTerm%20+%20%22.com%22;}if%20(siteSearchTerm.indexOf(%22site%22)%20==%20-1)%20{var%20siteSearchTerm%20=%20%22site:%22%20+%20siteSearchTerm;}searchArray.push(siteSearchTerm);window.location%20=%20%22http://www.google.com/search?q=%22+searchArray.join(%22+%22);

// Takes the last term of a Google search and makes a Google site search out of it, for example: "bookmarklet news.ycombinator" becomes "bookmarklet news.ycombinator.com". Basically a shorthand for creating site searches.

// Usage:
// 1. Construct a search in Google and perform it, e.g., search for "bookmarklet news.ycombinator".
// 2. Trigger the bookmarklet.
// 3. A new search will be performed using the last search term to construct a site search. E.g., "bookmarklet news.ycombinator" becomes "bookmarklet site:news.ycombinator.com".

// It is sort of smart about how it constructs a search.
// For example:
// 1. "bookmarklet news.ycombinator" turns into "bookmarklet site:news.ycombinator.com". I.e., the ".com" will be added if it's missing.
// 2. "bookmarklet news.ycombinator.com" turns into "bookmarklet site:news.ycombinator.com". I.e., ".com" won't be added if it's already there.
// 3. "bookmarklet daringfirball.net" turns into "bookmarklet site:daringfirball.net" I.e., ".com" won't be added if an alternative top-level domain is already specified.

var regularExpression = /((&|\?)q=)([^&]*)(?!.*&q=)/g;
// ((&|\?)q=) Match the first &q=
// [^&]* Till an &
// (?!.*&q=) Make sure this is the last &q=

var match = regularExpression.exec(window.location);
var searchString = match[3];
var searchArray = searchString.split("+");
var siteSearchTerm = searchArray.pop();

// Add ".com" as the last section if there is no extension already
var	siteSearchTermArray = siteSearchTerm.split(".");
if (siteSearchTermArray.length == 1 || siteSearchTermArray.pop().length > 3) {
	siteSearchTerm = siteSearchTerm + ".com";
}
// Add "site:" if it's missing
if (siteSearchTerm.indexOf("site") == -1) {
	var siteSearchTerm = "site:" + siteSearchTerm;
}

// Add the first search term back to the array and construct the query
searchArray.push(siteSearchTerm);
window.location = "http://www.google.com/search?q="+searchArray.join("+");