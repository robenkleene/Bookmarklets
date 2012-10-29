// javascript:var%20linkTitle%20=%20encodeURIComponent(document.title);var%20linkLocation%20=%20encodeURIComponent(window.location);var%20newLocation%20=%20%27omnifocus:///add?name=%27+linkTitle+%27&note=%27+linkLocation;var%20selectedText%20=%20%27%27;if%20(window.getSelection)%20{selectedText%20=%20window.getSelection();}%20else%20if%20(document.getSelection)%20{selectedText%20=%20document.getSelection();}%20else%20if%20(document.selection)%20{selectedText%20=%20document.selection.createRange().text;}if%20(selectedText%20!=%20%27%27)%20{newLocation%20=%20newLocation%20+%20escape(%22\n\n%22)%20+%20encodeURIComponent(selectedText);}window.location%20=%20newLocation;

// OmniFocus bookmarklet that adds the current web page as a new action in OmniFocus. This bookmarklet extends the official OmniFocus bookmarklet by adding the currently selected text to the action's note.

// Get the link
var linkTitle = encodeURIComponent(document.title);
var linkLocation = encodeURIComponent(window.location);
var newLocation = 'omnifocus:///add?name='+linkTitle+'&note='+linkLocation;

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
	newLocation = newLocation + escape("\n\n") + encodeURIComponent(selectedText);
}

window.location = newLocation;