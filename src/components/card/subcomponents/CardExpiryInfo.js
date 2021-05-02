import React from 'react'
import styles from './CardExpiryInfo.module.css'

export default function CardExpiryInfo() {
    return (
        <div className={styles.CardExpiryInfo}>
            <p>Expires</p>
            <p>MM/YY</p>
        </div>
    )
}
