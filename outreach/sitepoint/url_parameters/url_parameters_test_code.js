

// more robust than most on internet since this one also handles params without equals signs
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = window.location.search.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? true : decodeURIComponent(m[3]) );
}



// longer, more readable (?) version
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var match = window.location.search.match(pattern);

	if(match) {
		var parameterValue = match[3];
		if(typeof(parameterValue)==='undefined') {
			return true;
		}
		else{
			return decodeURIComponent(parameterValue);
		}
	}
	else {
		return null;
	}
}



// sitepoint code width reference:
var isVisible = el.offsetWidth && var isVisible = el.offsetWidth && 





// usage:
getUrlParameter('testparam');

// if testparam=something, function returns "something"
// if testparam is present but not set to equal anything, function returns true
// if testparam is NOT present, function returns null





// this one returns an object
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

// usage:
var data = getAllUrlParameters();
console.log(data);




