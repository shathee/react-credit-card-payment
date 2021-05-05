import React from 'react'
import styles from './CardHolder.module.css'

export default function CardHolder({cardHolder, itemFocus}) {

    const focusClass = itemFocus === 'name' ? styles.Focus : ''
    
    return (
        <div className={[styles.CardHolder, focusClass].join(' ')}>
            <p>Card Hodler</p>
            <h3>{ cardHolder.toUpperCase() }</h3>
        </div>
    )
}
