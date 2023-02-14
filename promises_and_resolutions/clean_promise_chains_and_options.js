const prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('success 1');
    }, 1000);
})

const prom2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('success 2');
    }, 500);
})

const prom3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('success 3');
    }, 100);
})

prom.then((res1)=>{
  console.log(res1)
  return prom2
  //now we return the function as the next promise and this will allow the promise keywords to work.
}).then((res2)=>{
  console.log(res2)
  return prom3
}).then((res3)=>{
  console.log(res3)
}).catch((err)=>{
  console.log('errrrror')
})
//nice noew we have promise chaining without a pyramid

// Promise.any([prom, prom2, prom3]).then((res)=>{console.log(res)})
//Here are the need to know promise functions
//.all runs all the promises and will NOT complete if ANY are rejected
//.race will return the first promise completed
//.allSettled will return all the promises in an array and indicate what is successful
//.any is like race but will skip any rejected promises