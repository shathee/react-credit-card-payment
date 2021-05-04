import React from 'react'
import styles from './CardNumber.module.css'

export default function CardNumber({cardNumber, itemFocus}) {
    
    const number = cardNumber !== '' ? cardNumber : '#### #### #### ####';
    const focusClass = itemFocus === 'cardnumber' ? styles.Focus : ''

    return (
        <div className={[styles.CardNumber, focusClass].join(' ')}>
            <h3>{ number}</h3>
        </div>
    )
}
