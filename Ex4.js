var myname = function(name){
    console.log('hello '+ this.name)
};
var me={
    name: 'vivek',
    myname: function() {
        console.log(this.name);
    }
  }
  var you={
    name: 'victor',
    myname: function() {
        console.log(this.name);
    }
  }

  console.log(myname.bind(me));
  console.log(myname.bind(you));
  
  document.write("Hello World!");
  //console.log(myname());

  console.log(myname.call(me));
  console.log(myname.apply(me));
  
  console.log(myname.call(you));
  console.log(myname.apply(you));
  