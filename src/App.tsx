import React from 'react';
import Header from './components/Header';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DressCode />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
