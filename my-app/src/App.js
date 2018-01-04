import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
         <h1>My first react application!</h1>
        
        <h1> Hello, {getGreeting(user)}  {tick()}  {A()}  </h1>

        <img src={user.avatarUrl}></img>

        
       
   
        </div>
        
       
       
    );
  }
  
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function A() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function tick() {
 
    return <h2>It is {new Date().toLocaleTimeString()}</h2>;  
  
 
}




function getGreeting(user) {
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

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};




export default App;
