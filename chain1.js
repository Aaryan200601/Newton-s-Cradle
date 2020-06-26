class Chain1 
{
    constructor(bodyA, bodyB)
    {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:1,
            length:390
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display()
    {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x-100, pointB.y);
    }
}