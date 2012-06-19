A collection of useful bookmarklets. An explanation of each bookmarklet is in that bookmarklet's comments.

These bookmarklets are built using [Daring Fireball: JavaScript Bookmarklet Builder](http://daringfireball.net/2007/03/javascript_bookmarklet_builder).

To install a bookmarklet, cut and paste the first line of the .js file. If you want to edit a bookmarklet, you'll have visit the link to the JavaScript Bookmarklet Builder and understand it.

A note on developing bookmarklets: developing bookmarklets is excruciatingly annoying, this AppleScript makes it less so:

	set theBookmarkletFile to "/Users/dfdnatural/Desktop/Bookmarklet.js"	
	set theJavaScript to read theBookmarkletFile	
	tell application "Safari"
		do JavaScript theJavaScript in document 1
	end tell
	 