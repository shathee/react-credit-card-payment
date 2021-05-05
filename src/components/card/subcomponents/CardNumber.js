import React from 'react'
import styles from './CardNumber.module.css'

export default function CardNumber({cardNumber, cardPovider, itemFocus}) {

  
    let formattedCardNumber = cardNumber.replace(/\s/g, "")
    console.log(formattedCardNumber)
    if (cardPovider === 'amex'){
      formattedCardNumber = cardNumber.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
    }else{
      formattedCardNumber = cardNumber.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
    }
    
    const maskCardNumber = (cardNumber, cardPovider) => {
        let arr = cardNumber.split('')
        if (cardPovider==='amex'){
          arr.forEach((element, index) => {
            if (index > 4 && index < 12 && element.trim() !== '') {
              arr[index] = '*'
            }
          })
        }else{
          arr.forEach((element, index) => {
            if (index > 4 && index < 15 && element.trim() !== '') {
              arr[index] = '*'
            }
          })
        }
        
        return arr.join('')
    }
    cardNumber = maskCardNumber(formattedCardNumber, cardPovider)
    
    // if(cardNumber.length < 16){
    //   console.log(cardNumber.length)
    // }
    const number = cardNumber !== '' ? cardNumber : '#### #### #### ####';
    const focusClass = itemFocus === 'cardnumber' ? styles.Focus : ''
    

    return (
        <div className={[styles.CardNumber, focusClass].join(' ')}>
            <h3>{ number}</h3>
            
        </div>
    )
}
