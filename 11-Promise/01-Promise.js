const ticket = new Promise(function(resolve , reject){
    const isBoarded = false;
    if(isBoarded){
        resolve("You are in the Flight");
    } else{
        reject("Your flight has been cancelled")
    }
}) 

ticket
.then((data) =>{
    console.log("wohoo" , data);
})
.catch((data) =>{
    console.log("Oh no!" , data);
})

.finally(()=>{
    console.log("Always will be executed");
})