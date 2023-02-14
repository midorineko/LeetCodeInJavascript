const first = (cb) => {
  setTimeout(()=>{
    cb("1");
  }, 10)
}

const second = (cb) =>{
  setTimeout(()=>{
    cb('2');
  }, 5)
}

const third = (cb) =>{
  setTimeout(()=>{
    cb('3')
  }, 1)
}

first(((message)=>{
  console.log(message)
  second((message)=>{
    console.log(message)
    third((message)=>{
      console.log(message)
    })
  })
}))