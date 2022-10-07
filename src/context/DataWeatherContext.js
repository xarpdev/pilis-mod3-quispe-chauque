import { createContext, useState } from "react";

export const DataWeatherContext = createContext({
    dataWeather: [],
    setDataWeather: () => {}
})

export const DataWeatherProvider = ({ children }) => {
    const [dataWeather, setDataWeather] = useState([]);
    const value = { dataWeather, setDataWeather };

    return <DataWeatherContext.Provider value={value}>{children}</DataWeatherContext.Provider>;
}