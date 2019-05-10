class Explosion{
	constructor(container, x, y, type){
		this.container = container;
		this.x = x;
		this.y = y;
		this.divArr = [];
		this.type = type;
		this.width;
		this.height;
		this.cnt = 0;
		if(this.type == "BALL"){
			this.width = 15;
			this.height = 15;
		}
		else if(this.type == "ENEMY"){
			this.width = 50;
			this.height = 50;
		}
		else if(this.type == "PLAYER"){
			this.width = 40;
			this.height = 40;
		}
		else if(this.type == "ENEMY_BASE"){
			this.width = 100;
			this.height = 100;
		}
		else if(this.type == "TOWER"){
			this.x = getRandomByRange(0, 100);
			this.y = getRandomByRange(300, 560);
			this.width = 200;
			this.height = 200;
		}
		this.div = document.createElement("div");
		this.div.style.position = "absolute";
		this.div.style.left = this.x+"px";
		this.div.style.top = this.y+"px";
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";

		this.img = document.createElement("img");
		this.img.src = "./res/exp"+this.cnt+".png";
		this.img.style.width = this.width+"px";
		this.img.style.height = this.height+"px";
		this.div.appendChild(this.img);

		this.container.appendChild(this.div);
	}
	tick(){
		if(this.cnt <15){
			this.cnt++;
			this.img.src = "./res/exp"+this.cnt+".png";
		}
		else{
			this.container.removeChild(this.div);
			explosionArr.splice(explosionArr.indexOf(this), 1);
		}
		
	}
}