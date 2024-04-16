new Promise (function(res,rej){
    setTimeout(function(){
        console.log("hey world fff");
        res();
    } , 3000)
}).then(function(){
    console.log("Resolved sucessfully");
})

// resolved is directly connected with then