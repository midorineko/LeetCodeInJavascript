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
    prom2.then((res2)=>{
      console.log(res2)
      prom3.then((res3)=>{
        console.log(res3)
      })
    })
  }).catch((err)=>{
    console.log('inside of reject: ' + err);
  })