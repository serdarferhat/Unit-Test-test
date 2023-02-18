import './App.css';
import Onay from './onay/Onay';
import Cesit from './pages/Cesit';
import Sos from './pages/Sos';

function App() {
  return (
    <div className="App">
      <h1>DONDURMAM KAYMAK</h1>
      <Cesit/>
      <Sos/>
    <Onay/>
    </div>
  );
}

export default App;
