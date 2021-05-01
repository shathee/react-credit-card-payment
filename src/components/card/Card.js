import React from 'react'
import ProviderName from './subcomponents/ProviderName'
import Chip from './subcomponents/Chip'
import styles from './Card.module.css'


export default function Card({flipStatus}) {
    console.log(flipStatus)
    const flipClass = flipStatus ? styles.Flipped : ''
    console.log(flipClass)
    return (
        <div className={[styles.Card, flipClass ].join(' ')}>
            <div className={styles.Front}>
            <ProviderName />
            <Chip />
                
            </div>
            <div className={styles.Back}>
                BackSide
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
