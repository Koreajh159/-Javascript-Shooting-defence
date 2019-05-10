class Player extends Obj{
	constructor(type, container, w, h, x, y, velX, velY, src){
		super(type, container, w, h, x, y, velX, velY, src);
		this.hp_bar = document.getElementById("hp_bar");
		this.hit_point = 100;
		this.hp_bar.style.width = this.hit_point+"%";
		this.hp_bar.style.height = 100+"%";
		this.hp_bar.style.background = "red";
		this.cnt = 0;
	}
	tick(){
		this.flag = true;
		for(var i = 0 ; i<objManager.objectArray.length; i++){
			if(collisionCheck(this, objManager.objectArray[i]))
			{
				if(objManager.objectArray[i].type == "LAND" || objManager.objectArray[i].type == "TOWER")
				{
					this.flag = false;
				}
				else if(objManager.objectArray[i].type == "P_BALL" || objManager.objectArray[i].type == "E_BALL")
				{
					this.hit_point -=10;
					this.hit();
				}
				else if(objManager.objectArray[i].type == "ENEMY1" || objManager.objectArray[i].type == "ENEMY2")
				{
					this.x-=5;
					this.hit_point -=10;
					this.hit();
				}
			}	
		}
		if(this.flag){
			this.velY += this.gravity;
			this.velX = 0;
		}
		else{
			this.velY = 0;
		}
		if(this.x >0 &&this.x<1150)
		{
			this.x = this.x+this.velX;
		}
		else if(this.x <= 0 && this.velX >0)
		{
			this.x = this.x+this.velX;
		}
		else if(this.x >=1150 && this.velX<0)
		{
			this.x = this.x+this.velX
		}
		if(this.y > 0 && this.y < 608)
		{
			this.y = this.y+this.velY;
		}
	}
	render(){
		this.obj.style.left = this.x+"px";
		this.obj.style.top = this.y+"px";
	}
	hit(){
		this.hp_bar.style.width = this.hit_point+"%";
		if(this.hit_point <= 0)
		{
			boom(this.x, this.y, "PLAYER");
			objManager.removeObject(this);
			alive = false;
		}
	}
}