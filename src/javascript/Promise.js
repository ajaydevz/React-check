let name1 = setTimeout(()=>{
    console.log("hey my name is Aswin")
},2000);

let name2 = setTimeout(() => {
    console.log("my name is Ajaydev")
},1000); 

Promise.all([name1,name1]).then((resolve) =>{
    console.log(resolve)
}).catch((reject) =>{
    console.log(reject)
})

