var Person = function(name,age) {
    return {
        name: name,
        age: age,
        myName: function() {
            console.log(this.name)
        },
        friend: {
            name: 'xyz',
            myName: function(){
                console.log(this.name)
            }
        }
    }
}

var me = Person('abc',1);
me.myName();
me.friend.myName();

var sampleobj = new Person () ;
console.log(sampleobj);