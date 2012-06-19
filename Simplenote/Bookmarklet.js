

// Adds the current web page title, url, and text selection to a new note in Simplenote.

// Get the link
var linkTitle = encodeURIComponent(document.title);
var linkLocation = encodeURIComponent(window.location);
var newLocation = 'pastebot://'+linkTitle+"\n"+linkLocation;

// Get the selection
// Note: This method of getting the selected text works on Safari for Mac and  on iPad as long as the bookmark is in the bookmarks bar. It does not work on iPhone.
var selectedText = '';
if (window.getSelection) {
	selectedText = window.getSelection();
} else if (document.getSelection) {
	selectedText = document.getSelection();
} else if (document.selection) {
	selectedText = document.selection.createRange().text;
}
// Add the selectedText to the new location
if (selectedText != '') {
	newLocation = newLocation + escape("\n\n") + selectedText;
}

window.location = newLocation;