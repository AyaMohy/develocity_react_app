import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
export function Slippage(){
    const contractAddress = useSelector(state =>state.contractAddress.contractAddress);
    const buySellBSCapi = useSelector(state => state.GetBuySellBSCdata.data);
    const statusBSCapi = useSelector(state => state.GetBuySellBSCdata.status);
    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchBuySellBSCResult(contractAddress));
  
    },[dispatch , contractAddress]);
    const buySellBSCdata = buySellBSCapi.result;

    const [data, setData]=useState([
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

    ])

    return (
        <>
       
        {(statusBSCapi=='success' || statusBSCapi=='loading')  &&
         <div className='col-12 col-md-6'>
            <ListGroup listdata={data} title='Slippage'/>
        </div>}

        
        

        {statusBSCapi=='failed' && ''}

       
        </>
    )
}