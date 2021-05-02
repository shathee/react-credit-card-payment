import React from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus}) {
    const btnClicked = (s) => {
        setFlipStatus(s)
    }
    return (
        <div className={styles.CardForm}>

            <input type="text" onFocus={ () => btnClicked (false) } TestClick />
            <input type="text" onFocus={ () => btnClicked (true) } TestClick />
        </div>
    )
}
