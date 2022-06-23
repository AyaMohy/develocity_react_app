import React ,{useState , useEffect} from "react";
import styles from "./Search.module.css";
import {FaCircle} from 'react-icons/fa';
import {BiBitcoin} from "react-icons/bi";
import axios from 'axios';


const Search =() =>{

    const [item,setItem] = useState("Bitcoin");
    const [result , setResult] = useState([]);
    const [debounce,setDebounce] = useState(item);

    useEffect(()=>{

        const timeOut = setTimeout (() =>{
            setDebounce(item)
        },1200)

        return ()=>{
            clearTimeout(timeOut)
        }

    } ,[item]);

    useEffect(()=>{
    
        const Search = async () =>{

            const respond = await axios.get("",{
                params :{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounce
                }
            });
            setResult( respond.data.query.search );

        }

        Search();

    },[debounce])



    return(
        <div className="">
        <span className={styles.searchNote}><FaCircle className={styles.dot}/>Enter the token name and click scan</span>

        <div className={styles.searchSection}>
        <input type="text" className={styles.searchInput} onChange={(e) => setItem(e.target.value)} value={item}/>
        <button className={styles.searchBtn}>scan</button>
        </div>
        <div className={styles.searchNote2}>
        <span className={styles.note}>sponsered</span>
        <span className={styles.note2}><BiBitcoin className={styles.bitcoin}/>start to invest in bitcoin private with only 10$</span>
        </div>

        {
            result.map((el) =>{
                return(
                    <table key={el.pageid}>
                    <td>{el.title}</td>
                    <td><span dangerouslySetInnerHTML={{__html: el.snippet}}/></td>
                    </table>
                )
            })
        }

        </div>
    )
}

export default Search;