---
title: Space Ghost: My Halloween Debugging Horror Story
published: false
description: The hardest bugs to see are the ones that are literally invisible.
tags: debugging, javascript, webdev
canonical_url: https://simplestepscode.com/space-ghost-halloween-debugging/
cover_image: https://simplestepscode.com/img/space_ghost.jpg
---


Yesterday I faced a nasty bug.

I needed to integrate some third-party code that would dynamically insert a script onto a page.

It was billed as a simple copy and paste, but these things rarely are.

I pasted the code in the console, and it didn't work. Nice. Time to lace up my Troubleshoot Boots™.

So what was the problem?

- Was it the way the URL was being inserted (.src vs setAttribute)? - No
- Was it the script url itself? - No
- Was it a cross-origin issue? - Nope
- Was it the site I was using this code on? - No
- Was it the browser? - No

Finally, I asked myself, had basic script insertion stopped working altogether.

I rewrote my test case for the code from scratch just to make sure nothing was mistyped. Then something crazy happened. The new code worked.

The crazy part? It was exactly the same as the non-working code.

Baffled, I put both versions of the code into a diff checker.

Then I saw the problem: [invisible spaces](https://en.wikipedia.org/wiki/Zero-width_space).

The integration code came from a PDF, which had automatically inserted unwanted zero-width spaces, meaning that the code would break while the offending characters would stay invisible.

Once I deleted the spooky space ghosts, the problem went away.

Key takeaway:
If you ever need to paste code from a PDF, an HTML page, an Excel sheet or anything that's not a plain text file, run it through some kind of validator to make sure there aren't any unwanted characters.

I hope this helps in case you run into a similar issue.

*This post originally appeared on [Simple Steps Code](https://simplestepscode.com/)*

