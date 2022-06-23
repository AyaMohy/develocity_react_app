import logo from './logo.svg';
import './App.css';
import {LeftBar} from './components/LeftBar'
import {NavDisplay} from './components/NavDisplay'
function App() {
  return (
    <div className="App">
      <NavDisplay/>
      <LeftBar/>
    </div>
  );
}

export default App;
