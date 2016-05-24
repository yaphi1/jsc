#Tracking Tags: What's Inside and How to Protect Your Sites

You know how some ads seem to follow you around the web?

There's a reason.

Advertisers use code snippets called tracking tags to know which websites you visit, so they can make their ads more relevant (or creepy depending on your view).

After a quick explanation of what tracking tags are, I'm going to talk about the good parts, the bad parts, and how to protect your sites and your users against the risks.



##Who is this article for?

- People involved in creating websites, including, developers, designers, ux specialists, social marketers, business owners, coding students, and more

- Anyone who uses the internet and is curious about how tracking affects their browsing experience




##What is a tracking tag and what does it do?

A tracking tag is a snippet of code that lets an advertiser know which sites you go to, and what you do on those sites.

That way, they can show you relevant ads.

Tracking tags have enough different names that you'd think they're on the run from the law, so don't get confused.  Some of the names include web beacons, pixels, third-party tracking code, remarketing tags, retargeting code, and others.

Tracking tags come in the form of images, iframes, or scripts.  Each form has its own benefits and risks.



##How does a tracking tag work?

An advertiser gives you the code for a 1x1 image to put on your page. When users come to your page, the image gets requested from the third party site, in the process transmitting your IP address, what page you visited, what time you visited, what browser you're using, and other information used to identify you.

Sometimes, advertisers will use iframes or scripts instead of images in order to get more detailed information including registrations, purchases, shopping cart abandonment, preferences, and sometimes demographics.

