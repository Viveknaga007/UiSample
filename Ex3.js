var sampleFun= function(){
  console.log(this.name);
}
var me={
  name: 'vivek',
  sampleFun: sampleFun
}
var you={
  name: 'victor',
  sampleFun: sampleFun
}
me.sampleFun(); 
you.sampleFun();