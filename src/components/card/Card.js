import React from 'react'
import ProviderNameFront from './subcomponents/ProviderNameFront'
import ProviderNameBack from './subcomponents/ProviderNameBack'
import Chip from './subcomponents/Chip'
import CardNumber from './subcomponents/CardNumber'
import CardBackBlackLine from './subcomponents/CardBackBlackLine'
import CardBackWhiteLine from './subcomponents/CardBackWhiteLine'
import CardHolder from './subcomponents/CardHolder'
import CardExpiryInfo from './subcomponents/CardExpiryInfo'

import styles from './Card.module.css'


export default function Card({flipStatus, cardHolder, cardNumber, cardProvider, itemFocus}) {
    
    const flipClass = flipStatus ? styles.Flipped : ''
    
    return (
        <div className={[styles.Card, flipClass ].join(' ')}>
            <div className={styles.Front}>
            <Chip />
            <ProviderNameFront cardProvider={cardProvider} />
            <CardNumber cardNumber={cardNumber} itemFocus={itemFocus} />
            <CardHolder cardHolder={cardHolder} itemFocus={itemFocus} />
            <CardExpiryInfo  itemFocus={itemFocus} />
            </div>
            <div className={styles.Back}>
            <CardBackBlackLine />
            <p className={styles.Cvv}> cvv </p>
            <CardBackWhiteLine />
            <ProviderNameBack cardProvider={cardProvider} />
            </div>
        </div>
    )
}
