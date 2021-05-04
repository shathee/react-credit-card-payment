import React from 'react'
import styles from './ProviderNameFront.module.css'

// PUBLIC_PATH = '';

export default function ProviderNameFront({cardProvider}) {
    

    return (
        <div className={ [styles.cardProvider, styles.Provider].join(' ') } title="cardProvider">
            <img src={`assets/images/${cardProvider}.png`} alt="" />
        </div>
    )
}
