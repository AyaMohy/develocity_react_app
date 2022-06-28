import styles from './ContractAnalysis.module.css'
import React ,{ useEffect , useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { fetchBSCResult } from "../../../Services/FetchBSCData";
export function ContractAnalysisCard(){
    let [returndata,setReturnData]=useState(null)
    let {contractAddress}=useSelector(state=>state.contractAddress)
    const bscdata = useSelector(state => state.GetBSCdata)
    // setReturnData(bscdata)
    console.log(bscdata.data)

    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchBSCResult ('0xC3262500039696Ff8ef9830Fb422Ab32b15Bd366'));
    },[contractAddress]);

    let [data, setData]=useState([
        {
            name:'Mint',
            // value:bscdata.data.result.mint,
            value:true
        },
        {
            name:'Burn',
            // value:bscdata.data.result.burn
            value:true
        },
        {
            name:'Reflection',
            // value:bscdata.data.result.reflection
            value:true
        },
        {
            name:'Self Destruction',
            // value:bscdata.data.result.selfdistruction
            value:false
        },
        {
            name:'Transfer Ownership',
            // value:bscdata.data.result.transferOwnership
            value:true
        },
        {
            name:'Antiwhale',
            // value:bscdata.data.result.antiWhale
            value:true
        },
        {
            name:'Antibot',
            // value:bscdata.data.result.antiBot
            value:false
        }


    ]);

    return(
        <>
            <div className="" style={{width:'250px'}}>
                <h5 style={{fontFamily: 'SF Pro Display Medium'}} className='text-start pt-3 pb-2'>Contract Analysis</h5>
                <div className={`list-group align-self-center border-0  ${styles.listGroup} `} >
                {data.map( (item)=>{
                    return ( 
                        <div className="list-group-item rounded-0 " >
                            <div className={` d-flex w-100 justify-content-between text-start  ${styles.listitem}`}  >
                                <p className="align-items-center d-flex h-100" >{item.name}</p>
                                <p className="align-items-center d-flex h-100 ">{item.value===true?<span className={` py-1 ${styles.detected }`}>Detected</span>:<span className={`py-1 ${styles.notdetected }`} >NOT DETECTED</span>}</p>
                            </div>
                        </div>
                       
                    )
                } )}
                </div>
            </div>
        </>
    )
}