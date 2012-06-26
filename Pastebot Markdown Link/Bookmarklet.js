// javascript:var%20linkTitle%20=%20encodeURIComponent(%22[%22%20+%20document.title%20+%20%22]%22);var%20linkLocation%20=%20encodeURIComponent(%22(%22%20+%20window.location%20+%20%22)%22);var%20newLocation%20=%20%27pastebot://%27+linkTitle+linkLocation;window.location%20=%20newLocation;

// Sends a markdown URL to the current web page to Pastebot, which automatically copies it to the clipboard. I.e., this is a shortcut to copy a markdown link to the current web page to the clipboard.

// Note: iOS only.

// Get the link
var linkTitle = encodeURIComponent("[" + document.title + "]");
var linkLocation = encodeURIComponent("(" + window.location + ")");

var newLocation = 'pastebot://'+linkTitle+linkLocation;

window.location = newLocation;