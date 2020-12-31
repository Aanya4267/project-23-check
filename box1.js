class box {
    constructor(x,y){
        this.width  = 10 ; 
        this.height = 100 ; 
        this.x = x ; 
        this.y = y ; 
        this.body = Bodies.rectangle(x,y,10,100,{isStatic:true});
        World.add(world,this.body);
    }

   

    display(){
        var pos = this.body.position ; 
        rectMode(CENTER);
        fill("red");
        rect(this.x,this.y,10,100);
    }
    }
