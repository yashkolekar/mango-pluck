class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
      
    }

     fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

           
            push()
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x-25, pointA.y, pointB.x-50, pointB.y+10);
            line(pointA.x-25,pointA.y,pointB.x,pointB.y)
            pop()

          
        }
    }
    
}