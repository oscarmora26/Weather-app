import React from 'react'
import styles from './styles/sidebar.module.css'
import Shower from '../assets/Shower.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLocationArrow} from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {
    return (
        <section className={styles.sidebar}>
            <div className={styles['sidebar-header']}>
                <button className={`${styles.btn} ${styles['btn-sidebar']}`}>Search for place</button>
                <button className={`${styles.btn} ${styles['btn-location']}`}><FontAwesomeIcon icon={faLocationArrow} /></button>              
            </div>
            <div className={styles['sidebar-body']}>
                <img src={Shower} alt="" className={styles['sidebar-body-img']} />
                <h2>15 <span>oC</span></h2>
                <h3>Shower</h3>
            </div>
            <div className={styles['sidebar-footer']}>
                <p>Today<span>.</span>Fri 5 Jun</p>
                <p>ic  Helsinki</p>
            </div>
        </section>
    )
}

export default Sidebar