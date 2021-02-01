import React from 'react'
import styles from './styles/weatherCard.module.css'
import getImagen from '../assets/getImagen'

function WeatherCard(props) {
    return(
        <div className={styles.card}>
            <h3>Tomorow</h3>
            <img src={getImagen(props.weather.weather_state_abbr)} alt="" className={styles['card-img']}/>
            <div className={styles['card-text']}>
                <p className={styles.temp1}>{props.weather.min_temp.toFixed(0)} oC</p>
                <p className={styles.temp2}>{props.weather.max_temp.toFixed(0)} oC</p>
            </div>            
        </div>
    )
}

export default WeatherCard