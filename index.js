class Calculator{
    constructor(){
        this.PI = Math.PI;
        this.E = Math.exp(1)
    }

    //Getter
    get pi(){
        return `PI (${this.PI})`
    }


    get e(){
        return `Eulner's number (${this.E})`
    }

    ratio(x,y,width){
        let widthRatio=width/x;
        let heightRatio=widthRatio*y;
        return `height is ${heightRatio} on ratio ${x}:${y}`
    } 

   
    percentage(x,y) {
        return `${(x/y)*100}%`
    }

    add(x, y){
        return x+y
    } 

  
    subtract(x, y){
        return y-x
    } 

  
    multiply(x, y) {
        return x*y
    }

    
    divide(x, y) {
        if(y===0){
            return "Error: Divisor can't be 0"
        }else{
            return x/y
        }

    }

    modulation(x, y){
        if(y===0){
            return "Error: Divisor can't be 0"
        }else{
            return (x%y)
        }
    }  

 
    elevate(x, y) {
        return Math.pow(x,y)
    }


    sqrt(x) {
        return Math.sqrt(x)
    }

}


const calculator= new Calculator()
console.log(calculator.ratio(3,4,600))