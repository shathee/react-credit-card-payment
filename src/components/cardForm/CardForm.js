import React, {useState} from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus, setCardProvider, setCardHolder, cardNumber, setCardNumber, setCvv, setItemFocus}) {
    
    const [cardNumberMaxLength, setCardNumberMaxLength] = useState(16)

    const setFocus = (e) => {
        setItemFocus(e.target.name)
    }
    const unSetFocus = (e) => {
        setItemFocus(null)
    }
    const updateCardHolder = (e) => {
        setCardHolder(e.target.value)
    }
    
    const updateCardNumber = (e) => {
        
        let cardNumberValue = e.target.value.replace(/\D/g, '')
        let formattedCardNumber = e.target.value.replace(/\D/g, '')

        if ((/^3[47]\d{0,13}$/).test(cardNumberValue)) {
            formattedCardNumber = cardNumberValue.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')
            setCardNumberMaxLength(17)
        } else if ((/^\d{0,16}$/).test(cardNumberValue)) { // regular cc number, 16 digits
            formattedCardNumber = cardNumberValue.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
            setCardNumberMaxLength(19)
        }else {
            console.log('ddd')
        }
        
        setCardNumber(formattedCardNumber)
        const ucp = updateCardProvider(e.target.value)
        setCardProvider(ucp)
    }
    
    const updateCardProvider = (cardNumber) => {
        let number = cardNumber;
        let re = new RegExp("^4");
        if (number.match(re) != null) return "visa";

        re = new RegExp("^(34|37)");
        if (number.match(re) != null) return "amex";

        re = new RegExp("^5[1-5]");
        if (number.match(re) != null) return "mastercard";

        re = new RegExp("^6011");
        if (number.match(re) != null) return "discover";

        return "discover"; 
        
    }

    const updateCvv = (e) => {
        setCvv(e.target.value)
    }

    const changeFlipStatus = (s) => {
        setFlipStatus(s)
    }

    const monthOptions = Array.from(Array(12).keys()).map(m => (
        <option key={m} value={m+1}>{m+1}</option>
    ))
    
    const currentYear = new Date().getFullYear()
    const yearOptions = Array.from(Array(5).keys()).map(y => (
        <option key={y} value={ currentYear + y }>{ currentYear + y }</option>
    ))
    
    return (
        <div className={styles.CardForm}>
                <div className={styles.FormContainer}>
                    <div className={styles.FieldGroup}>
                        <label htmlFor="cardnumber">Card Number</label>
                        <input name="cardnumber" onChange={updateCardNumber} 
                                onFocus={setFocus} 
                                onBlur={unSetFocus} 
                                type="text" pattern="[0-9]*" 
                                maxLength = {cardNumberMaxLength}
                                inputMode="numeric"
                                value={cardNumber} />
                    </div>
                    <div className={styles.FieldGroup}>
                        <label htmlFor="name">Name</label>
                        <input name="name" onChange={updateCardHolder} 
                                onFocus={setFocus} 
                                onBlur={unSetFocus}
                                type="text" />
                    </div>
                    <div className={styles.ExpAndSec}>
                        <div className={styles.FieldGroup}>
                            <label>Expiration Date</label>
                            <select name="expirationmonth" 
                                onFocus={setFocus} 
                                onBlur={unSetFocus} > 
                                <option>Month</option>
                                { monthOptions }
                            </select>
                            <select name="expirationyear"
                                onFocus={setFocus} 
                                onBlur={unSetFocus} >
                                <option>Year</option>
                                {yearOptions}
                            </select>
                        </div>
                        <div className={[styles.FieldGroup, styles.Sec].join(' ')}>
                            <label htmlFor="securitycode">CVV</label>
                            <input id="securitycode" type="text" pattern="[0-9]*" inputMode="numeric"
                            onFocus={ () => changeFlipStatus (true) }
                            onBlur={ () => changeFlipStatus (false) }
                            onChange={ updateCvv} />
                        </div>
                    </div>
                    <div className={styles.FieldGroup}>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
        </div>
    )
}
