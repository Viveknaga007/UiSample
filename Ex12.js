var conditionx = false;

var p = new Promise(function(resolve, reject) {
    
    if(conditionx){
        resolve('sucess!');
    }
    else {
        reject('failure!');
    }
});
p.then(function(data) {
    console.log(data);

}).catch(function(data2){
    console.log(data2);
})