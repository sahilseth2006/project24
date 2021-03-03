class Sand{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':5.0
           
        }

        this.body= Bodies.circle(x,y,5,options);
        World.add(world,this.body);

    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("grey");
        ellipse(this.body.position.x,this.body.position.y,5,5);
        pop();
    }
}