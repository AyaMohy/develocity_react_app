import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import styles from "./ModalForm.module.css";


const BackDrop =({close}) =>{
    return(
        <div className={styles.backDrop} onClick={()=>close()}></div>
    )
}

const Overlay =() =>{
    return(
        <div className={styles.overlay}>
        </div>
    )
}
const ModalForm = ({show , close}) =>{
    return(
        show &&(
        <Fragment>
      {
        ReactDOM.createPortal(
            <Fragment>
            <BackDrop close={close}/>
            <Overlay/>
            </Fragment>,
            document.getElementById('ModalForm')
        )
      }
        
        
        
        </Fragment>
        )
    )
};





export default ModalForm;