import React ,{ useEffect} from "react";
import styles from "./TrustScore.module.css";
import ReactApexChart from 'react-apexcharts';

import {useDispatch, useSelector} from 'react-redux';
import { fetchScore } from "../../../Pages/DataFetch/FetchTrustScoreData";
import { useParams } from "react-router-dom";


const TrustScore =() =>{
  const param = useParams()
  const contractAddress = param.contractAddress;
  
  // console.log(param.contractAddress ,'=-=-===== >>>');


  const score = useSelector(state => state.Score.data)
  // console.log(score)
  

  const dispatch = useDispatch ();
  useEffect(()=>{
      dispatch (fetchScore (contractAddress));

  },[dispatch , contractAddress]);
  const scoreData = score.result;
  // console.log(scoreData ,'========= Score data ')
// console.log(fetchScore ({contractAddress}))


    var options = {
        series: [scoreData? Math.round(scoreData.contractScan) :null],
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          track:{
            background:"rgba(115,136,169,0.35)",
          
           
          },
          hollow: {
            size: '62',
           
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#fff",
              fontSize: "12px",
              fontWeight:"400",
              fontFamily: 'SF Pro Display Medium'
            },
        },
        value: {
          color: "#fff",
          fontSize: "48px",
          fontWeight:"600",
          show: true
        },
      },
    },
    fill: {
      type: "solid",
      colors: ['#EC6666', '#EC6666', '#EC6666']
    },
    stroke: {
      lineCap: "round",
    },
    labels: ['Total Score'],
    }
   

  

    return(
        <div >
        <div className={styles.trustScoreBlock}>
        <span className={styles.blockTitle}>trust score</span>


        <div className={styles.chart} id="chart" >
        <ReactApexChart options={options} series={options.series} type="radialBar" height={250} width={450}/>
      </div>
      <h2 className={styles.title}>moderate</h2>

      <ul className={styles.chartList}>
      <li className={styles.critical}>critical issues<span> {scoreData? scoreData.numberOfHighIssue :null} </span></li>
      <li>important issues<span className={styles.important}>{scoreData? scoreData.numberOfMediunIssue :null}</span></li>
      <li>informational issues<span className={styles.information}>{scoreData? scoreData.numberOfInformationalIssue :null}</span></li>
     
      </ul>

       


        </div>


        </div>
    )
}


export default TrustScore;