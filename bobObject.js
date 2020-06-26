class Bob
{
    constructor(x, y)
    {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.2,
            density:10
        }

        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 25;
        World.add(world,this.body);
        
    }

    display(){      
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(2);
        fill("red");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}