



Quick Tip: Get a URL Parameter with JavaScript



If you want to get a URL parameter with JavaScript, you've come to the right place.

This tip assumes a basic familiarity with JavaScript, so I've written [a quick guide to help you get up to speed](https://simplestepscode.com/learn-javascript/) in case you need it.

Get a Single URL Parameter

Here's the JavaScript code to get a URL parameter:

``` javascript
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = window.location.search.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? true : decodeURIComponent(m[3]) );
}
```

How to use the code

Let's say you have a url like this:
https://www.sitepoint.com/?name=Bob&skill=99&certified

Here are the output values you'd get from various uses of `getUrlParameter()`

``` javascript
getUrlParameter('name') // Bob
getUrlParameter('skill') // 99
getUrlParameter('certified') // true
getUrlParameter('other') // null
```

Notable features

- Unlike a lot of the scripts you might see, this one takes parameters into account whether or not they have an equals sign.  If the parameter exists without an equals sign, it gets acknowledged as true.

- This script outputs a decoded string, so spaces and other special characters get automatically returned to their original form.


How the function works

Step 1:
See if the parameter you're looking for matches anything in the url.

Step 2:
If we find a match, either return the parameter's value, or if there's no equals sign, then just return true.






Bonus: Get all URL Parameters as an Object


the snippet

``` javascript
function getAllUrlParameters(){
	var arr = window.location.search.substr(1).split('&');
	var obj = {};
	for(var i=0; i&lt;arr.length; i++){
		var a = arr[i].split('=');
		obj[a[0]] = typeof(a[1])==='undefined' ? true : a[1];
	}
	return obj;
}
```


usage example
var data = getAllUrlParameters();
console.log(data);


how it works


