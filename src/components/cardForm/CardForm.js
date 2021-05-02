import React from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus, setCardHolder, setCardNumber, setItemFocus}) {
    const setFocus = (e) => {
        // console.log(e.target.name)
        setItemFocus(e.target.name)
    }
    const unSetFocus = (e) => {
        setItemFocus(null)
    }
    const updateCardHolder = (e) => {
        setCardHolder(e.target.value)
    }
    const updateCardNumber = (e) => {
        setCardNumber(e.target.value)
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
                                type="text" pattern="[0-9]*" inputMode="numeric" />
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
                            onBlur={ () => changeFlipStatus (false) } />
                        </div>
                    </div>
                    <div className={styles.FieldGroup}>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
        </div>
    )
}
