////////prototype based inheritence/////////

class SampleClass {
   constructor(a, b){
    this.a = a;
   this.b = b;        
    }

    sampleFun1(){
        console.log("SampleFun1 from sampleClass");
    }
    sampleFun2(){

    }

}

class SampleClass2 extends SampleClass {
    constructor(){
        super(1,2);
        super.sampleFun1();
    }
    
}

new SampleClass(1,2);
new SampleClass2();


///////map function//////


let arr = [1,2,3];

let modified = arr.map(function(item){
    return item*3;
});
console.log(modified);


