import React from 'react'
import styles from './CardNumber.module.css'

export default function CardNumber({cardNumber, itemFocus}) {
    
    const focusClass = itemFocus === 'cardnumber' ? styles.Focus : ''

    return (
        <div className={[styles.CardNumber, focusClass].join(' ')}>
            <p>{ cardNumber }</p>
        </div>
    )
}
