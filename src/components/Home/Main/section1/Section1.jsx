import { LeftBar } from "../../leftheader/LeftBar"
import MySearch from '../../Search/MySearch'
export function Section1(){
    return(
        <>
            <div className="d-flex container align-items-center justify-content-between flex-wrap">
                <div className="col-6"><LeftBar/></div>
                <div> <MySearch/></div>
            </div>
        </>
    )
}