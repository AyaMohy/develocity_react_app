import React from 'react'
import styles from './RowScans.module.css';
import { useDispatch } from 'react-redux';
import { setContractAddress } from '../../../store/contractAddressSlice';

const RowScans = ({ number, image, nametoken, scans, sponsored, contract, title }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container_row} onClick={() => dispatch(setContractAddress(contract))}>
            <div className={styles.header}>
                <h3 className={styles.header_no}>{number}</h3>
                <div className={styles.container_image}>
                    {/* {sponsored && <div className={styles.container_sponsored}>
                        <h6 className={styles.sponsored}>sponsored</h6>
                    </div>} */}
                    {image ? <img src={image} alt="star" className={styles.icon_token} /> :
                        //    create a new image with the first letter of the name token
                        <div className={styles.icon_token_letter}>
                            <h6 className={styles.icon_token_text}>{nametoken.charAt(0)}</h6>
                        </div>

                    }
                    <h3 className={styles.header_token}>{nametoken.length > 36 ? nametoken.substring(0, 36) + "..." : nametoken}</h3>
                </div>

            </div>
            <h3 className={styles.header_scans}>{
                title === "Price" ? `$${scans}` : scans
            }</h3>
        </div>
    )
}

export default RowScans