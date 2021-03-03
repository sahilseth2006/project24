class Rubber{
    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
           
        }

        this.body= Bodies.circle(x,y,25,options);
        World.add(world,this.body);

    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,20,20);
        pop();
    }
}