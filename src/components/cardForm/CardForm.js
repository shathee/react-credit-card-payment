import React from 'react';
import styles from './CardForm.module.css'

export default function CardForm({setFlipStatus, flipStatus}) {
    const btnClicked = () => {
        setFlipStatus(!flipStatus)
    }
    return (
        <div className={styles.CardForm}>
            <button onClick={ () => btnClicked () }>TestClick</button>
        </div>
    )
}
