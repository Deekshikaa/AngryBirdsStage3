class Chain{
    constructor(bodyA, bodyB){
        var coptions = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 200,
            stiffness: 2,
        }
        this.chain = Constraint.create(coptions);
        World.add(world,this.chain);
    }
    display(){
    //liline(x1,y1,x2,y2)
    var pointA=  this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    push();
    strokeWeight(12);
    stroke("red");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop()
    }
 }