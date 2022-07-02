import React ,{ useEffect , useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import styles from "./Search.module.css";
import {FaCircle} from 'react-icons/fa';
import {BiBitcoin} from "react-icons/bi";
import {BiCopy} from "react-icons/bi";
import {BsArrowRight , BsFillPatchCheckFill} from "react-icons/bs"
import {fetchResult} from '../../../Pages/DataFetch/FetchSearchData';






const MySearch =() =>{
 
    const [term,setTerm]= useState(null);
    const [dataGet, setdataGet] = useState(null);
    const [disable,setDisable]=useState(true);

 
    
 const search = useSelector(state => state.Search)
 console.log(search)
 const dispatch = useDispatch ();
//  console.log(search.status =="success" && search.data.payload)
    useEffect(()=>{
        dispatch (fetchResult (term));

    },[term]);

    useEffect(() =>{
        if(term ){
            if((term.startsWith("0x")) && (term.length === 42))
            {
                setDisable(false);
            }else{
         const timeOut=   setTimeout(()=>{
            const myData = search.data.payload.result ;
            const newMyData = myData.map(e=> ({
                name: e.contractInfo.name,
                symbol:e.contractInfo.symbol,
                logo: e.contractInfo.logo,
                interest:e.interest,
                listed: e.isNotListed,
                 contractAddress : e.contractAddress,
                 contractScan : e.contractScan}) )
            console.log(newMyData);
            setdataGet(newMyData)
         },800)
         setDisable(true);
          return() => clearTimeout(timeOut);
         
        }
        }else{
            // setdataGet(null);
        }

     
        
        

},[search, term])
    console.log(dataGet)
    return(
        <div>
        <span className={styles.searchNote}><FaCircle className={styles.dot}/>Enter the token name and click scan</span>

        <div className={styles.searchSection}>
        <input type="text" className={styles.searchInput} onChange={(e) => setTerm(e.target.value)} value={term}/>
        <button className={styles.searchBtn} disabled={disable}>scan</button>
        
       
        </div>
        <div className={styles.searchNote2}>
        <span className={styles.note}>sponsered</span>
        <span className={styles.note2}><BiBitcoin className={styles.bitcoin}/>start to invest in bitcoin private with only 10$</span>
        </div>

        { search.status =="success" && dataGet? 
            <div >
               <div className={styles.searchBlock}>
                { dataGet.map(el => 
                  
                     (
                         <div className={styles.resultRecord}>
                         <div>
                         <div className={styles.titleBar}>
                         {el.logo ? <img src={el.logo} alt="logo" className={styles.logo} /> :
                        //    create a new image with the first letter of the name token
                        <div className={styles.icon_token_letter}>
                            <h6 className={styles.icon_token_text}>{el.name.charAt(0)}</h6>
                        </div>

                    }
                {/* <img src={el.logo} alt="logo" className={styles.logo}/> */} 
                         <h1>{el.name} </h1>
                        
                         <span>{el.symbol} {el.listed? <BsFillPatchCheckFill className={styles.checkIcon}/> : null}</span>
                         </div>
     
                         <div className={styles.details}>
     
                         <div className={styles.address}>
                         {el.contractAddress}
                         <button><BiCopy/></button>
                         </div>
     
                        
                        {
                            (el.contractScan <59) &&  <div className={styles.scanRed}>
                            Score:{Math.round(el.contractScan)}
                            </div>
                        }

                        {
                            (el.contractScan >59 && el.contractScan<84) &&  <div className={styles.scanYellow}>
                            Score:{Math.round(el.contractScan)}
                            </div>
                        }

                        {
                            (el.contractScan >84 ) &&  <div className={styles.scanGreen}>
                            Score:{Math.round(el.contractScan)}
                            </div>
                        }
                         
                         
                         </div>
                         </div>
                         <button className={styles.arrowBtn}><BsArrowRight/></button>    
                         </div>     
                 )
                 )
                       
              }
                 
                </div>
            
            </div>:''
    }
    
    { search.status =="loading" && <div>loading...</div> }
        { search.status =="failed" && '' }

        </div>
    )
 

}
  
   





export default MySearch;