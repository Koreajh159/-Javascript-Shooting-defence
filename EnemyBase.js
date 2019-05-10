class EnemyBase extends Obj{
	constructor(type, container, w, h, x, y, velX, velY, src){
		super(type, container, w, h, x, y, velX, velY, src);
		this.hit_point = 120;
		this.create_cnt = 0;
		this.enemy_type;

		this.base_hp = document.createElement("div");
		this.base_hp.style.width = this.hit_point+"px";
		this.base_hp.style.height = 10+"px";
		this.base_hp.style.background = "red";
		this.base_hp.style.position = "absolute";
		this.base_hp.style.left = this.x+20+"px";
		this.base_hp.style.top = this.y-10+"px";
		this.container.appendChild(this.base_hp);
	}
	tick(){
		for(var i = 0 ; i<objManager.objectArray.length; i++){
			if(collisionCheck(this, objManager.objectArray[i])){
				if(objManager.objectArray[i].type=="P_BALL")
				{
					this.hit_point -= 5;
					this.hit();
				}
			}
		}
		if(this.create_cnt <= 0 ){
			this.enemy_type = getRandomByRange(1, 11);
			createEnemy(this.enemy_type);
			this.create_cnt = 3000;
		}
		else{
			this.create_cnt--;
		}
		display_time(this.create_cnt);
	}
	render(){
	}
	hit(){
		this.base_hp.style.width = this.hit_point+"px";
		if(this.hit_point <= 0){
			boom(this.x, this.y, "ENEMY_BASE");
			objManager.removeObject(this);
			setTimeout("gameOver("+true+")", 3000);
		}
	}
}