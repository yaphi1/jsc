Array.slice.call(null, document.querySelectorAll('.profile-view a')).forEach(function(v){console.log(v.innerHTML)});




chrome:

Array.prototype.slice.call(document.querySelectorAll('.profile-view a')).forEach(function(v){console.log(v.innerHTML);});