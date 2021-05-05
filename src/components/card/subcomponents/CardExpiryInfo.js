import React from 'react'
import styles from './CardExpiryInfo.module.css'

export default function CardExpiryInfo({cardMonth, cardYear, itemFocus}) {
    
    const focusClass = (itemFocus === 'expirationmonth' || itemFocus === 'expirationyear') ? styles.Focus : ''
    const month = ('00'+cardMonth).slice(-2)
    const year = (cardYear).slice(-2)
    
    return (
        <div className={[styles.CardExpiryInfo, focusClass].join(' ')}>
            <p>Expires</p>
            <p><span>{month}</span><span className={styles.Spearator}>|</span><span>{year}</span></p>
        </div>
    )
}
