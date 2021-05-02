import React from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus}) {
    const changeFlipStatus = (s) => {
        setFlipStatus(s)
    }
    return (
        <div className={styles.CardForm}>
            {/* <input type="text" onFocus={ () => changeFlipStatus (false) } TestClick />
            <input type="text" onFocus={ () => changeFlipStatus (true) } TestClick /> */}
                <div className={styles.FormContainer}>
                    <div class="field-container">
                        <label for="name">Name</label>
                        <input id="name" maxlength="20" type="text" />
                    </div>
                    <div class="field-container">
                        <label for="cardnumber">Card Number</label><span id="generatecard">generate random</span>
                        <input id="cardnumber" type="text" pattern="[0-9]*" inputmode="numeric" />
                    
                    </div>
                    <div class="field-container">
                        <label for="expirationdate">Expiration (mm/yy)</label>
                        <input id="expirationdate" type="text" pattern="[0-9]*" inputmode="numeric" />
                    </div>
                    <div class="field-container">
                        <label for="securitycode">Security Code</label>
                        <input id="securitycode" type="text" pattern="[0-9]*" inputmode="numeric" />
                    </div>
                </div>
        </div>
    )
}
