import {LeftBar} from '../../components/LeftBar'
import {NavDisplay} from '../../components/NavDisplay'
import SocialBar from '../../components/common/SocialBar/SocialBar'
import Search from '../../components/common/Search/Search'
function Home() {
  return (
    <div className="App">
      <SocialBar/>
      <NavDisplay/>
      <div className='d-flex container'>
        <LeftBar/>
        <Search/>
      </div>
      
    </div>
  );
}

export {Home};

