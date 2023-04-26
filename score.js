;(function(){
	
	var score = {
		ele:document.createElement("div"),
		mark:0,
		init:function(){
			this.ele.style.position="absolute";
			this.ele.id="ball";
			this.update(0);						//更新分数
			document.body.appendChild(this.ele);
		},
		update:function(s){
			//在原分数的基础上，添加s分
			this.mark += s;

			//更新到dom元素上
			this.ele.innerHTML = this.mark;
		}
	}


	window.score = score;
})()
