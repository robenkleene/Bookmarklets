// javascript:var%20source%20=%20encodeURIComponent(document.documentElement.innerHTML);var%20newLocation%20=%20%27pastebot://%27+source;window.location%20=%20newLocation;

// Adds the current web page title, URL, and text selection to Pastebot, which automatically copies it to the clipboard. I.e., this is a shortcut to copy the URL, web page title, and text selection to the clipboard.

// Note: iOS only.

// Get the link
var source = encodeURIComponent(document.documentElement.innerHTML);
var newLocation = 'pastebot://'+source;
window.location = newLocation;