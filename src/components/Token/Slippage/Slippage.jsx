import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
export function Slippage(){
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
            value:buySellBSCdata?buySellBSCdata.buyTax:null,
            // value:'one'
        },
        {
            name:'Sell',
            value:buySellBSCdata?buySellBSCdata.sellTax:null,
            // value:'two'
        },

    ]

    return (
        <>
        <div className='col-12 col-md-6'>
            <ListGroup listdata={data} title='Slippage'/>
        </div>
       
        </>
    )
}