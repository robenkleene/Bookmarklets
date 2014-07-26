# Bookmarklets

A collection of useful bookmarklets.

### Drafts

Opens Drafts with the current web page title, URL, and selected text as a new entry. Requires [Drafts](http://agiletortoise.com/drafts/), iOS only.

### Drafts Markdown

Opens Drafts with the current web page title, URL, and selected text as Markdown as a new entry. Requires [Drafts](http://agiletortoise.com/drafts/), iOS only.

### Editor

Takes the current Google search and narrows it to just _The New York Times_ and _The New Yorker_ websites, useful for copy editing.

### OmniFocus

Creates a new action in OmniFocus using the web page title, URL, and selected text. Requires [OmniFocus](http://www.omnigroup.com/products/omnifocus/).

### Pastebot Link

Opens Pastebot with the current web page title, URL, and selected text as a new Pastebot entry, which also copies it to the clipboard. I.e., this acts as a shortcut to copy the web page title, URL, and selected text to the clipboard all at once. Requires [Pastebot](http://tapbots.com/software/pastebot/), iOS only.

### Pastebot Markdown Link

Same as above but makes a Markdown Link to the current web page (and ignores the selected text). Requires [Pastebot](http://tapbots.com/software/pastebot/), iOS only.

### Pastebot Source

Opens Pastebot with the current web page's source, which copies it to the clipboard. I.e., this is a shortcut to copy the source of the current web page to the clipboard. Requires [Pastebot](http://tapbots.com/software/pastebot/), iOS only.

### Simplenote

Creates a new Simplenote note with the current web page title, URL, and selected text. Requires [Simplenote](http://itunes.apple.com/us/app/simplenote/id289429962?mt=8), iOS only.

### Search Site

Loads a Google site search of the base URL of the currently viewed site. I.e., this is a quick way to start searching the site you are currently viewing.

### Site Search

Uses the last search term of a Google search to create a Google site search, i.e., `drexciya allmusic` becomes `drexciya site:allmusic.com`. This is as close as I could get to a [Smart Bookmarks](http://en.wikipedia.org/wiki/Smart_Bookmarks) replacement that works on iOS.

## Supplements

### Run in Safari

To ease development of bookmarklets, this shell script takes JavaScript from stdin and runs it in the frontmost Safari window. It can be used as a TextMate command or Automator service that runs JavaScript as a bookmarklet.

It does not work correctly in BBEdit. BBEdit's text filter feature replaces the current document with the output of the script; if this script runs correctly, it outputs nothing, therefore it will delete the contents of the document. So alternatively, there's [a gist of a pure AppleScript version for BBEdit](https://gist.github.com/3026027) that works perfectly.

## Notes

1. Further explanations of each bookmarklet are in each bookmarklet's comments.

2. These bookmarklets are built using [Daring Fireball: JavaScript Bookmarklet Builder](http://daringfireball.net/2007/03/javascript_bookmarklet_builder). To install a bookmarklet, cut and paste its first line (minus the `//`). To edit a bookmarklet, you'll need to visit the _JavaScript Bookmarklet Builder_ page and understand it.
