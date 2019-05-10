class Land extends Obj{
	constructor(type, container, w, h, x, y, velX, velY, src){
		super(type, container, w, h, x, y, velX, velY, src);
		if(this.type == "TOWER"){
			this.hit_point = 120;

			this.base_hp = document.createElement("div");
			this.base_hp.style.width = this.hit_point+"px";
			this.base_hp.style.height = 10+"px";
			this.base_hp.style.background = "red";
			this.base_hp.style.position = "absolute";
			this.base_hp.style.left = this.x+20+"px";
			this.base_hp.style.top = this.y+265+"px";
			this.container.appendChild(this.base_hp);
		}
	}
	tick(){
		if(this.type == "TOWER"){
			for(var i = 0 ; i<objManager.objectArray.length; i++){
				if(collisionCheck(this, objManager.objectArray[i])){
					if(objManager.objectArray[i].type=="P_BALL" || objManager.objectArray[i].type=="E_BALL")
					{
							this.hit_point -= 5;
							this.hit();
					}
				}
			}
		}
	}
	render(){
	}
	hit(){
		this.base_hp.style.width = this.hit_point+"px";
		if(this.hit_point <= 0){
			boom(this.x, this.y, "ENEMY_BASE");
			objManager.removeObject(this);
		}
	}
}