// application of weather with react js?

{
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 278.91,
        "feels_like": 276.51,
        "temp_min": 277.25,
        "temp_max": 280.02,
        "pressure": 1021,
        "humidity": 88
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.09,
        "deg": 330
    },
    "rain": {
        "1h": 0.89
    },
    "clouds": {
        "all": 100
    },
    "dt": 1646438029,
    "sys": {
        "type": 2,
        "id": 2019646,
        "country": "GB",
        "sunrise": 1646375984,
        "sunset": 1646415906
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}


import {useState} from 'react'
import axios from 'axios'
import Weather from './Weather'

function Weathers() {
    const [weathers, setWeathers] = useState();
    const [city, setCity] = useState('');
    const API = {
    link: "http://api.openweathermap.org/data/2.5/weather?q=",
    key: "&appid=xxxxx"
    }

    function handleSearchCity(e) {
        e.preventDefault()
        setCity(e.target.value)
    }

    async function searchWeathers(e) {
        e.preventDefault()
        console.log()
        var response = await axios.get(API.link + city + API.key)
        console.log(response)
        setWeathers(response.data)
    }
    
    return (
       <div>
         <input value={city} onChange={handleSearchCity} />
         <button onClick={searchWeathers}>Search</button>
         {weathers && <Weather name={weathers.name} />}
       </div> 
    )
}
export default Weathers;


