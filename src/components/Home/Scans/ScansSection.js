import styles from './ScansSection.module.css';
import React, { useState } from 'react'
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

    const socket = io('https://api.develocity.finance');

    socket.on("connect", () => {
        const engine = socket.io;
        engine.on("packet", ({ type, data }) => {
            // console.log(data);
            if (data[0] === "popularScan") {
                setPopularScans(data[1]);
            }
            if (data[0] === "highScore") {
                setRecentScans(data[1]);
            }
            if (data[0] === "latestScan") {
                setLastScans(data[1]);
            }



        });
    });


    return (
        <div className="container">
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <HeaderCard image={star} title="Popular Today" />
                    <CardScans popularScans={popularScans} />
                </Col>
                <Col  lg={4} md={6} sm={12}>
                    <HeaderCard image={last} title="Last Scan" />
                    <CardScans popularScans={lastScans} />
                </Col>
                <Col  lg={4} md={6} sm={12}>
                    <HeaderCard image={recent} title="Recently Verified" />
                    <CardScans popularScans={recentScans} />
                </Col>
            </Row>
        </div>
    )
}

export default ScansSection