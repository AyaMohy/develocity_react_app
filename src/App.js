
import './App.css';
import {LeftBar} from './components/LeftBar'
import {NavDisplay} from './components/NavDisplay'
import SocialBar from './components/common/SocialBar/SocialBar'
import Search from './components/common/Search/Search'
function App() {
  return (
    <div className="App">
      <SocialBar/>
      <NavDisplay/>
    </div>
  );
}

export default App;
