import {LeftBarToken} from '../../components/Leftheader/LeftBarToken'
import {NavDisplay} from '../../components/NavDisplay'
import SocialBar from '../../components/common/SocialBar/SocialBar'
import Search from '../../components/common/Search/Search'
import {GasFee} from '../../components/Gas/GasFee'
export function Token(){
    return(
        <>
            <div className="App">
                <SocialBar/>
                <NavDisplay/>
                <div className='d-flex mt-4 flex-wrap justify-content-between container'>
                    <div className='col-12 col-md-5'> <LeftBarToken/></div>
                    <div className=' col-12 col-md-5'> <Search/></div>
                   
                   
                </div>
                <GasFee/>
                
            </div>
        </>
    )
}