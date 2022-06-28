import React , {useEffect} from "react";
import styles from "./Distribution.module.css";
import ReactApexChart from 'react-apexcharts';
import {AiFillInfoCircle} from "react-icons/ai";
import {FaCircle} from "react-icons/fa";
import {useDispatch, useSelector} from 'react-redux';
import { fetchDistribution } from "../../../Pages/DataFetch/FetchDistributionData";





const Distribution = () =>{
    const dist = useSelector(state => state.Dist);

    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchDistribution ());
  
    },[dispatch]);


    const distData = dist.data.result;
  console.log(distData)

var   options = {
    series: [distData? Math.round( distData.realholdersPercentage )  : null, distData? Math.round( distData.airdropHoldersPercentage ) : null, distData? Math.round( distData.shrinkHoldersPercentage ): null],
    dataLabels: {
        formatter: function(val) {
            return (val.toFixed(0)+"%")
          }
      },
    chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          }
        
         
        }
      }],
      legend: {
        show: false
      },
      tooltip: {
        enabled:false
      
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '22px',
               
                color: '#dfsda',
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: '16px',
               
                color: undefined,
                offsetY: 16,
                formatter: function (val) {
                  return val
                }
              },
              total: {
                show: true,
                label: 'Total',
                color: '#373d3f',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b
                  }, 0)
                }
              }
            }
          }
        }
      },
     
      colors:['#7BE1D9' ,'#4CD696', '#EC6666' ]
    }


















   
  
  
      
    return (
        <div className="container">
        <h1 className={styles.title}>Distibution metrics</h1>
        <h6 className={styles.secondTitle}>holders distribution<AiFillInfoCircle className={styles.infoIcon}/></h6>
        <div className={styles.distChartDiv}>
        <div className={styles.chartInfo}>
        <div className={styles.infoRecord}>
        <div className={styles.infoTitle}>
        <h6><FaCircle className={styles.circleIconOne}/>real holders</h6>
        <span className={styles.chartNumber}>{distData? distData.realholders : null}</span>
        </div>
        <p>The actual number of token holders </p>
        
        </div>
        <div className={styles.infoRecord}>
        <div className={styles.infoTitle}>
        <h6><FaCircle className={styles.circleIconTwo}/>airdrop holders</h6>
        <span className={styles.chartNumber}>{distData? distData.airdropHolders : null}</span>
        </div>
        <p>Tokens are sent by token owner</p>
        </div>
        <div className={styles.infoRecord}>
        <div className={styles.infoTitle}>
        <h6><FaCircle className={styles.circleIconThree}/>wallet shrink</h6>
        <span className={styles.chartNumber}>{distData? distData.shrinkHolders : null}</span>
        </div>
        <p>wallets with small amounts after selling</p>
        </div>
        </div>
   <div className={styles.chart} id="chart">
   <ReactApexChart options={options} series={options.series} type="donut" />

   </div>

        </div>
        </div>
    )
}



export default Distribution;