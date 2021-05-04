import React from 'react'
import styles from './ProviderNameFront.module.css'

// PUBLIC_PATH = '';

export default function ProviderNameFront({cardProvider}) {
    
    console.log(cardProvider)
    return (
        <div className={ [styles.cardProvider, styles.discover].join(' ') } title="cardProvider">
            <img src={`assets/images/${cardProvider}.png`} alt="" />
        </div>
    )
}
