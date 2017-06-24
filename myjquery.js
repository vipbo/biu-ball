;(function(){
	function getRandom(m,n){
		return m +  Math.round((n-m)*Math.random() );
	}

	window.getRandom = getRandom;
})();
