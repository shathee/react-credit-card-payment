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


export default function Card({flipStatus}) {
    console.log(flipStatus)
    const flipClass = flipStatus ? styles.Flipped : ''
    console.log(flipClass)
    return (
        <div className={[styles.Card, flipClass ].join(' ')}>
            <div className={styles.Front}>
            <Chip />
            <ProviderNameFront />
            <CardNumber />
            <CardHolder />
            <CardExpiryInfo />
            </div>
            <div className={styles.Back}>
            <CardBackBlackLine />
            <p className={styles.Cvv}> cvv </p>
            <CardBackWhiteLine />
            <ProviderNameBack />
            </div>
            
            
            {/* <div class="data">
                <div class="pan" title="4123 4567 8910 1112">4123 4567 8910 1112</div>
                <div class="first-digits">4123</div>
                <div class="exp-date-wrapper">
                    <div class="left-label">EXPIRES END</div>
                    <div class="exp-date">
                        <div class="upper-labels">MONTH/YEAR</div>
                        <div class="date" title="01/17">01/17</div>
                    </div>
                </div>
                <div class="name-on-card" title="John Doe">John Doe</div>
            </div> */}
                 
        </div>
    )
}
