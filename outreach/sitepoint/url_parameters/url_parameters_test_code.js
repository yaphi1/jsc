

// more robust than most on internet since this one also handles params without equals signs
function getUrlParameter(param){
	var pattern = new RegExp('[?&]'+param+'((=([^&]+))|(?=(&|$)))','i');
	var m = window.location.search.match(pattern);
	return m && (typeof(m[3])==='undefined' ? true : decodeURIComponent(m[3]));
}

// usage:
getUrlParameter('testparam');

// if testparam=something, function returns "something"
// if testparam is present but not set to equal anything, function returns true
// if testparam is NOT present, function returns null





// this one returns an object
function getAllUrlParameters(){
	var arr = window.location.search.substr(1).split('&');
	var obj = {};
	for(var i=0; i<arr.length; i++){
		var a = arr[i].split('=');
		obj[a[0]] = typeof(a[1])==='undefined' ? true : a[1];
	}
	return obj;
}

// usage:
var data = getAllUrlParameters();
console.log(data);




