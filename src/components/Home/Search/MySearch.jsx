import React ,{ useEffect , useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

import styles from "./Search.module.css";
import {FaCircle} from 'react-icons/fa';
import {BiBitcoin} from "react-icons/bi";
import {BiCopy} from "react-icons/bi";
import {BsArrowRight} from "react-icons/bs"
import {fetchResult} from '../../../Pages/DataFetch/FetchSearchData'






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
        <div className="container">
        <span className={styles.searchNote}><FaCircle className={styles.dot}/>Enter the token name and click scan</span>

        <div className={styles.searchSection}>
        <input type="text" className={styles.searchInput} onChange={(e) => setTerm(e.target.value)} value={term}/>
        <button className={styles.searchBtn} disabled={disable}>scan</button>
        
       
        </div>
        <div className={styles.searchNote2}>
        <span className={styles.note}>sponsered</span>
        <span className={styles.note2}><BiBitcoin className={styles.bitcoin}/>start to invest in bitcoin private with only 10$</span>
        </div>

        <div >
       
                  <div className={styles.searchBlock}>
                  { search.status =="success" && dataGet?  
                  <>
                   { dataGet.map(el => 
                     
                        (
                            <div className={styles.resultRecord}>
                            <div>
                            <div className={styles.titleBar}>
                            <img src={el.logo} alt="logo" className={styles.logo}/>
                            <h1>{el.name}</h1>
                            <span>{el.symbol}</span>
                            </div>
        
                            <div className={styles.details}>
        
                            <div className={styles.address}>
                            {el.contractAddress}
                            <button><BiCopy/></button>
                            </div>
        
                            <div className={styles.scan}>
                             Score:{Math.round(el.contractScan)}
                             </div>
                            </div>
                            </div>
                            <button className={styles.arrowBtn}><BsArrowRight/></button>    
                            </div>     
                    )
                    )
                        }
                    </>
                    :
                    ""      
                 }


                 { search.status =="failed" && <div>no result found</div> }
                 { search.status =="loading" && <div>loading...</div> }
                    
                   </div>
               
        </div>

        

        </div>
    )
 

}
  
   





export default MySearch;