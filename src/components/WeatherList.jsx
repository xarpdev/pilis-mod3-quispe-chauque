import Weather from "./Weather";
import './WeatherList.css'

const WeatherList = ({ weatherList }) => {
    return (
        <div className="grid">
            {weatherList.map((weather) => (
                <Weather key={weather.id} weather={weather} />
            ))}
        </div>
    );
}

export default WeatherList