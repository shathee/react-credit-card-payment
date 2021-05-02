import React from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus}) {
    const changeFlipStatus = (s) => {
        setFlipStatus(s)
    }
    return (
        <div className={styles.CardForm}>
                <div className={styles.FormContainer}>
                    <div className={styles.FieldGroup}>
                        <label for="name">Name</label>
                        <input id="name" maxlength="20" type="text" />
                    </div>
                    <div className={styles.FieldGroup}>
                        <label for="cardnumber">Card Number</label>
                        <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric" />
                    
                    </div>
                    <div className={styles.ExpAndSec}>
                        <div className={styles.FieldGroup}>
                            <label for="expirationdate">Expiration (mm/yy)</label>
                            <select>
                                <option>Month</option>
                                <option></option>
                                <option></option>
                            </select>
                            <select>
                                <option>Year</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className={[styles.FieldGroup, styles.Sec].join(' ')}>
                            <label for="securitycode">CVV</label>
                            <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric"
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
