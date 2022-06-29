import ReactApexChart from 'react-apexcharts';
import React ,{  useState} from "react";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

export function ProgressCard({carddata}){
    
    const [options,setTOptions]= useState(
        {
            series: [carddata.series],
            chart: {
                type: 'radialBar',
                height: 130,
            },
          plotOptions: {
            radialBar: {
              track:{
                background:"rgba(115,136,169,0.35)",
              },
              hollow: {
                size: 55,
                margin: 0,
              },
              dataLabels: {
                showOn: "always",
                name: {
                  offsetY: -20,
                  show: false,
                },
                value: {
                    color: carddata.barpercentcolor,
                    fontSize: "22px",
                    offsetY: 10,
                    fontWeight:"500",
                    show: true,
                    fontFamily: 'SF Pro Display Medium'
                  },
            },
          
          },
        },
        fill: {
          type: "solid",
          colors: [carddata.barcolor, carddata.barcolor, carddata.barcolor]
        },
        stroke: {
          lineCap: "round",
        },
        }
    );

    return(
        <>
            <div className='px-2 pt-0 d-flex flex-column '   style={{width:'250px',height:'125px',backgroundColor:'#F3F2F7'}}>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='text-start flex-grow-1 '>
                  <h5 style={{fontFamily: 'SF Pro Display Medium'}}>{carddata.title}</h5>
                  <p><span className='fs-3' style={{ fontFamily: 'SF Pro Display Semibold'}}>5</span>/ <span style={{fontFamily: 'SF Pro Display Regular'}}>8</span></p>
                </div>
                <div className='col-5'>
                  <div  id="chart" >
                      <ReactApexChart  options={options} series={options.series} type="radialBar" height={130} width={130}/>
                  </div>
                </div>
              </div>

                <div className='text-start' style={{marginTop:'-15px'}}>
                    {
                      carddata.precentageover>0? <BsFillArrowUpCircleFill className='text-success'/>:<BsFillArrowDownCircleFill className='text-danger'/> 
                    }
                      <span className='ps-2' style={{fontFamily: 'SF Pro Display Medium'}}>
                        {
                          carddata.precentageover>0?<span className="text-success">{carddata.precentageover}%</span>:
                          <span className="text-danger">{carddata.precentageover}%</span>
                        }
                        </span> than average
                        
                  </div>
               
            </div>
        </>
    )
}