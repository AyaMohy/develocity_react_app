import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
export function LiquidityList(){
    const contractAddress = useSelector(state =>state.contractAddress.contractAddress);
    const buySellBSCapi = useSelector(state => state.GetBuySellBSCdata.data);
    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchBuySellBSCResult(contractAddress));
  
    },[dispatch , contractAddress]);
    const buySellBSCdata = buySellBSCapi.result;

    const [data, setData]=useState([
        {
            name:'Burned Liquidity',
            // value:buySellBSCdata?buySellBSCdata.buyTax:null,
            value:'9'
        },
        {
            name:'Added Liquidity',
            // value:buySellBSCdata?buySellBSCdata.mint:null,
            value:'12'
        },
        {
            name:'Removed Liquidity',
            // value:buySellBSCdata?buySellBSCdata.mint:null,
            value:'8'
        },

    ])

    return (
        <>
        <div className='col-12 col-md-6'>
            <h2 className='text-muted  mx-2'>Liquidity Metrics</h2>
            <ListGroup listdata={data} title='Liquidity'/>
        </div>
       
        </>
    )
}