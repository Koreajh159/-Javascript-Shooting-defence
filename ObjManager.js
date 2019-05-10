class ObjManager{
	constructor(){
		this.objectArray = [];
	}
	
	addObject(x){
		this.objectArray.push(x);
	}
	
	removeObject(x){
		console.log("저 죽어요"+ this.objectArray.indexOf(x)+ "번째 있었어요");
		stage.removeChild(x.obj);
		this.objectArray.splice(this.objectArray.indexOf(x),1);
	}

	tick(){
		for (var i = 0 ; i < this.objectArray.length ; i++ )
		{
			this.objectArray[i].tick();
		}
	}
	render(){
		for (var i = 0 ; i < this.objectArray.length ; i++ )
		{
			this.objectArray[i].render();
		}
	}
}