import React, { useState } from 'react'
import styles from './styles/sidebar.module.css'
import Shower from '../assets/Shower.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {

    const [search, setSearch] = useState(false)

    const sidebarNormal = (
        <section className={styles.sidebar}>
            <div className={styles['sidebar-header']}>
                <button onClick={() => setSearch(!search)} className={`${styles.btn} ${styles['btn-sidebar']}`}>Search for place</button>
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

    const sidebarSearch = (
        <section className={ `${styles.sidebar} ${styles['sidebar-search']}`}>
            <div className={styles['sidebar-search-x']}>
               <button onClick={() => setSearch(!search)} >X</button>
            </div>
            <div>                
                <div className={styles['input-content']}>
                    <div><FontAwesomeIcon icon={faSearch}/></div>                    
                    <input placeholder="Search location" type="text" className={styles['sidebar-input']}/>
                </div>                
                <button className={styles['sidebar-search-btn']}>Search</button>
            </div>
        </section>
    )
    return (
       search === false? sidebarNormal: sidebarSearch
    )

}

export default Sidebar