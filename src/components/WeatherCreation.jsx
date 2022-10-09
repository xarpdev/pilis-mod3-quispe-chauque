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

    useEffect(() => {
        getDataWeather()
            .then((data) => setDataWeather(data))
            .catch((err) => console.log(err));
        
        getGeocoding()
            .then((data) => setDataWeather(data))
            .catch((err) => console.log(err));
    }, []);

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

    // Enviar datos del Formulario a Home como weatherNew
    const onSubmit = (data) => {
        console.log(data);
        const weatherNew = {
            id: dataWeather.length + 1,
            city: data.results[0].name,
            country: data.results[0].country,
            c_code: data.results[0].country_code,
            lat: data.latitude,
            lon: data.longitude,
            temp: data.current_weather.temperature,
            wind: data.current_weather.windspeed,
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