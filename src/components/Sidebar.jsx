import React, { useState } from 'react'
import styles from './styles/sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchWeather, getOneWheater } from '../redux/weatherDuck'
import { useSelector, useDispatch } from 'react-redux'
import getImagen from '../assets/getImagen'


function Sidebar(props) {

    const [search, setSearch] = useState(false)
    const dispatch = useDispatch()

    const weather = useSelector(store => store.weather.array[0])
    const location = useSelector(store => store.weather.locations)
    const title = useSelector(store => store.weather.title)

    const sidebarNormal = (
        <section className={styles.sidebar}>
            <div className={styles['sidebar-header']}>
                <button onClick={() => setSearch(!search)} className={`${styles.btn} ${styles['btn-sidebar']}`}>Search for place</button>
                <button className={`${styles.btn} ${styles['btn-location']}`}><FontAwesomeIcon icon={faLocationArrow} /></button>
            </div>
            <div className={styles['sidebar-body']}>
                <img src={getImagen(weather.weather_state_abbr)} alt="" className={styles['sidebar-body-img']} />
                <h2>{weather.the_temp.toFixed(0)} <span>oC</span></h2>
                <h3>{weather.weather_state_name}</h3>
            </div>
            <div className={styles['sidebar-footer']}>
                <p>Today<span>.</span>{weather.applicable_date}</p>
                <p>{title}</p>
            </div>
        </section>
    )

    const sidebarSearch = (
        <section className={`${styles.sidebar} ${styles['sidebar-search']}`}>
            <div className={styles['sidebar-search-x']}>
                <button onClick={() => setSearch(!search)} >X</button>
            </div>
            <div>
                <div className={styles['input-content']}>
                    <div><FontAwesomeIcon icon={faSearch} /></div>
                    <input placeholder="Search location" type="text" id="searchLoaction" className={styles['sidebar-input']} />
                </div>
                <button onClick={() => dispatch(searchWeather(document.getElementById('searchLoaction').value))} className={styles['sidebar-search-btn']}>Search</button>
            </div>
            <div className={styles['location']}>
                { 
                    location.map((element, i) => {
                        return (
                            <div onClick={() => changeWeather(element.woeid)} key={i} className={styles['item']}>
                                <p>{element.title}</p>
                            </div>
                        )
                    })                    
                }
            </div>
        </section>
    )

    const changeWeather = (woeid) => {
        dispatch(getOneWheater(woeid))
        setSearch(false)
    }

    return (
        search === false ? sidebarNormal : sidebarSearch
    )
}

export default Sidebar