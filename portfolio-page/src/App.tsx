import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';

function App() {
  return (
    <div className='body'>
      <Header />
      <About />
      <Education />
    </div>
  );
}

export default App;
