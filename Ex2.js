var me2 = {
    name: 'foo',
    Myname: funtion(){
        console.log(this.name)
    }
    }
me.Myname;//uncaught syntax error when executing me.Myname;
me.MyName();//uncaught syntax error: Unexpected token
