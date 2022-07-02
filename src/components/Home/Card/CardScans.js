import React from 'react'
import styles from './CardScans.module.css';
import Header from './Header';
import RowScans from './RowScans';



const CardScans = ({ popularScans, title }) => {

    return (
        <div className={styles.container_card}>

            <div className={styles.card}>
                <Header title={title} />
                {
                    popularScans ? popularScans.map((item, index) => (
                        item.contractInfo && index + 1 <= 5 ? <RowScans key={index} number={index + 1} image={item.contractInfo.logo} nametoken={item.contractInfo.name} scans={item.interest} sponsored="fales" contract={popularScans[0]["contractAddress"]} title={title} /> : null
                    )) : null
                }



            </div>
        </div>
    )
}

export default CardScans