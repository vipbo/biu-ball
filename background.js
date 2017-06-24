;(function(){
	var background = {
		src:"img/bg.jpg",  //默认背景
		setSrc:function(newSrc){
			var newSrc  = newSrc || this.src;
			document.body.style.backgroundImage = "url("+ newSrc + ")";
		}
	}

	window.background = background;
})()