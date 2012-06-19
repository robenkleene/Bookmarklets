// javascript:var%20regularExpression%20=%20/((&|\?)q=)([^&]*)(?!.*&q=)/g;var%20match%20=%20regularExpression.exec(window.location);var%20searchString%20=%20match[3];var%20searchArray%20=%20searchString.split(%22+%22);var%20siteSearchTerm%20=%20searchArray.pop();var%20siteSearchTermArray%20=%20siteSearchTerm.split(%22.%22);if%20(siteSearchTermArray.length%20==%201%20||%20siteSearchTermArray.pop().length%20>%203)%20{siteSearchTerm%20=%20siteSearchTerm%20+%20%22.com%22;}if%20(siteSearchTerm.indexOf(%22site%22)%20==%20-1)%20{var%20siteSearchTerm%20=%20%22site:%22%20+%20siteSearchTerm;}searchArray.push(siteSearchTerm);window.location%20=%20%22http://www.google.com/search?q=%22+searchArray.join(%22+%22);
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