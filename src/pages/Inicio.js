import React, { Fragment } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import styles from './styles/inicio.module.css'
import WeatherInformacion from '../components/WeatherCard.jsx'
import TodayInformation from '../components/TodayInformation.jsx'

function Inicio(props) {
    return (
        <div className={styles.layoutInicio}>
            <div className={styles['sidebar-heigth']}>
                <Sidebar />
            </div>
            <div className={styles.main}>
                <div className={styles['main-container']}>
                    <div className={styles['main-header']}>
                        <div className={`${styles['temp']} ${styles['temp-cel']}`}>oC</div>
                        <div className={`${styles['temp']} ${styles['temp-fahr']}`}>oF</div>
                    </div>
                    <div className={styles.contentWeatherInfo}>
                        <WeatherInformacion />
                        <WeatherInformacion />
                        <WeatherInformacion />
                        <WeatherInformacion />
                        <WeatherInformacion />
                    </div>
                    <div>
                        <TodayInformation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio