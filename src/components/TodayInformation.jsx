import React from 'react'
import styles from './styles/todayInformation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function TodayInformation(props) {
    return (
        <div>
            <h3 className={styles.h3}>Today's Highrlights</h3>
            <div className={styles['container-card']}>
                <div className={styles['row1']}>
                    <div className={styles.card}>
                        <p className={styles['card-title']}>Wind Status</p>
                        <h2>7<span>mph</span></h2>
                        <div className={styles['play-footer-circle']}>
                            <div className={styles['play-circle']}><FontAwesomeIcon icon={faPlay} /></div>
                            <p>wsw</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <p>Humidity</p>
                        <h2>84<span>%</span></h2>
                        <div className={styles['play-footer-circle']}>
                            <div className={styles['play-circle']}><FontAwesomeIcon icon={faPlay} /></div>
                            <p>wsw</p>
                        </div>
                    </div>
                </div>

                <div className={styles['row2']}>
                    <div className={styles.card}>
                        <p className={styles['card-title']}>Wind Status</p>
                        <h2>7<span>mph</span></h2>                       
                    </div>
                    <div className={styles.card}>
                        <p>Humidity</p>
                        <h2>84<span>%</span></h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TodayInformation