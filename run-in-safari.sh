#!/bin/bash

# Takes JavaScript from stdin as input and runs it in in the frontmost Safari window. Useful for testing bookmarklets. It can easily be adapted to a TextMate bundle or Automator service.

# Usage example from the command line:
# ./run-in-safari.sh < Editor.js 

tempfile=$(mktemp "${TMPDIR:-/tmp}/tmux-paths.XXXX")
cat > "$tempfile"

osascript <<-APPLESCRIPT
try
	set theBookmarkletFile to "$tempfile"
	set theJavaScript to read theBookmarkletFile
	tell application "Safari"
		activate
		do JavaScript theJavaScript in document 1
	end tell
	return -- Suppress superfluous AppleScript output
on error errMsg number errNum
	display dialog "AppleScript encountered an error." & ¬
		" Error Message: " & errMsg & " Number " & errNum
end try
APPLESCRIPT

rm $tempfile