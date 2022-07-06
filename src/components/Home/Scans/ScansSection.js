import React, { useEffect, useState } from 'react'
import star from '../../../assets/images/star.png';
import last from '../../../assets/images/last.png';
import recent from '../../../assets/images/recent.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import HeaderCard from '../HeaderCard/HeaderCard';
import CardScans from '../Card/CardScans';
import { io } from "socket.io-client";


const ScansSection = () => {
    const [popularScans, setPopularScans] = useState([]);
    const [recentScans, setRecentScans] = useState([]);
    const [lastScans, setLastScans] = useState([]);

    useEffect(() => {
        const socket = io('https://api.develocity.finance');

        socket.on("popularScan", (data) => {
            data.map((item)=>{
                console.log('setPopularScans ==', item?.contractInfo);
            })
            setPopularScans(data);
        })
        socket.on("highScore", (data) => {
            // data.map((item)=>{
            //     console.log('setRecentScans ==', item?.contractInfo?.name,item.contractAddress);
            // })
            setRecentScans(data);
        }
        )
        socket.on("latestScan", (data) => {
            // data.map((item)=>{
            //     console.log('setLastScans ==',item?.contractInfo?.name, item.contractAddress);
            // })
            setLastScans(data);

        })

        return () => {
            socket.off("popularScan");
            socket.off("highScore");
            socket.off("latestScan");
            socket.close();
        }
    }, []);


    return (
        <div className="container">
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={star} title="Popular Today" />
                    <CardScans popularScans={popularScans} title="Scans" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={last} title="Last Scan" />
                    <CardScans popularScans={lastScans} title="Score" />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={recent} title="Highest Score" />
                    <CardScans popularScans={recentScans} title="Score"/>
                </Col>
            </Row>
        </div>
    )
}

export default ScansSection