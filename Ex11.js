var clientData = {
    id: 094545,
    fullName: "Not set",
    setUserName: function (firstName, lastName) {
        this.fullName = firstName + " " + lastName;        
    }
}
function getUserInput(firstName, lastName, callback){
    callback (firstName, lastName);
}
getUserInput ("Barack", "Obama", clientData.setUserName);

console.log (clientData.fullName);
console.log (window.fullName);


///////////////////////

function getUserInput(firstName, lastName, callback, callbackobj){
    callback.apply(callbackobj, [firstName, lastName]);
}
getUserInput("Barack", "obama", clientData.setUserName, clientData);
console.log (clientData.fullName);


