import React, { Component } from 'react';
import Menu from './component/Menu';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import './App.css';
import FooterClass from './component/FooterClass';

class App extends Component {
 
  render(){
    return (
      <div className="App" >
        <header className="App-header">
          <Menu />
        </header>
        
      </div>
    );
 }

}

export default App;
