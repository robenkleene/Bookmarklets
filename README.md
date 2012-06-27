A collection of useful bookmarklets.

## Editor

Takes the current Google search and narrows it to just _The New York Times_ and _The New Yorker_ websites, useful for copy editing.

## OmniFocus

Creates a new action in OmniFocus using the web page title, URL, and selected text. Requires [OmniFocus](http://www.omnigroup.com/products/omnifocus/).

## Pastebot

### Link

Opens Pastebot with the current web page title, URL, and selected text as a new Pastebot entry, which also copies it to the clipboard. I.e., this acts as a shortcut to copy the web page title, URL, and selected text to the clipboard all at once. 

### Markdown Link

Same as above but makes a Markdown Link to the current web page. (And ignores the selected text.)

### Copy Source

Opens Pastebot with the current web pages source, which copies it to the clipboard. I.e., this is a shortcut to copy the source of the current web page to the clipboard.


Requires [Pastebot](http://tapbots.com/software/pastebot/), iOS only.

## Simplenote

Creates a new Simplenote note with the current web page title, URL, and selected text. Requires [Simplenote](http://itunes.apple.com/us/app/simplenote/id289429962?mt=8), iOS only.

## Sitesearch

Uses the last search term of a Google search to create a Google site search, i.e., `drexciya allmusic` becomes `drexciya site:allmusic.com`. This is as close as I could get to a [Smart Bookmarks](http://en.wikipedia.org/wiki/Smart_Bookmarks) replacement that works on iOS.

## Notes

Further explanations of each bookmarklet are in each bookmarklet's comments.

These bookmarklets are built using [Daring Fireball: JavaScript Bookmarklet Builder](http://daringfireball.net/2007/03/javascript_bookmarklet_builder).

To install a bookmarklet, cut and paste the comment on the first line of the `Bookmarklet.js` file minus the `//`. To edit a bookmarklet, you'll need to visit the _JavaScript Bookmarklet Builder_ page and understand it.

**A note on developing bookmarklets:** Developing bookmarklets is excruciatingly annoying, this AppleScript makes it less so:

	set theBookmarkletFile to "/Users/dfdnatural/Desktop/Bookmarklet.js"	
	set theJavaScript to read theBookmarkletFile	
	tell application "Safari"
		do JavaScript theJavaScript in document 1
	end tell
	 