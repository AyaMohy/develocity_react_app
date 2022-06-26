import {LeftBarToken} from '../../components/Token/Leftheader/LeftBarToken'
import {NavBar} from '../../components/Home/Header/NavBar'
import Search from '../../components/Home/Search/MySearch'
import {GasFee} from '../../components/Token/Gas/GasFee'
export function Token(){
    return(
        <>
            <div className="App">
               
                <NavBar/>
                <div className='d-flex mt-4 flex-wrap justify-content-between container'>
                    <div className='col-12 col-md-5'> <LeftBarToken/></div>
                    <div className=' col-12 col-md-5'> <Search/></div>
                </div>
                <GasFee/>
                
            </div>
        </>
    )
}