import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
export function Trading(){
    const contractAddress = useSelector(state =>state.contractAddress.contractAddress);
    const buySellBSCapi = useSelector(state => state.GetBuySellBSCdata.data);
    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchBuySellBSCResult(contractAddress));
  
    },[dispatch , contractAddress]);
    const buySellBSCdata = buySellBSCapi.result;

    const data=[
        {
            name:'Buy',
            value:buySellBSCdata?buySellBSCdata.buyGasFeeUSD:null,
            // value:'one'
        },
        {
            name:'Sell',
            value:buySellBSCdata?buySellBSCdata.sellGasFeeUSD:null,
            // value:'two'
        },
        {
            name:'Transfet',
            value:buySellBSCdata?buySellBSCdata.tranferGasFeeUSD:null,
            // value:'three'
        },

    ]

    return (
        <>
        <div className='col-12 col-md-6 '>
            <h2 className='text-muted mx-2'>Trading</h2>
            <ListGroup listdata={data} title='Gas Fee'/>
        </div>
       
        </>
    )
}