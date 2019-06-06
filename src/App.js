import React, { Component } from 'react';
import './App.css';

//Components
import Form from './component/Form'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h1>Login Form</h1>
        </header>
        <Form/>
      </div>
      
    );
  }
}

export default App;
