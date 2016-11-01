(function(){
	var posts = document.querySelectorAll('.userContentWrapper');
	for(var i=0; i<posts.length; i++){
		if(posts[i].innerHTML.match(/halloween/i)){
			posts[i].style.backgroundColor='#f00';
		}
	}
})();

