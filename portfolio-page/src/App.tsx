import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactSidebar from './components/ContactSidebar';

function App() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Projects />
      <Footer />
    </>
      
  );
}

export default App;
