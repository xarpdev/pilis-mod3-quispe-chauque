/* Direcciones de las APIs de Open-Meteo. */
const GEOCODING = `https://geocoding-api.open-meteo.com/v1`;
const WEATHER_FORECAST = `https://api.open-meteo.com/v1`;

/* Obtener información con Weather Forecast API. */
export const getDataWeather = async (lat, lon) => {
    try {
        parseFloat(lat);
        parseFloat(lon);
        const response = await fetch(`${WEATHER_FORECAST}/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`);
        console.log(response.json());
        return response.json();
    } catch {
        throw new Error('could not fetch weather data');
    }
};

/* Obtener información con Geocoding API. */
export const getGeocoding = async (city) => {
    try {
        const response = await fetch(`${GEOCODING}/search?name=${city}&language=es&count=1`);
        console.log(response.json());
        return response.json();
    } catch {
        throw new Error('could not fetch city data');
    }
};