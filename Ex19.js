// code

function discountprices(prices, discount){
    var discounted=[];
    for(var i=0; i<prices.length;i++){
        var discountedprice=prices[i]*(1-discount);
        var finalprice= Math.round(discountedprice*100)/100;
        discounted.push(finalprice);
    }
console.log(i);
console.log(discountedprice);
console.log(finalprice);

return discounted;

}

discountprices([100,200,300],.5);



//output:
3
150
150
(3) [50, 100, 150]

//////  var replaced with let

function discountprices(prices, discount){
    let discounted=[];
    for(let i=0; i<prices.length;i++){
        let discountedprice=prices[i]*(1-discount);
        let finalprice= Math.round(discountedprice*100)/100;
        discounted.push(finalprice);
}
console.log(i);
console.log(discountedprice);
console.log(finalprice);

return discounted;

}

discountprices([100,200,300],.5);

///i is not defined
//we cannot access i,  discountedprice and  finalprice outside its block as they are initialized by let.

