---
title: Understanding "this" in JavaScript
published: false
description: A simple explanation of the "this" keyword in JavaScript
tags: javascript, beginners, webdev, tutorials
canonical_url: https://simplestepscode.com/javascript-this/
---

*This [article](https://simplestepscode.com/javascript-this/) originally appeared on [Simple Steps Code](https://simplestepscode.com/) which tries its best to help people [learn JavaScript and actually remember it](https://simplestepscode.com/learn-javascript/).*

In JavaScript, the `this` keyword answers the following question:
**Which object does our function belong to when it's called?**


If that makes no sense, that's okay! It will make more sense after some quick background info and examples.



## First, what is an object?

An object is a set of data stored in name-value pairs (also called key-value pairs).

For example:

```javascript
var car = {
	color: 'purple',
	topSpeed: 9001,
	model: 'magic school bus',
	driver: 'Waluigi'
};
```

An object can store many things including strings, numbers, arrays, functions, or even other objects.




## Next, what is a method?

A method is a function that belongs to an object.

For example:

```javascript
var car = {
	color: 'purple',

	makeNoise: function(){
		console.log('vroom');
	}
}
```

In that example, `makeNoise` is a method of our car object, and we can call it like so:

```javascript
car.makeNoise();
```



## So where does `this` come in?

In JavaScript, `this` just means the object our function belongs to.

In the following example, `this` will be our car object.

```javascript
var car = {
	currentSpeed: 0,

	goFaster: function(){
		this.currentSpeed += 10;
	}
}

console.log('speed before: ' + car.currentSpeed);

car.goFaster();

console.log('speed after: ' + car.currentSpeed);
```

If you try the example, you'll see that the `goFaster` function increases `currentSpeed` by 10.





## What's a useful example of the `this` keyword?

Let's say we want to have some elements turn red and have a red border when clicked on.

The following code is too repetitive:

```html
<div id="first">first text</div>
<div id="second">second text</div>

<script>
var firstDiv = document.getElementById('first');
var secondDiv = document.getElementById('second');

firstDiv.onclick = function(){
	firstDiv.style.color = 'red';
	firstDiv.style.border = '1px solid red';
};

secondDiv.onclick = function(){
	secondDiv.style.color = 'red';
	secondDiv.style.border = '1px solid red';
};
</script>
```

What a pain!

What if we just want one function that could say, "Hey. See this div? Change this div."

That would be much better than rewriting the function for each div.

Our `this` keyword can help us:

```html
<div id="first">first text</div>
<div id="second">second text</div>

<script>
var firstDiv = document.getElementById('first');
var secondDiv = document.getElementById('second');

function turnRed(){
	this.style.color = 'red';
	this.style.border = '1px solid red';
}

firstDiv.onclick = turnRed;
secondDiv.onclick = turnRed;
</script>
```

See how much neater that is?

But wait... I thought `this` was supposed to refer to the object our function belongs to. Our `turnRed` function doesn't seem to belong to any objects, right?

**Here's the key point:**
**The `this` keyword is only set each time you run the function, not when you first declare the function.**

So in the above example, our `onclick` methods are set to `turnRed`. The `onclick` methods belong to their corresponding divs, so in each case, `this` means "this div".

What happens if you call `turnRed()` by itself?

If a function doesn't belong to another object when it's called, then it belongs to the `window` object by default.

That means `this` will refer to the window, and an error will happen because you can't put CSS styles directly on the window.




## Quick recap so far

- In JavaScript `this` is which object our function belongs to when it gets called.

- The `this` keyword is set when you run a function, not when you first declare it.

- Unless otherwise specified, `this` gets set to "window" by default.




## How can I see what `this` is?

If you ever get stuck, you can always check what `this` is by logging it to the console.

Conveniently, `console.log()` doesn't interfere with the value of `this` so you won't have to worry that `console.log(this);` would say "console".

When in doubt, log it out.




## Can `this` change?

Yeah!

Sometimes, `this` is inconvenient. Maybe you want it to refer to one thing, but it refers to something else.

[Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply), and [ES6 arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) let you decide what you want `this` to be.

For now, you have enough to remember, but I've linked to those concepts in case you want to know more.





## Key takeaways

- `this` is whatever object your function belongs to when you run it.

- Don't overthink it.

- If you ever get stuck, just `console.log(this);` and you'll see what `this` is.



I hope this was helpful, and feel free to check out [Simple Steps Code](https://simplestepscode.com/learn-javascript) for more JavaScript tips.


If you have any questions, please feel free to leave them in the comments, and I'll do my best to answer.



