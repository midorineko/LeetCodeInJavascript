class Calc{
    constructor(){
        this.total = 0;
    };
    
    add(val){
        this.total += val;
        return this
    }
    multiply(val){
        this.total *= val;
        return this
    }
}

const calc = new Calc
const results = calc.add(10).multiply(10)
console.log(results.total)