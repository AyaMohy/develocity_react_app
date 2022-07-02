import React from "react";
import styles from "./CardScans.module.css";
import Header from "./Header";
import RowScans from "./RowScans";
import logo from "../../../assets/images/tron.png";

const CardScans = ({ popularScans }) => {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <Header />
        {popularScans
          ? popularScans.map((item, index) => {
            // console.log(item?.contractInfo ,'2');
            return (
                item?.contractInfo &&
                <RowScans
                  key={index}
                  number={index + 1}
                  image={item.contractInfo.logo}
                  nametoken={item.contractInfo.name}
                  scans={item.interest}
                  contract={item.contractAddress}
                  sponsored="fales"
                />
            )
          }
              
            )
          : null}
      </div>
    </div>
  );
};

export default CardScans;
