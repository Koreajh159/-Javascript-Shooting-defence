class Enemy extends Obj{
	constructor(type, container, w, h, x, y, velX, velY, src){
		super(type, container, w, h, x, y, velX, velY, src);
		this.initVelX = this.velX;
		this.move_flag = true;
		this.attack_delay = 500;
		this.cnt = 0;
	}
	tick(){
			this.flag = true;
			for(var i = 0 ; i<objManager.objectArray.length; i++){
				if(collisionCheck(this, objManager.objectArray[i]))
				{
					if(objManager.objectArray[i].type=="LAND")
					{
						this.flag = false;
					}
					else if(objManager.objectArray[i].type=="P_BALL")
					{
						boom(this.x, this.y, "ENEMY");
						objManager.removeObject(this);
					}
				}
			}
			if(this.flag){
				this.velY += this.gravity;
				this.velX = 0;
			}
			else{
				this.velY = 0;
				if(this.move_flag){
					this.velX = this.initVelX;
				}
			}
			if(this.x >300 &&this.x<1200)
			{
				this.x = this.x+this.velX;
			}
			else if(this.x <= 300)
			{
				this.move_flag = false;
				if(this.attack_delay==500){
					enemy_attack(this);
					this.attack_delay = 0;
				}
				else{
					this.attack_delay++;
				}
			}
			if(this.y > 0 && this.y < 608)
			{
				this.y = this.y+this.velY;
			}
		}
}