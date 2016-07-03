







// latest simplified versions
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]*))|(?=[&$]))','i');
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




