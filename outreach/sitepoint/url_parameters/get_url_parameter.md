#Quick Tip: Get a URL Parameter with JavaScript

If you want to get a URL parameter with JavaScript, you've come to the right place.

This tip assumes basic familiarity with JavaScript, so I've written [a quick guide to help you get up to speed](https://simplestepscode.com/learn-javascript/) in case you need it.

##Get a Single URL Parameter

Here's the JavaScript code to get a URL parameter:

```javascript
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = window.location.search.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? true : decodeURIComponent(m[3]) );
}
```

###How to Use the Code

Let's say you have a URL like this:

```text
https://www.sitepoint.com/?name=Bob&skill=99&certified
```

Here are the output values you'd get from various uses of `getUrlParameter()`

```javascript
getUrlParameter('name'); // Bob
getUrlParameter('skill'); // 99
getUrlParameter('certified'); // true
getUrlParameter('other'); // null
```

###Notable Features

- Unlike a lot of the scripts you might see, this one takes parameters into account whether or not they have an equals sign.  If the parameter exists without an equals sign, it gets acknowledged as true.

- This script outputs a decoded string, so spaces and other special characters get automatically returned to their original form.


###How the Function Works

Step 1:
See if the parameter you're looking for matches anything in the URL.

Step 2:
If we find a match, either return the parameter's value, or if there's no equals sign, then just return true.


That's it!




##Bonus: Get all URL Parameters as an Object

Maybe you want to get all the URL parameters in a convenient object.

Here's a function to do that:

```javascript
function getAllUrlParameters(){
	var s = window.location.search;
	if(s) {
		var arr = s.substr(1).split('&');
		var obj = {};
		for(var i=0; i<arr.length; i++) {
			var a = arr[i].split('=');
			obj[a[0]] = typeof(a[1])==='undefined' ? true : a[1];
		}
		return obj;
	}
	else {
		return {};
	}
}
```


###Usage Example:

Let's say you have the following url:

```text
https://www.sitepoint.com/?name=Bob&skill=99&certified
```

You could run this function...

```javascript
getAllUrlParameters();
```

... and you'd get something like this:

```javascript
{ name: "Bob", skill: "99", certified: true }
```


You could store that object in a variable and access the values there.

```javascript
var data = getAllUrlParameters();
console.log(data);
console.log('skill = ' + data.skill);
```


###How the Function Works

- If there are any URL parameters, take all of them and split them up into an array.
- Loop through the parameters in your array, and add each one to an object.
- Output the object.




I hope this helps, and if you have any questions or thoughts, feel free to share in the comments.





