import React from 'react'
import styles from './CardBackWhiteLine.module.css'

export default function CardBackWhiteLine({cvv}) {
    
    let maskedCvv = cvv.substring(0, cvv.length).replace(/[a-z\d]/gi,"*") + 
    cvv.substring(cvv.length, cvv.length)
    
    return (
        <div className={styles.CardBackWhiteLine}>
            <span className={styles.MaskedCvv}>{maskedCvv}</span>
        </div>
    )
}
