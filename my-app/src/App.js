import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample.js'
import Greeting from './Greeting.js'
import A from './Aname.js'
import Comment from './Comment.js'
import Clock from './Clock.js'


class App extends Component {
  
  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>  
             
        <p> Hello,   {Greeting(user)}    </p>    

        
        <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />
    
      <A />
      <Clock />

      <Sample />
    
   
        </div>
        
       
       
    );
  }
  
}


const comment = {
  date: new Date(),
  text:
    'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:
      'http://placekitten.com/g/64/64',
  },
};


const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};






export default App;
