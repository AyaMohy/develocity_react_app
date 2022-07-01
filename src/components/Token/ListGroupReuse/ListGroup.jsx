import { useState } from "react"
import HeaderText from "../HeaderText/HeaderText"
import styles from './ListGroup.module.css'

export function ListGroup({ listdata, title }) {

    return (
        <>
            <div className={styles.title}>
                <HeaderText nameHeader={title} />
            </div>

            <div className={`mx-2 ${styles.groupcard}`}>
                {
                    listdata ?
                        <>
                            {listdata.map((i) =>
                            (
                                <div className={`d-flex justify-content-between px-3 py-2 border-bottom ${styles.listitemcontainer} `}>{i.name} <span>${i.value}</span></div>
                            )
                            )}
                        </>
                        : ''
                }
            </div>

        </>
    )
}