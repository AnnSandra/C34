class Pendulum {
    constructor(x,y,color){

        var  options = {

            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8



        }
        this.body=Bodies.circle(x,y,30);
        this.color=color;
        this.x=x;
        this.y=y;
        World.add(world,this.body);

    }

    display() {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        ellipse(0,0,60,60);
        pop();
    }
}