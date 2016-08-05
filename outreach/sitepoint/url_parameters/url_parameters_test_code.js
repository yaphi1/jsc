



// latest version

function getAllUrlParams(url){
	
	// get query string from url (optional) or window
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	
	// we'll store the parameters here
	var obj = {};

	// if query string exists
	if(queryString) {
		
		// stuff after # is not part of query string, so get rid of it
		queryString = queryString.split('#')[0];

		// split our query string into its component parts
		var arr = queryString.split('&');

		for(var i=0; i<arr.length; i++) {
			// separate the keys and the values
			var a = arr[i].split('=');
			
			// in case params look like: list[]=thing1&list[]=thing2
			var paramNum = undefined;
			var paramName = a[0].replace(/\[\d*\]/, function(v){
				paramNum = v.slice(1,-1);
				return '';
			});

			// set parameter value (use 'true' if empty)
			var paramValue = typeof(a[1])==='undefined' ? true : a[1];

			// (optional) keep case consistent
			paramName = paramName.toLowerCase();
			paramValue = paramValue.toLowerCase();
			
			// if parameter name already exists
			if(obj[paramName]){
				// convert value to array (if still string)
				if(typeof obj[paramName] === 'string'){
					obj[paramName] = [obj[paramName]];
				}
				// if no array index number specified...
				if(typeof paramNum === 'undefined'){
					// put the value on the end of the array
					obj[paramName].push(paramValue);
				}
				// if array index number specified...
				else{
					// put the value at that index number
					obj[paramName][paramNum] = paramValue;
				}
			}
			// if param name doesn't exist yet, set it
			else{
				obj[paramName] = paramValue;
			}
		}
	}

	return obj;
}

getAllUrlParams('http://example.com/?a=1&b=adsf&c=&d&whatever&abc=1');

getAllUrlParams('http://example.com/?a=1&a=adsf&a=&d&whatever&abc=1');

getAllUrlParams('http://example.com/?a[0]=1&a[2]=adsf&a[]=&d&whatever&abc=1');


/*
var url = http://example.com/?a=1&b=adsf&c=&d&whatever&abc=1;
*/


// now add in duplicate parameters and array parameters

// add note about case sensitivity
/*
Use
a[0].toLowerCase();
a[1].toLowerCase();
*/





















// latest simplified versions
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]*))|(?=(&|$)))','i');
	var m = window.location.search.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? '' : m[3] );
}


/*
http://example.com/?a=1&b=adsf&c=&d&whatever&abc=1
*/


function getAllUrlParameters(){
	var s = window.location.search;
	if(s) {
		var arr = s.substr(1).split('&');
		var obj = {};
		for(var i=0; i<arr.length; i++) {
			var a = arr[i].split('=');
			obj[a[0]] = typeof(a[1])==='undefined' ? '' : a[1];
		}
		return obj;
	}
	else {
		return {};
	}
}




















// one function
function getUrlParameter(param, url){
	var query;
	if(url){
		query = url.split('?')[1];
		if(query){
			query = query.split('#')[0];
		}
	}
	else{
		query = window.location.search.substr(1);
	}
	if(!query){
		return null;
	}
	query = query.replace(/&amp;|;/gi,'&');

	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = query.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? '' : m[3] );
}













// 2 functions updated (acutally just less readable)
function getCleanUrlQuery(url){
	var query;
	if(url){
		query = url.match(/\?[^#]+/i)[0];
	}
	else{
		query = window.location.search;
	}
	return query && query.replace(/&amp;|;/gi,'&');
}

function getUrlParameter(param, url){
	var query = getCleanUrlQuery(url);
	if(!query){ return null; }

	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = query.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? '' : m[3] );
}














// 2 functions previous
function getCleanUrlQuery(url){
	var query;
	if(url){
		query = url.split('?')[1];
		if(query){
			query = '?' + query.split('#')[0];
		}
	}
	else{
		query = window.location.search;
	}
	return query && query.replace(/&amp;|;/gi,'&');
}

function getUrlParameter(param, url){
	var query = getCleanUrlQuery(url);
	if(!query){ return null; }

	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = query.match(pattern);
	return m && ( typeof(m[3])==='undefined' ? '' : m[3] );
}









// regex test code
var a = 'whatevz&amp;abc&amp;gold';
a.split(/&amp;|;|&/i);

























// old versions




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




