import React, { Component } from 'react';
import logo from './logo.svg';
import {FractalArea} from './components/FractalArea'
import {FormCreateFractal} from './components/FormCreateFractal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="container">
            <a href="#" className="header__title">Лабораторная работа №2</a>
          </div>
        </header>
        <div className="main">
          <div className="container">
            <div className="main__form">
              <FormCreateFractal />
            </div>
            <div className="main__fractal-area">
              <FractalArea />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
