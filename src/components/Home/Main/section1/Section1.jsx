import { LeftBar } from "../../leftheader/LeftBar"
import MySearch from '../../Search/MySearch'
export function Section1(){
    return(
        <>
            <div className="d-flex container align-items-center justify-content-between flex-wrap">
                <div className=" col-md-6 col-xs-12"><LeftBar/></div>
                <div className=" mt-3  "> <MySearch/></div>
            </div>
        </>
    )
}