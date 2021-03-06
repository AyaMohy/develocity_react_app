import { useState } from "react"
import HeaderText from "../HeaderText/HeaderText"
import { Placeholder } from "../../common/Placeholder/Placeholder"
import styles from './ListGroup.module.css'

export function ListGroup({ listdata, title }) {
    let stylingdata={
        width:'100px',
        height:'20px'
    }
    console.log(listdata)
   
    return (
        <>
            <div className={`text-muted  mt-3 ${styles.title}`}>
                <HeaderText nameHeader={title} />
            </div>

            <div className={`mx-2 ${styles.groupcard}`}>
                {
                    listdata  ?
                        <>
                            {listdata.map((i) =>
                            (
                                <div className={`d-flex justify-content-between px-3 py-2 border-bottom  ${styles.listitemcontainer} `}>
                                    {i.value ?  <>
                                        {i.name} <span>${i.value}</span> 
                                    </>:
                                    <>
                                        <Placeholder styling={stylingdata}/>
                                        <Placeholder styling={ {width:'50px',height:'20px'}}/>
                                    </>
                                    }
                                   
                                    
                                    
                                </div>
                            )
                            )}
                        </>
                        : ''
                }
            </div>
            

        </>
    )
}