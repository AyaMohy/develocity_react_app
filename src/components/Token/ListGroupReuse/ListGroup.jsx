import { useState } from "react"
import styles from './ListGroup.module.css'

export function ListGroup({listdata,title}){
   
    return(
        <>
            <h5 className="mx-2 my-3">{title}</h5>
            <div className={`mx-2 ${styles.groupcard}`}>
               {
                listdata?
                <>
                    {listdata.map( (i)=>
                    (
                        <div className={`d-flex justify-content-between px-3 py-2 border-bottom ${styles.listitemcontainer} `}>{i.name} <span>${i.value}</span></div>
                    )
                    )}
                </>
                :''
               } 
            </div>
        
        </>
    )
}