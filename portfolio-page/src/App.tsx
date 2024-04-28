import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className='body'>
      <Header />
      <About />
    </div>
  );
}

export default App;
