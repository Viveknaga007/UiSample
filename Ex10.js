var alluserData = [];
function logstuff(userData) {
    if(typeof userData === "string")
    {
        console.log(userData);
    }
    else if(typeof userData === "object")
    {
        for(var item in userData)
        {
            console.log(item + ": "+ userData[item]);
        }
    }
}
function getInput (options, callback) {
    alluserData.push (options);
    callback (options);    
}
getInput ({name:"Rich", speciality:"javascript"}, logstuff);