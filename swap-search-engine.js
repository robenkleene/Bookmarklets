// javascript:var%20initialLocation%20=%20window.location.href;var%20duckDuckGoPrefix%20=%20%22https://duckduckgo.com/?q=%22;var%20googlePrefix%20=%20%22https://www.google.com/search?client=safari&rls=en&q=%22;if%20(initialLocation.lastIndexOf(duckDuckGoPrefix,%200)%20===%200)%20{findString%20=%20duckDuckGoPrefix;replaceString%20=%20googlePrefix;}%20else%20{findString%20=%20googlePrefix;replaceString%20=%20duckDuckGoPrefix;}newLocation%20=%20initialLocation.replace(findString,%20replaceString);window.location%20=%20newLocation;

// Swaps a DuckDuckGo search to Google and vice versa.

var initialLocation = window.location.href;
var duckDuckGoPrefix = "https://duckduckgo.com/?q=";
var googlePrefix = "https://www.google.com/search?client=safari&rls=en&q=";
if (initialLocation.lastIndexOf(duckDuckGoPrefix, 0) === 0) {
  findString = duckDuckGoPrefix;
  replaceString = googlePrefix;
} else {
  findString = googlePrefix;
  replaceString = duckDuckGoPrefix;  
}
newLocation = initialLocation.replace(findString, replaceString);
window.location = newLocation;