;(function(){
	var game = {
		frameIndex:0,
		clounNumber:2,
		ballnoonNumber:3,    /*游戏中气球的总数量*/
		currentBallNumber:0,  /*游戏中当前的气球的数量*/
		//score : 分数对象,
		actors : [], /* 用来把所有的演员：气球，枪，背景，云朵，分数 都放在这个数组中*/
		start  :function(){
			var that  = this;
			//让演员就位
			background.setSrc(); //设置背景

			score.init();        //初始化分数
			gun.init();          //初始化gun

			//给body添加点击事件
			document.body.addEventListener("click",function(e){
				document.getElementById("audio").play();

				//计算每个气球的中心点距离当前的鼠标的位置
				for (var i = 0;i< that.actors.length;i++){

					var obj = that.actors[i];
					if(obj.constructor === Balloon){	//对于每一个气球
						//获取中心点
						var x = obj.ele.offsetLeft +  96/2;
						var y = obj.ele.offsetTop +  96/2;

						// 计算鼠标位置与中心点的位置之间的距离，如果这个距离小于48，说明打中了
						if( Math.pow(x-e.clientX,2) + Math.pow(y-e.clientY,2) < Math.pow(48,2) ){
							//console.info( " 这里这个气球被打中了 ");
							//console.info(obj)
							obj.godie();
						}
						
					}
				}
				
			})

			for(var i=0;i<this.clounNumber;i++){ //
				this.actors.push( new Cloud() );
			}
			
			//开始游戏 启动游戏的主循环
			setInterval(function(){
				//console.info(this);
				//
				that.frameIndex++;

				//检测是否所有的气球都已经生成了
				if(that.frameIndex % 10 == 0 && that.currentBallNumber < that.ballnoonNumber)
				{
					//每隔.5秒去检查，是否需要产生一个气球
					//console.info(Date.now() +  "到了时间间隔，去检查是否要产生气球" );
					that.currentBallNumber++ ;//气球的数量加1
					that.actors.push( new Balloon() );      //把气球放入actors中去
					
				}
				
				for (var i = 0;i< that.actors.length;i++){
					that.actors[i].move();
				}

				//console.info(that.frameIndex);

			},50)
		}
	}

	window.game = game;


})()