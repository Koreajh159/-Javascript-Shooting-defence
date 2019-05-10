class Obj{
	constructor(type, container, w, h, x, y, velX, velY, src){
		this.type = type;
		this.container = container;
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.velX = velX;
		this.velY = velY;
		this.src= src;
		this.gravity = 0.1;
		this.flag = true;


		this.obj = document.createElement("div");

		this.obj.style.position = "absolute";
		this.obj.style.left = this.x+"px";
		this.obj.style.top = this.y+"px";
		this.obj.style.width = this.width+"px";
		this.obj.style.height = this.height+"px";
		if(this.src != ""){
			this.img = document.createElement("img");
			this.img.src = this.src;
			this.img.style.width = this.width+"px";
			this.img.style.height = this.height+"px";
			this.obj.appendChild(this.img);
		}
		this.container.appendChild(this.obj);
	}
//	fall(){
//
//	}

	tick(){
		this.velY += this.gravity;
		this.x = this.x+this.velX;
		this.y = this.y+this.velY;
	}
	render(){
		this.obj.style.left = this.x+"px";
		this.obj.style.top = this.y+"px";
	}
}