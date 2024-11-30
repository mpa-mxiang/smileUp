import './App.css';
import React, { useState } from 'react';
import Timer from './components/Timer';
import FaceGrid from './pages/FaceGrid';
import Navbar from './components/Navbar';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl font-bold text-red-400">Smile Up</h1>
      <Timer initialSeconds={0} setIsStarted={setIsStarted} />
      {isStarted && <FaceGrid />}
    </div>
  );
}

export default App;
