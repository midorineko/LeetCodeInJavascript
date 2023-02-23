// /* curring an add function with unknown length*/
const add = (a) =>{
    return function(b){
        if(b){
            return add(a+b)
        }else{
            return a
        }
    }
}

console.log(add(1)(2)(3)(4)())


const eval = (type) =>{
    return function(val){
        return function(val2){
            if(type==='multiply'){
                return val * val2
            }
            if(type==='subtract'){
                return val - val2
            }
            if(type==='add'){
                return val + val2
            }
        }
    }
}
const mul = eval('multiply')
console.log(mul(2)(2))
console.log(eval('subtract')(3)(1))
console.log(eval('add')(2)(3))