import React from 'react'
import styles from './ProviderNameFront.module.css'

const PUBLIC_PATH = 'assets/images/';

export default function ProviderNameFront({cardProvider}) {
    
    return (
        <div className={ [styles.cardProvider, styles.Provider].join(' ') } title="cardProvider">
            <img src={`${PUBLIC_PATH}${cardProvider}.png`} alt="" />
        </div>
    )
}
