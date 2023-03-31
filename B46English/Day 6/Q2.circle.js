class circle{
    constructor(radius,color){
        this.radius=radius
        this.color=color       
    }
    getRadius(){
        return this.radius
    }
    setRadius(radius){
        this.radius=radius
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color=color
    }
    toString(){
        return ('Circle with radius '+this.radius+' and color '+this.color)
    }
    getArea(){
        return (3.14 * this.radius * this.radius)
    }
    getCircumference(){
        return (2 * 3.14 * this.radius)
    }
}
let circle1=new circle(5,'red')
console.log(circle1)
circle1.setRadius(3)
console.log(circle1.getRadius())
circle1.setColor('blue')
console.log(circle1.getColor())
console.log(circle1.toString())
console.log(circle1.getArea())
console.log(circle1.getCircumference())