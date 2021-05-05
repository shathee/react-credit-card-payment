import React, {useState} from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus, setCardProvider, setCardHolder, cardNumber, setCardNumber, setCvv, setCardMonth, setCardYear, setItemFocus}) {
    
    const [cardNumberMaxLength, setCardNumberMaxLength] = useState(16)
    const [errors, setErrors] = useState({})
    
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
        
        if ((/^3[47]\d{0,13}$/).test(cardNumberValue)) {
            setCardNumberMaxLength(16)
            cardNumberValue = cardNumberValue.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ')  
        } else if ((/^\d{0,16}$/).test(cardNumberValue)) { // regular cc number, 16 digits
            setCardNumberMaxLength(19)
            cardNumberValue = cardNumberValue.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{4})/, '$1 $2 ').replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ')
        }
        
        if (e.nativeEvent.inputType == 'deleteContentBackward') {
            let lastChar = cardNumberValue.substring(cardNumberValue.length, cardNumberValue.length - 1)
            if (lastChar == ' ') { cardNumberValue = cardNumberValue.substring(0, cardNumberValue.length - 1) }
        }

        setCardNumber(cardNumberValue)
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

    const updateMonth = (e) => {
        setCardMonth(e.target.value)
    }
    const updateYear = (e) => {
        setCardYear(e.target.value)
    }

    const changeFlipStatus = (s) => {
        
        setFlipStatus(s)
    }

    const monthOptions = Array.from(Array(12).keys()).map(m => (
        <option key={m} value={m+1}>{m+1}</option>
    ))
    
    const currentYear = new Date().getFullYear()
    const yearOptions = Array.from(Array(7).keys()).map(y => (
        <option key={y} value={ currentYear + y }>{ currentYear + y }</option>
    ))
        
    const handleFormSubmit = (e) => {
        
        e.preventDefault();
        let errs = {}
        const cardnum = e.target.elements.cardnumber.value
        if(!cardnum){
            errs.cardnum = "Card Number Cannot be empty"
        }else if ((/^3[47]/).test(cardnum) && cardnum.length < 16 ){
            errs.cardnum = "Amex Card Number Must Be 14 digit Long"
        }else if (cardnum.length < 19 ){
            errs.cardnum = "Card Number Must Be 16 digit Long"
        }

        const cardhold = e.target.elements.name.value
        if(!cardhold){
            errs.cardhold = "Card Holder Name Cannot be empty"
        }

        const expirationmonth = e.target.elements.expirationmonth.value
        
        if(expirationmonth === 'MM'){
            errs.expirationmonth = "You Must Choose Expiration Month"
        }
        const expirationyear = e.target.elements.expirationyear.value
        if(expirationyear === 'YY'){
            errs.expirationyear = "You Must Choose Expiration Year"
        }
        const cvv = e.target.elements.cvv.value
        if(!cvv){
            errs.cvv = "You Must Provide CVV number"
        }
        
        setErrors(errs)
    }
    
    return (
        <div className={styles.CardForm}>
                <form onSubmit={handleFormSubmit} data-testid="cardInfoForm">
                <div className={styles.FormContainer}>
                    <div className={styles.FieldGroup}>
                        <label htmlFor="cardnumber">Card Number</label>
                        <input name="cardnumber" data-testid="cardnumberInput" onChange={updateCardNumber} 
                                onFocus={setFocus} 
                                onBlur={unSetFocus} 
                                type="text" pattern="[0-9 ]*" 
                                maxLength = {cardNumberMaxLength}
                                inputMode="numeric"
                                value={cardNumber} />
                        <span className={styles.Err}>
                          {errors.cardnum}
                        </span>
                    </div>
                    <div className={styles.FieldGroup}>
                        <label htmlFor="name">Name</label>
                        <input name="name"  data-testid="cardHolderInput" onChange={updateCardHolder} 
                                onFocus={setFocus} 
                                onBlur={unSetFocus}
                                type="text" />
                        <span className={styles.Err}>
                          {errors.cardhold}
                        </span>
                    </div>
                    <div className={styles.ExpAndSec}>
                        <div className={styles.FieldGroup}>
                            <label>Expiration Date</label>
                            <select name="expirationmonth" data-testid="cardMonthInput"
                                onFocus={setFocus} 
                                onBlur={unSetFocus}
                                onChange={updateMonth} > 
                                <option value="MM">Month</option>
                                { monthOptions }
                            </select>
                            <select name="expirationyear" data-testid="cardMonthYear"
                                onFocus={setFocus} 
                                onBlur={unSetFocus}
                                onChange={updateYear} >
                                <option value="YY">Year</option>
                                {yearOptions}
                            </select>
                            <span className={styles.Err}>
                                {errors.expirationmonth}
                            </span>
                            <span className={styles.Err}>
                                {errors.expirationyear}
                            </span>
                        </div>
                        <div className={[styles.FieldGroup, styles.Sec].join(' ')}>
                            <label htmlFor="cvv">CVV</label>
                            <input name="cvv" type="text" data-testid="cardCvvInput"
                            pattern="[0-9]*" 
                            inputMode="numeric"
                            onFocus={ () => changeFlipStatus (true) }
                            onBlur={ () => changeFlipStatus (false) }
                            onChange={ updateCvv}
                            maxLength = "4" />
                            <span className={styles.Err}>
                                {errors.cvv}
                            </span>
                        </div>
                    </div>
                    <div className={styles.FieldGroup}>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
                </form>
        </div>
    )
}
