import React from 'react'
import styles from './CardScans.module.css';
import Header from './Header';
import RowScans from './RowScans';
import logo from '../../../assets/images/tron.png'



const CardScans = ({ popularScans }) => {

    return (
        <div className={styles.container_card}>

            <div className={styles.card}>
                <Header />
                {
                    popularScans ? popularScans.map((item, index) => (
                        item.contractInfo && index + 1 <= 5 ? <RowScans key={index} number={index + 1} image={logo} nametoken={item.contractInfo.name} scans={item.interest} sponsored="fales" contract={popularScans[0]["contractAddress"]} /> : null
                    )) : null
                }



            </div>
        </div>
    )
}

export default CardScans