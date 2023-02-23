
arr = [
    [1,3],
    [1,5,[3,4,[2,1]]],
    [3,3,3,[4,4]]
    ]
    
b = [ 1, 3, 1, 5, [ 3, 4, [ 2, 1 ] ], 3, 3, 3, [ 4, 4 ] ]
const shirnk = (c, n=1) =>{
    if(n === 0){return c}
    result = [];
    c.forEach((a)=>{
        if(typeof(a) != 'number'){
            a.forEach((b)=>{
                result.push(b);
            })
        }else{
            result.push(a)
        }
    })
    return shirnk(result, n-1)
}

console.log(shirnk(b, 1))
// [ 1, 3, 1, 5, [ 3, 4, [ 2, 1 ] ], 3, 3, 3, [ 4, 4 ] ]
console.log(shirnk(b, 5))
// [ 1, 3, 1, 5, 3, 4, [ 2, 1 ], 3, 3, 3, 4, 4 ]

const shrink = (c, n=1) =>{
    if(n === 0){return c}
    result = [];
    c.forEach((a)=>{
        if(typeof(a) == 'number'){
             result.push(a)
        }else{
            result = result.concat(a)
        }
    })
    return shirnk(result, n-1)
}