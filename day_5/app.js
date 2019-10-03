class Shape
{
    constructor(width, height) 
    {
        this.width = width;
        this.height = height;
    }

    area() 
    {
        return this.width * this.height;
    }
}

var square = new Shape(10, 10);

console.log(square.area());

Shape.prototype.something = "Something Added to Shape.";

console.log(square.something);