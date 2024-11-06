import './App.css';
import Timer from '../src/components/Timer';
import FaceGrid from './pages/FaceGrid';
function App() {
  return (
    <div className="App">
      <Timer initialSeconds={10} />
      <FaceGrid />
    </div>
  );
}

export default App;
