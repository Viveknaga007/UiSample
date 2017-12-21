function done(){
    console.log("Done");
}

function increment(num, callback){
    for(var i = 0; i <=num; i++){
        console.log(i);
        }
        return callback();
}

increment (10, done);

