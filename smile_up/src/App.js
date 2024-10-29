
import './App.css';
import Timer from '../src/components/Timer';
function App() {
  return (
    <div className="App">
      <Timer initialSeconds={10} />
    </div>
  );
}

export default App;
