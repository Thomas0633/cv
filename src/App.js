import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Competences from './components/competences/Competences';
import FormaExp from './components/formationsExp/FormaExp';
import Projets from './components/projets/Projets';
import Photoshop from './components/photoshop/Photoshop';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='containerBlackApp'>
          <div className='arrowUp'>
            <a href='#header'><i className="fas fa-chevron-circle-up iconArrowUp"></i></a>
          </div>
          <Header />
          <Menu />
          <About />
          <Competences />
          <FormaExp />
          <Projets />
          <Photoshop />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
