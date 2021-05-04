import React from 'react'
import styles from './ProviderNameBack.module.css'


export default function ProviderNameBack({cardProvider}) {
    return (
        <div className={ [styles.cardProviderBack, styles.Provider].join(' ') } title="cardProvider">
            <img src={`assets/images/${cardProvider}.png`} alt="" />
        </div>
    )
}
