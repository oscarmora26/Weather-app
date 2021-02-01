import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import styles from './styles/inicio.module.css'
import WeatherInformacion from '../components/WeatherCard.jsx'
import TodayInformation from '../components/TodayInformation.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { getWeatherToday } from '../redux/weatherDuck'

function Inicio(props) {

    const dispatch = useDispatch()

    const weather = useSelector(store => store.weather.array)
    useEffect(() => {
        dispatch(getWeatherToday())
    }, [])

    return (
        <div>{
            weather.length > 0
                ? <div className={styles.layoutInicio}>
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
                                <WeatherInformacion weather={weather[1]} />
                                <WeatherInformacion weather={weather[2]} />
                                <WeatherInformacion weather={weather[3]} />
                                <WeatherInformacion weather={weather[4]} />
                                <WeatherInformacion weather={weather[5]} />
                            </div>
                            <div>
                                <TodayInformation />
                            </div>
                        </div>
                    </div>
                </div>
                : <div className={styles['preloader-container']}>
                    <div className={styles['preloader_1']}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
        }
        </div>
    )
}

export default Inicio