class Ball extends Obj{
	constructor(type, container, w, h, x, y, velX, velY, src){
		super(type, container, w, h, x, y, velX, velY, src);
		this.cnt= 0;
		this.wind=0.0;
	}
	tick(){
			this.wind = parseFloat(wind_power/1000);
			this.flag = true;
			for(var i = 0 ; i<objManager.objectArray.length; i++){
				if(objManager.objectArray[i].type != "P_BALL" && objManager.objectArray[i].type != "E_BALL")
				{
					if(collisionCheck(this, objManager.objectArray[i])){
						this.flag = false;
					}
				}
			}
			if(this.flag){
				this.velY += this.gravity;
				this.velX += this.wind;
				console.log(this.wind);
			}
			else{
				this.velX = 0;
				this.velY = 0;
				boom(this.x, this.y, "BALL");
				objManager.removeObject(this);
			}
			if(this.x>1200 || this.x < 0)
			{
				objManager.removeObject(this);
			}
			this.x = this.x+this.velX;
			this.y = this.y+this.velY;
	}
}