import axios from 'axios'

const dafaultData = {
    array: [],
    title: '',
    locations: []
}

const GET_WEATHER_TODAY = "GET_WEATHER_TODAY"
const SEARCH_WEATHER = "SEARCH_WEATHER"
const GET_ONE_WEATHER = "GET_ONE_WEATHER"

export default function reducer(state = dafaultData, action) {
    switch (action.type) {
        case GET_WEATHER_TODAY:
            return { ...state, array: action.payload.consolidated_weather, title:action.payload.title };

        case SEARCH_WEATHER:
            return { ...state, locations: action.payload };

        case GET_ONE_WEATHER:
            return { ...state, array: action.payload.consolidated_weather, title:action.payload.title };

        default:
            return state;
    }
}
export const getWeatherToday = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://meta-weather.now.sh/api/location/44418/')
        dispatch({
            type: GET_WEATHER_TODAY,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const searchWeather = (location) => async (dispatch, getState) => {
    try {
        const res = await axios.get(`https://meta-weather.now.sh/api/location/search/?query=${location}`)
        dispatch({
            type: SEARCH_WEATHER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getOneWheater = (woeid) => async (dispatch, getState) => {
    try {
        const res = await axios.get(`https://meta-weather.now.sh/api/location/${woeid}/`)
        dispatch({
            type: GET_ONE_WEATHER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}




