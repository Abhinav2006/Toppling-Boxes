class ground{
    constructor(width, height,x, y){
        var options ={
            isStatic:true
        }
    this.bodies = Bodies.rectangle(x, y, width, height, options)
    this.width = width;
    this.height = height;
    World.add(world, this.bodies)
    }
    display(){
        var pos = this.bodies.position;
        rectMode(CENTER)
        fill(255);
        rect(pos.x, pos.y, this.width, this.height)
    }
}