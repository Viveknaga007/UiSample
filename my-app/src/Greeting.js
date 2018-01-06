import React from 'react';


  function Greeting(user) {
    if (user) {
      return <p>{formatName(user)}!</p>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
  function formatName(user) {
    return (
      user.firstName + ' ' + user.lastName
    );
  }
  
  
  
  export default Greeting;  
  