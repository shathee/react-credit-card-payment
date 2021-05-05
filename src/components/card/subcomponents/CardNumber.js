import React from 'react'
import styles from './CardNumber.module.css'

export default function CardNumber({cardNumber, cardPovider, itemFocus}) {
  
  
//   if (cardNumberValue.length < cardNumberMaxLength ){
//     console.log(cardNumberValue.length)
//     cardNumberValue += '#'.repeat(cardNumberMaxLength - cardNumberValue.length)
    
// }

        
    let formattedCardNumber = ''
    if (cardPovider === 'amex'){
      formattedCardNumber = cardNumber.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
    }else{
      formattedCardNumber = cardNumber.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
    }
    
    const maskCardNumber = (cardNumber, cardPovider) => {
        
        let arr = cardNumber.split('')
        console.log(cardPovider)
        if (cardPovider==='amex'){
          arr.forEach((element, index) => {
            if (index > 4 && index < 11 && element.trim() !== '') {
              arr[index] = '*'
            }
          })
        }else{
          arr.forEach((element, index) => {
            if (index > 4 && index < 14 && element.trim() !== '') {
              arr[index] = '*'
            }
          })
        }
        
        return arr.join('')
    }
    cardNumber = maskCardNumber(formattedCardNumber, cardPovider)


    const number = cardNumber !== '' ? cardNumber : '#### #### #### ####';
    const focusClass = itemFocus === 'cardnumber' ? styles.Focus : ''
    // const myArr = number.split("")


    return (
        <div className={[styles.CardNumber, focusClass].join(' ')}>
            <h3>{ number}</h3>
            {/* <h3>
            {myArr.map(c=>{
              return c
            })}
            </h3> */}
        </div>
    )
}
