import React from "react";
import {ButtonComponent} from './common/ButtonComponent'
import styles from './leftbar.module.css'
export function LeftBar(){
    const buttondata={
        text:'See how it works',
        color:"white",
        bg:"#9F4AE8"
    }
    return (
        <>
            <section className="mt-5 text-start col-6">
                <div className=" ">
                <span className="px-3 py-2 " style={{color:'#9F4AE8',fontWeight:600,fontSize:'12px',backgroundColor:'rgba(159, 74, 232,0.2)',borderRadius:'2px'}}>BETA STAGE</span>
                <h2 className={`mt-3  col-12 ${styles.epiloguefont}`}  style={{fontSize:'62px',color:'#333333'}}>
                    Became a PRO in Crypto Investments
                </h2>
                <p style={{fontSize:'22px',color:'#888'}}>
                    We are excited to share our Beta version of the <br/> Develocity Multifunctional tool, that works on BSC. 
                </p>
                <a className={styles.linkitemopcity}>
                <ButtonComponent data={buttondata}/>
                </a>
                </div>
            </section>
        </>
    )
}