For more info, feel free to check out some documentation from [Wikipedia](https://en.wikipedia.org/wiki/Web_beacon), [Google](https://support.google.com/adwordspolicy/answer/94230#PIN-AW), [Facebook](https://www.facebook.com/business/help/952192354843755), and [Yahoo](https://policies.yahoo.com/us/en/yahoo/privacy/topics/webbeacons/index.htm).


##The good parts

As much as tracking tags get bad publicity, they do some good things.

- **Relevance**
They can make the ads you see more relevant and interesting---also less embarrassing.

- **Fairness**
They help level the playing field so small businesses can perform sophisticated ad campaigns without huge budgets.

- **Great content**
The revenue they provide makes it possible for your favorite sites to exist and stay free of charge.

- **Fewer ads**
More relevance means more clicks, which makes the ads pay better so sites can use fewer ads.




##The bad parts

While tracking tags have their good points, they can also cause problems.  Here are some:

- **Privacy concerns**
Tracking tags can be seen as an invasion of privacy.

- **Irrelevant or embarrassing ads**
What if you clicked on a site you're not interested in, and now their ads follow you around the web?  Also, with IP address tracking, someone in the same household can go to a weird site, and now you're getting ads for it because you're on the same IP address.

- **Content creators can get hurt**
Overuse of tracking tags and ads can encourage ad-blockers, which end up hurting the same sites the tracking tags were supposed to help.

- **A dangerous amount of trust**
When you put an advertiser's script tag on your site, you're pretty much giving them backdoor access to your site.  Their code could be anything.  It could change or be compromised somehow, or it could be messed up to begin with.

- **Security risks**
When sites have a lot of tracking tags, they're gambling that none of them have issues.  This is sometimes a losing gamble.
[This article by security research extraordinaire Randy Westergren](https://randywestergren.com/widespread-xss-vulnerabilities-ad-network-code-affecting-top-tier-publishers-retailers/) shows how a tracking tag code vulnerability allowed attackers to run any code they wanted on your page (special thanks to my sharp friend Sam Ratcliffe for debugging this one).  That would allow anyone to do all sorts of horrible things, like stealing credit cards for example.  The issue ended up affecting major brands you hear about every day.

- **Error risks**
Sometimes the tracking tag code itself has errors, or it's written in a way that interferes with your site's code.

- **Slow sites**
When tracking tags are overused, they can cause serious slowdowns in site performance.  The slowdowns typically show themselves through page load speed, scrolling, or generally interacting with the site.
For example, the following image shows the bottom of the long list of assets loaded on Business Insider's homepage.  The actual document loads in about a second, and third-party scripts make up the majority of the remaining 10 seconds of loading time.  To their team's credit, they've done a fantastic job of making sure the scripts don't interfere with the critical pieces of the document, but there's only so much you can do when you're asked to load that much stuff on one page.  This is a common issue across the web.
[IMAGE:  `business_insider_tags.png`]

- **Layout changes**
Some tracking tags insert images or iframes in a way that can mess with the layout of a site.  The most common effects are extra spaces at the top and bottom of a page.
[IMAGE:  `comcast space at bottom`]

- **Some tags bring more tags**
Some tracking tags call several of their own tracking tags.  This multiplies all of the problems above.  Now you have more potential security risks and your page performance can slow down further.




##How to protect your sites and your users

There are two main approaches you can take to protect your sites and your users: the business way, and the technical way.

###Step 1: The business approach

The business approach has to do with planning and prioritization, and if it's done right, you can bypass a lot of technical issues before they ever become a problem.  Here are some strategies to accomplish this:

- **Have clear reasons for your tags**
For every tracking tag you use, you should have a clear reason why this is going on your site.  It shouldn't be because you heard it somewhere, or you have a vague idea of what you want, or some advertiser told you to do it.  You need to know your goals.

- **Use only what you need**
Each extra tracking tag opens up a new avenue of potential problems.  The fewer you use, the less likely you are to have a problem.
As a related point, make sure you leave yourself time to remove tracking tags you're no longer using, as those are among the most likely to spazz out.

- **Actually communicate**
It's easy to end up with the wrong solutions if you don't have communication about the problems you're trying to solve.
It's also easy to end up with redundant tracking tags because different people wanted the same thing and didn't know it was already there.

###Step 2: The technical approach

When it comes to protecting your site from tracking tag issues, the technical approach is about making sure the code runs safely and correctly.

Don't start this step until the business side is all clear.  If you can head off issues in the planning stages, everything will be easier for everyone.

With that warning out of the way, here are some quick strategies to avoid technical problems with your tracking tags:

- **Images are safest**
First, use images as your tracking tags when possible because those are the safest.  If images aren't an option, use iframes.  If you can't use an iframe, you'll have to use a script, but tread carefully because scripts are the most risky.

- **Put tracking last**
Unless you have no other choice, put your tracking tags as close to the end of your pages as possible so that they load last and don't block the more important stuff.  Additionally, you can add `async` or `defer` to non-crucial scripts so they get out of the way of the rest of your page.  Here's a [video](https://www.youtube.com/watch?v=I5uhZcJ30SA) with more detail.

- **Use https**
Tracking tags should use https whenever possible, and definitely on secure pages like logins and payment pages.  **If you're asked to put a non-secure tag on a payment page, refuse.**  Ask the advertiser for https.

- **Big names aren't immune to big problems**
Don't assume code is safe because it's associated with a famous company name.  Some of the worst errors have come directly from companies with the best reputations.  In other cases, the code is actually a separate company's implementation of the famous company's original service.

- **The console is your friend**
When using scripts, run them in the browser console to catch errors right away.

#### How to spot the red flags
In addition to the above pieces of advice, you'll want to know how to spot the red flags that suggest you're not getting the best code.

- **Smart quotes can be dumb quotes**
If the code is given to you in a Word doc or a PDF instead of a plain text file, unwanted formatting could cause errors.  For example, you might get curly "smart quotes," and those will cause issues.

- **Watch out for document.write**
If a tracking tag uses `document.write` in the code, see if you can ask for a version that doesn't use it.  It can behave unpredictably, and if you want to load the script asynchronously for a performance boost, forget it.

- **Unnecessary global variables**
If a tracking script has a global variable that doesn't need to be global, it could interfere with the variables on your site.
For example, a major advertiser that I'll keep anonymous creates two unnecessary global variables to generate one random number.  As a bonus, they do unnecessary type conversion, they introduce an invalid URL character, and they use `document.write`.
[IMAGE: `doubleclick tag`]
If global scope turns out to be unnecessary (be sure about this), take the whole tag out of global scope using an immediately-invoked function expression, which looks like this:

    (function(){
	    // put the code here
    });

Note: Some companies including Google and Facebook use **necessary** global variables that you'll want to keep.  Fortunately, they have the good sense to use names like `_gaq` and `_fbq` that are unlikely to collide with anything.

- **The advertiser's own site is broken**
If the advertiser's own website is broken, there's a good chance their tracking tags might be broken too.  This isn't always true, but it suggests you should look more closely at their tags.

- **Avoid close ties to the document structure**
Some advertisers will write highly customized code for their business clients.  If you're on the receiving end of this code, make sure it's not too closely tied to your document structure.  For example, if the advertiser wants to know the price of an item, give them a variable or a piece of data to use instead of forcing them to rely on looking at that number in the second box on the bottom left column.  Otherwise, you can't change your page without breaking stuff.

- **Make sure you know which other tags getting dragged in**
Some tracking tags bring in their own tracking tags.  To check for this, search the tracking tag's code for things like .com, .org, .net, .co, or .io.
Additional tags are not necessarily bad, but you'll want to at least know what's being put on your site.

- **Watch out for eval**
Eval will run any snippet of text as code.  Unless that's used carefully, it can create huge security risks.  If you see eval in a tracking tag, either the advertiser is really careful, or they're a little bit reckless.
[IMAGE: `arbitrary js eval tag`]

- **Don't let your scrolling get bogged down**
If you see a tracking tag that puts too much stress on the scroll event, that can ruin your site's user experience.  In a case like that, see if you can find an alternative solution.

- **(In the future) make sure you get what you expect**
My cutting-edge friend Brent Kimmel told me about a technique known as [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) which lets you ensure that what you get is what you expect.  That means you're protected in case the contents of a tracking tag suddenly change.  At the time of this writing, it's not ready for use everywhere, but the major browsers are starting to adopt it.




##Conclusion

Tracking tags are a controversial subject because they're responsible for so much good and bad on the internet.

In a lot of ways, they make the internet better by helping enable high-quality free content.  They make people's lives better through relevant ads that solve real problems.  They help small businesses compete.

On the bad side, tracking tags can mess up your site and cause all sorts of privacy and security issues.

I don't claim to have any answers for the privacy debate, but if you've read this article, you'll at least have a starting point from which to protect your sites and your users.

In the future, my hope is that we'll all find a middle ground where privacy is respected, ads are helpful, great content is available, businesses can compete fairly, and site owners don't need to worry about bad tags.

Then the web will be a better place for everyone.


