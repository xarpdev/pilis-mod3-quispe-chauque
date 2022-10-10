import './WeatherCreation.css';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { getDataWeather, getGeocoding } from '../service';
import { DataWeatherContext } from '../context/DataWeatherContext';

const WeatherCreation = () => {

    // Relacionar WeatherCreation con DataWeatherContext
    const { dataWeather, setDataWeather } = useContext(DataWeatherContext)
    const navigate = useNavigate();

    // Establecer Formulario y Valores por Defecto
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            city: 'Buenos Aires',
            lat: '-34.61315',
            lon: '-58.37723',
        }
    });

    // Procesos con Datos del Formulario.
    const onSubmit = (data0) => {
        // Ver Datos Subidos del Formulario
        console.log(data0);

        // Obtener Datos Climáticos
        getDataWeather(data0.lat, data0.lon)
            .then((data1) => setDataWeather(data1))
            .catch((err) => console.log(err));
        
        // Obtener Dato Geográficos
        getGeocoding(data0.city)
            .then((data2) => setDataWeather(data2))
            .catch((err) => console.log(err));

        // Crear Nuevo Weather
        const weatherNew = {
            id: dataWeather.length + 1,
            city: data2.results[0].name,
            country: data2.results[0].country,
            c_code: data2.results[0].country_code,
            lat: data1.latitude,
            lon: data1.longitude,
            temp: data1.current_weather.temperature,
            wind: data1.current_weather.windspeed
        }
        
        setDataWeather([...dataWeather, weatherNew])
        navigate('/')
    };

    return (
        <div className='weather-new-container'>
            <span>Introduce el Nombre, su Latitud y su Longitud</span>
            <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='input-form'
                    type="text"
                    placeholder='Nombre'
                    {...register('city',{
                        required : 'Debe ingresar el nombre de la ubicación'
                    }
                  )
                }/>
                <input
                    className='input-form'
                    type="text"
                    placeholder='Latitud'
                    {...register('lat', {
                        required : 'Debe ingresar la coordenada de latitud'
                    }
                  )
                }/>
                <p>{errors.lat?.message}</p>
                <input
                    className='input-form'
                    type="text"
                    placeholder='Longitud'
                    {...register('lon', {
                        required : 'Debe ingresar la coordenada de longitud'
                    }
                  )
                }/>
                <p>{errors.lon?.message}</p>
                <button className='btn-form' type='submit'>Añadir</button>
            </form>
        </div>
    );
};

export default WeatherCreation;