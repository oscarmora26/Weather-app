import React from 'react'
import styles from './styles/todayInformation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function TodayInformation(props) {

    const weater = useSelector(store => store.weather.array[0]) 

    return (
        <div>
            <h3 className={styles.h3}>Today's Highrlights</h3>
            <div className={styles['container-card']}>
                <div className={styles['row1']}>
                    <div className={styles.card}>
                        <p className={styles['card-title']}>Wind Status</p>
                        <h2>{weater.wind_speed.toFixed(1)}<span>mph</span></h2>
                        <div className={styles['play-footer-circle']}>
                            <div className={styles['play-circle']}><FontAwesomeIcon icon={faPlay} /></div>
                            <p>wsw</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <p>Humidity</p>
                        <h2>{weater.humidity.toFixed(1)}<span>%</span></h2>
                        <div className={styles['play-footer-circle']}>
                            <div className={styles['play-circle']}><FontAwesomeIcon icon={faPlay} /></div>
                            <p>wsw</p>
                        </div>
                    </div>
                </div>

                <div className={styles['row2']}>
                    <div className={styles.card}>
                        <p className={styles['card-title']}>Visibility</p>
                        <h2>{weater.visibility.toFixed(2)}<span>miles</span></h2>                       
                    </div>
                    <div className={styles.card}>
                        <p>{weater.air_pressure.toFixed(2)}</p>
                        <h2>84<span>mb</span></h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodayInformation