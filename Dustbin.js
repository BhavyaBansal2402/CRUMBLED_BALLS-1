class Dustbin 
{
    constructor(x, y, width, height)
    {
        var options=
        {
            isStatic: true

        }

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        World.add(world. this.body);

    }
    
    display()
    {
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        StrokeWeight(3);
        fill(236, 235, 10);
        rect(0, 0, this.width, this.height);
        pop()

    }
    
}