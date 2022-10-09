/* Direcciones de las APIs de Open-Meteo. */
const GEOCODING = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=es&count=1`;
// Variable: Nombre de Ciudad
const WEATHER_FORECAST = `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${lat}&longitude=${lon}&timezone=America/Argentina/Jujuy`;
// Variables: Latitud y Longitud.

/* Obtener información con Weather Forecast API. */
export const getDataWeather = async () => {
    try {
        const response = await fetch(WEATHER_FORECAST);
        return response.json();
    } catch {
        throw new Error('could not fetch weather data');
    }
};

/* Obtener información con Geocoding API. */
export const getGeocoding = async () => {
    try {
        const response = await fetch(GEOCODING);
        return response.json();
    } catch {
        throw new Error('could not fetch city data');
    }
};