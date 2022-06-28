import React from "react"
import styles from "./BreadCrumbBar.module.css"
import {AiOutlineUpload} from "react-icons/ai"



const BreadCrumbBar = () =>{
    return(
        <div className="container">
        <div className={styles.breadCrumbBar}>
        <ul className={styles.breadCrumb}>
        <li>home</li>
        <li>scanner</li>
        <li>bitcoin</li>
        </ul>
        <div className={styles.btns}>
        <button>download report</button>
        <button>share<AiOutlineUpload className={styles.shareIcon}/></button>
        </div>
        </div>



        </div>
    )

}


export default BreadCrumbBar