// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius*2;
    }
    get circumference(){
        return Math.PI*this.diameter
    }
    get area(){
        return Math.PI*(this.radius**2)
    }
    set diameter(diameter){
        this.radius = diameter/2;
    }
    set circumference(circumference){
        this.radius = (circumference/Math.PI)/2
    }
    set area(newArea) {
        this.radius = Math.sqrt(newArea/Math.PI)
    }
  
}let circle1 = new Circle(7)
console.log(circle1.diameter);
console.log(circle1.circumference);
console.log(circle1.area);