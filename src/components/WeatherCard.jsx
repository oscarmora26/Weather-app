import React from 'react'
import styles from './styles/weatherCard.module.css'
import Sleet from '../assets/Sleet.png'

function WeatherCard(props) {
    return(
        <div className={styles.card}>
            <h3>Tomorow</h3>
            <img src={Sleet} alt="" className={styles['card-img']}/>
            <div className={styles['card-text']}>
                <p className={styles.temp1}>16 oC</p>
                <p className={styles.temp2}>11 oC</p>
            </div>            
        </div>
    )
}

export default WeatherCard