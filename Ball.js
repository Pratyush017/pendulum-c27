class Ball {
  constructor(x,y,radius){        
    this.body = Bodies.circle(x,y,radius);
    this.radius = radius;
    World.add(world,this.body);
}
  
  MoveWithMouse(){
     this.body.position.x = mouseX;
     this.body.position.y = mouseY;

  }

  LeaveMouse(){
     this.body.position.x = xpos;
     this.body.position.y = ypos;
     xpos = this.body.position.x;
     ypos = this.body.position.y;

  }

  display() {
    var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(10,100,180);
        ellipse(0,0,this.radius*2);
        pop();
    }
   
  }

