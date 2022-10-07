import './Weather.css';
// import { useContext, useState } from 'react';

const Weather = ({ weather }) => {
    const { id, city, country, c_code, lat, lon, temp, wind } = weather

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
        </div>
    );
};

export default Weather