var isMomHappy = true;

var willIGetNewPhone = new Promise(
    function(resolve, reject) {
    
       if(isMomHappy){
           var phone = {
               brand: 'iphone',
               color: 'black'
            };
          resolve(phone);
       } else {
             var reason = new Error('mom is not happy');
           reject(reason);
        }
    }    
);

var askMom = function () {
    willIGetNewPhone
        .then(function(fulfilled) {
            //yay, got phone
       console.log(fulfilled);
           // output:{brand: '', colo: ''}
          }) .catch(function(error){
              //oops, mom didn't buy
        console.log(error.message);
        // output: 'mom is not happy'
        })

};

askMom();

/////

var showOff = function(phone) {
    return new Promise(
        function(reslove, reject){
            var message = 'Hey friend, I have a new' +
                  phone.color + ' ' + phone.brand ;
            resolve(message);
        }
    );
};

//////

var askMom = function () {
    willIGetNewPhone
    .then(showOff)  // chain it here
    .then(function(fulfilled) {
        console.log(fulfilled);
        // output: 'Hey .....'
    })
    .catch(function(error) {
        
       console.log(error.message);
       // output: 'mom is not happy'
    });
};


