class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,150,150);
    this.image = loadImage("sprites/hulk.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.trajectory=[]
    
  }

  

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var pos = [this.body.position.x, this.body.position.y]
    this.trajectory.push(pos)
    }
    //console.log(this.trajectory)
     





    for(var i = 0; i<this.trajectory.length; i++ ){
image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]) 



    }
  }

}
