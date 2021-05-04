import React from 'react'
import styles from './CardNumber.module.css'

export default function CardNumber({cardNumber, itemFocus}) {
    // console.log(cardNumber)

    const maskCardNumber = (cardNumber) => {
        
        let arr = cardNumber.split('')
        arr.forEach((element, index) => {
          if (index > 4 && index < 14 && element.trim() !== '') {
            arr[index] = '*'
          }
        })
        return arr.join('')
    }
    cardNumber = maskCardNumber(cardNumber)

    const number = cardNumber !== '' ? cardNumber : '#### #### #### ####';
    const focusClass = itemFocus === 'cardnumber' ? styles.Focus : ''

    return (
        <div className={[styles.CardNumber, focusClass].join(' ')}>
            <h3>{ number}</h3>
        </div>
    )
}
