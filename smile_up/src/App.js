import './App.css';
import Timer from '../src/components/Timer';
import FaceGrid from './pages/FaceGrid';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl font-bold text-red-400">Smile Up</h1>
      <Timer initialSeconds={0} />
      <FaceGrid />
    </div>
  );
}

export default App;
