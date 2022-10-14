import './Weather.css';
import { useContext, useState } from 'react';
import { DataWeatherContext } from '../context/DataWeatherContext';

const Weather = ({ weather }) => {
    const { id, city, country, c_code, lat, lon, temp, wind } = weather
    const { dataWeather, setDataWeather } = useContext(DataWeatherContext);
    const [isWeather, setIsWeather] = useState(id);

    // Controlador de Weather, tiene que eliminar las tarjetas que el usuario elija
    const handleWeather = () => {
        setIsWeather(isWeather);

        // Buscar si el Weather está en el índice
        dataWeather.findIndex(del => del.id === id);

        // Eliminar del índice
        setDataWeather(
            dataWeather.filter((del) => del.id !== id)
        );
    }

    return (
        <div className='weather-container'>
            <div className='weather'>
                <h3>{city}</h3>
                <div className='weather-data'>
                    <p>{country}, {c_code}</p>
                    <p>
                        Latitud: {lat}<br />
                        Longitud: {lon}<br />
                        Temperatura: {temp}<br />
                        Viento: {wind}
                    </p>
                </div>
            </div>
            <div className='weather-actions'>
                <div className='del' onClick={handleWeather}>Eliminar</div>
            </div>
        </div>
    );
};

export default Weather