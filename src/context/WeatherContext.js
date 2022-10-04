import { createContext, useState } from "react";

export const WeatherContext = createContext({
    weather: [],
    setWeather: () => {}
})

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState([]);
    const value = { weather, setWeather };

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}