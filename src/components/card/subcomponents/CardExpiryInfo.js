import React from 'react'
import styles from './CardExpiryInfo.module.css'

export default function CardExpiryInfo({itemFocus}) {
    
    const focusClass = (itemFocus === 'expirationmonth' || itemFocus === 'expirationyear') ? styles.Focus : ''
    
    return (
        <div className={[styles.CardExpiryInfo, focusClass].join(' ')}>
            <p>Expires</p>
            <p>MM/YY</p>
        </div>
    )
}
