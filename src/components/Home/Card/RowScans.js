import React from 'react'
import styles from './RowScans.module.css';
import { useDispatch } from 'react-redux';
import { setContractAddress } from '../../../store/contractAddressSlice';

const RowScans = ({ number, image, nametoken, scans, sponsored, contract }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.container_row} onClick={() => dispatch(setContractAddress(contract))}>
            <div className={styles.header}>
                <h3 className={styles.header_no}>{number}</h3>
                <div className={styles.container_image}>
                    {sponsored && <div className={styles.container_sponsored}>
                        <h6 className={styles.sponsored}>sponsored</h6>
                    </div>}
                    <img src={image} alt="star" className={styles.icon_token} />
                    <h3 className={styles.header_token}>{nametoken}</h3>
                </div>

            </div>
            <h3 className={styles.header_scans}>${scans}</h3>
        </div>
    )
}

export default RowScans