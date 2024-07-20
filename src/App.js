import React, { useRef } from 'react';
import './App.css';
import Depoiments from './components/Depoiments';
import Experience from './components/Experience';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Headsets from './components/Headsets';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Values from './components/Values';

function App() {
  const scrollToRef = useRef(null);

  return (
    <div>
      <NavBar scrollToRef={scrollToRef}/>
      <Main scrollToRef={scrollToRef} /> 
      <Experience scrollToRef={scrollToRef}/>
      <Headsets/>
      <Depoiments/>
      <Values/>
      <Explore scrollToRef={scrollToRef} />
      <Footer/>
    </div>
  );
}

export default App;
