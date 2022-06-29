import React from 'react'
import styles from './HeaderText.module.css'
const HeaderText = ({ nameHeader }) => {
    return (
        <div className={styles.container_header}>
            <h2 className={styles.header}>{nameHeader}</h2>
            <img className={styles.InfoLogo} src={require('../../../assets/images/info.png')} alt="logo" />
        </div>
    )
}

export default HeaderText