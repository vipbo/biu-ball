;(function(){
	function Cloud(){
		//属性
		this.ele = document.createElement("div");
		this.height = getRandom(50,80);
		this.width = 2  * this.height; //为了保持与图片的尺寸成比例的关系，所以这是*2。原图是1:2的。
		this.ele.style.backgroundImage = "url(img/cloud.png)";
		this.ele.style.backgroundRepeat = "no-repeat";
		this.ele.style.backgroundSize = this.width+"px "+this.height+"px";
		this.ele.style.width = this.width +"px";
		this.ele.style.height = this.height +"px";
		this.ele.style.position="absolute";
		this.ele.style.top  = getRandom(0,100) + "px";
		this.ele.style.left = getRandom(0,document.documentElement.offsetWidth-this.width) + "px";


		this.speed = getRandom(1,4); //水平移动的速度


		//添加到body中
		document.body.appendChild(this.ele);

		
	}
	Cloud.prototype.move = function(){
		//左右移动
		//只要改left值,假设它向左移动（相当是把left值不断改小）
		var oldleft = this.ele.offsetLeft;
		if(oldleft < -1 * this.width){ //飞出最左边
			var newLeft = document.documentElement.offsetWidth ;//屏幕的最右边
			this.ele.style.left = newLeft +"px";
		}
		else{
			var newLeft = oldleft - this.speed;

			this.ele.style.left = newLeft +"px";
		}

	}

	window.Cloud = Cloud;

})()