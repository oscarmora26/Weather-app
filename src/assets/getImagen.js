import imagenes from '../assets/imagenes'

export default function getImagen(name) {
    if(name === 'sn'){return imagenes.snow}
    else if(name === 'sl') {return imagenes.sleet}
    else if(name === 'h') {return imagenes.hail}
    else if(name === 't') {return imagenes.Thunderstorm}
    else if(name === 'hr') {return imagenes.heavyRain}
    else if(name === 'lr') {return imagenes.lightRain}
    else if(name === 's') {return imagenes.shower}
    else if(name === 'hc') {return imagenes.heavyCloud}
    else if(name === 'lc') {return imagenes.lightCloud}
    else if(name === 'c') {return imagenes.clear}
}