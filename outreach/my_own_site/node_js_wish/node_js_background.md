---
title: What I wish I knew when learning Node.js
published: false
description: A simple explanation of the "this" keyword in JavaScript
tags: javascript, node, beginners, webdev
canonical_url: https://simplestepscode.com/learning-node-js-tips/
cover_image: https://images.pexels.com/photos/755385/pexels-photo-755385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
---


*This [article](https://simplestepscode.com/learning-node-js-tips/) originally appeared on [Simple Steps Code](https://simplestepscode.com/) which aims to help people [learn JavaScript and actually remember it](https://simplestepscode.com/learn-javascript/).*


When I first learned Node.js, nothing turned out the way I had hoped.

**What I wanted:**
A simple app that can save a piece of text to a database and read it again.

**What I got:**
A dark terminal with "hello world running on port 3000" and no idea where to go next.

There were so many questions and so few answers; so many steps and such little direction.

Ultimately I found myself wondering:
What pieces are needed to create a Node.js app, and how do they fit together?

This is the article I wish I had.







## What is Node.js really?

Node.js is a program that lets you run JavaScript outside your web browser.

For example, you can use Node.js on the back end of your site to save info to a database and retrieve that info. You can also use Node.js to run JavaScript programs on your own computer to automate tasks.





## How much command-line knowledge do I need?

You'll need to be able to do the following through your computer's command line:
- see which folder you're in
- navigate to another folder
- see what's inside a folder

Here's my favorite tutorial to get up to speed quickly:
https://learnpythonthehardway.org/book/appendixa.html
(Don't get confused by the mention of Python. Note that this link is an appendix specifically about the command line, not Python.)



## What is npm and how do I use it?

npm is a package management tool that lets you quickly download and install convenient, pre-made, reusable code packages that you want to use in your project. You can use these packages like building blocks to help make your apps.

Installing a package is as easy as typing "npm install whatever" in the command line.

If you have code snippets you think would help other people, you can also upload your own packages to the npm registry, where packages are held.




## What is package.json?

Package.json is a file containing info about your project such as the name, the description, and which packages it relies on.




## What is all this require() stuff I'm seeing?

Remember those useful code packages you installed through npm?

If you want to use a package in your project, Node.js has a built-in function called require() that lets you include whatever package you want.






## How does Node.js work? Why do I need to write my own server, and what does that even mean?

First off, a server is a computer or a program that aims to give you what you want when you request something over a network.

1. For example, let's say you enter google.com into your browser's address bar. You're basically sending a request that says, "I want to see google.com."
2. This request will be sent over the internet to Google's servers.
3. Google's servers will respond with, "Okay, here's google.com," and it will send you the web page.

In that scenario, your computer is called the "client" and Google's computers are called the "servers".

To use a real-world comparison, it's kind of like how a restaurant client might order food through a waiter, and then the kitchen prepares the food and serves it back to the client through the waiter, who is basically the network connection between the kitchen (server) and the client (customer).

In this analogy, the request is your order, and the response is the food (or in some cases a "Sorry, we don't have that.")

In Node.js, you write your own server. That means you write a program to handle requests from a user's computer. So if someone requests "I want yoursite.com," your server can look at that request and respond with, "Okay, here's yoursite.com".

The reason you write your own server is that it gives you flexibility in what people can request and what you send back. To go back to the restaurant analogy, it's like writing what's on the menu.

Asking "Why do I have to write a server in Node.js?" is like a restaurant asking "Why do we have to decide what's on the menu?"

Here are some practical examples of how your Node.js server might handle requests for a social media site:
yoursite.com - This URL might send the home page.
yoursite.com/users/yaphi - This URL might send a user's profile data in a convenient JSON format.
yoursite.com/profile - This URL might show your profile, but only if you're logged in; otherwise it will show a login page.

See how that flexibility is useful?





## What is routing, and why do I need it? Why are we using Express.js?

Routing is the process of determining what URL route you use to get to a particular resource. For example, yoursite.com/about can route to your site's "About" page. Another example: yoursite.com/analytics/page_load_speed can route to some data about average page load speed.

Express.js is a JavaScript framework that has pre-written code to make it easier to write routes in Node.js. It does other stuff too, but routing is one of the most common use cases to start with. You can install it through npm.






## What does "Listening on port 3000" mean?

First, what is a network port?

This is easier to explain with an analogy.

Let's say a bunch of countries are delivering items to one another by airplane. The items are being sent and received through airports.

Networks such as the internet work the same way.

Data is sent from your computer to a server through a port. Think of a network port as if it's an airport for sending data.

Your computer has a bunch of ports it uses to send and receive data. You have to tell your program which port to wait at, so it knows what to expect. This is like how you have to tell someone which airport to go to if they're waiting for an item to arrive there.

When your Node.js app says it's listening on Port 1337, that's the port where it's waiting for requests and responses. It's like saying that your app is standing at Airport 1337, ready to send and receive items.






## How do I get my Node.js app to show an HTML file instead of command line text that says "Hello world"?

A lot of tutorials leave you with that command line "Hello world" message, even though sending an HTML file is the same number of steps!

When you get to the part that says res.send, just use res.sendFile('whatever.html') instead of res.send('hello world'). That way, your server will respond with an HTML file instead of command line text.








## Which database should I use?

Just start with MongoDB and use mlab's free hosting to get set up. I actually spent years not learning backend programming because I was so afraid of picking the wrong database.

Once you learn one, you can pick up the others quickly because the concepts are similar. You connect to the database, then you write, read, update, or delete. (Yes there are more concepts to learn, but focus on the core for now.)

I spent years agonizing over the choice, and eventually I just did it, and learned the basics in a couple of afternoons. Then I tried PostgreSQL and picked that up in another afternoon.

Don't agonize over this decision. Just pick MongoDB with mlab and get it over with.





## How does the front-end interact with the back-end?

AJAX and fetch are two different JavaScript techniques that let you make requests from your web page and handle the responses that come back from your server.

Use AJAX or fetch depending on your browser compatibility needs. Fetch is more convenient and modern, but AJAX is more compatible.

Don't get scared of the names like I once did. These are not entire languages; they are techniques that often take one to five lines of JavaScript.





## How do I get my project up on the internet?

Just use zeit.co to deploy your project. It's free and easier than the other options.





## Final things to note

When creating a Node.js project expect some setup. This can be an adjustment for someone who is used to typing front-end code, saving it, and running it directly in the browser. The setup time will get smaller as you get comfortable with which packages you prefer and which common setup tasks you can automate or eliminate.

Get used to spending a lot of time following documentation. This can be an adjustment if you're used to coding everything off the top of your head. It's okay to rely on documentation since there's no way to automatically know how every package in the world works.






I hope this article has given you a basic idea of what's involved in a Node.js project.


