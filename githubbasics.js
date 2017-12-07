var foo = "bar";
function bar(){

    var foo = "baz";
    console.log(foo);
    return foo;
    }
function baz(foo){
    foo = "bam";
    console.log(foo);
    bam = "yay"
}

console.log(foo);
bar();
baz();
console.log(bam);


