
;(function(){
	function Balloon(){
		var position = [
			"0 0 ","-96px 0","-192px 0","-288px 0","0 -123px ","-96px -123px","-192px -123px","-288px -123px"]
		//属性
		this.ele = document.createElement("div");
		this.ele.className="balloon";//

		this.mark  = 0;
		this.speed = 0 ;
		
		this.reBirth(); //随机设置属性

		var that = this;

		this.ele.addEventListener("animationend",function(){
			// alert("animationend");

			this.className = "balloon";
			that.reBirth();


		})

		document.body.appendChild(this.ele);
	}

	//在prototype上写方法
	Balloon.prototype.move = function(){
		
		//获取当前的top
		var currentTop = this.ele.offsetTop;

		// 如果currentTop< -123，则要重新从地下长出来
		if(currentTop < -123){ //123是气球的高度
			this.reBirth();
		}
		else{

			//是不断把top变小（向上升）
			var newTop = currentTop - this.speed;

			//更新到dom元素上
			this.ele.style.top = newTop +"px";
		}
	}

	Balloon.prototype.reBirth = function(){

		this.ele.style.top = getRandom(500,600) +"px"; //设置top值
		this.ele.style.left = (document.documentElement.offsetWidth - 96) * Math.random() + "px";
		
		this.mark = getRandom(1,8);//随机产生一个分数 [1,8]

		this.speed = this.mark;// 向上飞的速度，跟分数是成正比的：分数越大，飞的越快
		
		//this.ele.style.backgroundPosition = position[ this.mark - 1  ] ; //这里做数组下标 要 -1
		this.ele.style.backgroundPositionX  = (this.mark-1)%4 * -96 +"px"
		this.ele.style.backgroundPositionY  = (Math.ceil( this.mark/4) - 1)  * -123 +"px";
		
	}

	Balloon.prototype.godie = function(){

		this.ele.className = "balloon blow";

		score.update(this.mark);//得分
	}


	window.Balloon = Balloon;

})()
