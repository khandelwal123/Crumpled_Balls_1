class Side{
    constructor(x, y){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, 20, 100, options);
        this.width = 200
        this.height = 20
        World.add(world, this.body);
    }

    display(){
        push()
            fill("white");
            rect(this.body.position.x, this.body.position.y, 20, 100);
        pop()
    }
}