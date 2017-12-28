// javascript:var%20linkTitle%20=%20encodeURIComponent(document.title);var%20linkLocation%20=%20encodeURIComponent(window.location);var%20newLocation%20=%20%27pastebot://%27+linkTitle+%22\n%22+linkLocation;var%20selectedText%20=%20%27%27;if%20(window.getSelection)%20{selectedText%20=%20window.getSelection();}%20else%20if%20(document.getSelection)%20{selectedText%20=%20document.getSelection();}%20else%20if%20(document.selection)%20{selectedText%20=%20document.selection.createRange().text;}if%20(selectedText%20!=%20%27%27)%20{newLocation%20=%20newLocation%20+%20escape(%22\n\n%22)%20+%20selectedText;}window.location%20=%20newLocation;

// Adds the current web page title, URL, and text selection to Pastebot, which automatically copies it to the clipboard. I.e., this is a shortcut to copy the URL, web page title, and text selection to the clipboard.

// Note: iOS only.

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