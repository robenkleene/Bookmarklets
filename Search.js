var initialLocation = window.location.href;
var duckDuckGoPrefix = "https://duckduckgo.com/";
var googlePrefix = "https://www.google.com/search";
var googleImageParameter = "&tbm=isch";
var duckImageParameter = "&ia=images&iax=images";
var findString;
var replaceString;
var secondFindString;
var secondReplaceString;
if (initialLocation.lastIndexOf(duckDuckGoPrefix, 0) === 0) {
  findString = duckDuckGoPrefix;
  replaceString = googlePrefix;
  secondFindString = duckImageParameter;
  secondReplaceString = googleImageParameter;
} else if (initialLocation.lastIndexOf(googlePrefix, 0) === 0) {
  findString = googlePrefix;
  replaceString = duckDuckGoPrefix;
  secondFindString = googleImageParameter;
  secondReplaceString = duckImageParameter;
} else {
  var regularExpression = /\/([^\s\/]+)/g;
  var match = regularExpression.exec(window.location);
  var searchString = match[1];
  window.location =
    googlePrefix + "?q=site:" + searchString + encodeURIComponent(" ");
}
if (findString) {
  var newLocation = initialLocation
    .replace(findString, replaceString)
    .replace(secondFindString, secondReplaceString);
  window.location = newLocation;
}
