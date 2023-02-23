/* take a sum equation and make it able to take in currying
turn this: function sum(a,b,c,d){return a+b+c+d}
into that: curryfn(a)(b)(c)(d)
*/

function sum(a,b,c,d){return a+b+c+d}

const curry = (fn) => {
    return function currying(...args){
        if(args.length === fn.length){
            return fn(...args)
        }else{
            return function(...next){
                return currying(...args, ...next)
            }
        }
    }
}

curryfn = curry(sum)
console.log(curryfn(1)(2)(3)(4))

/*
Curry accepts the function we are attempting to curry. (sum)
Currying accepts the args being passed. (1)
When the args being passed is equal to how many arguments are needed for accepted function,
the accepted function is ran. (fn.length will return how many arguments are required)

If there isn't enough arguments passed into currying to satisfy fn.
Then we grab the next argument using an anon function. (2)
Then recursively call currying with the new args. (currying(1,2))


*/