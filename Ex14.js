//Arrow function

var test = function sample (){
    //logic
    //return

    return obj;
    console.log(this)
}

var test = () => {
    return ;
}

////

var test = () => ({})
////

var test = () => {console.log('test')}
console.log(test);

console.log(typeof(test));


////// let //////

var hoisted;
console.log(hoisted);

///

let hoisted;
console.log(hoisted);

let name = 'abc';
const name2 = 'xyz';

name = 'abc2';
name2 = 'xyz2';






