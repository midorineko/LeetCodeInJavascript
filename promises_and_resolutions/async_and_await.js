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

const result = async() =>{
    let m1, m2, m3;
    try{
        m1 = await prom;
        m2 = await prom2;
        m3 = await prom3;
       console.log('made it through proms');
    }catch(err){
      console.log("epic fail")
    }
    console.log(m1);
    console.log(m2);
    console.log(m3);
}
result();