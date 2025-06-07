import { useEffect, useState } from "react";
import { WeatherData } from "../types/weatherData";
import axios from "axios";
import { cities } from "./cities";
import { WetherCard } from "./weatherCard";
import devData from "../Data/results.json";

export const CitiesList = () => {
    const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                if (process.env.REACT_APP_DEV_MODE === "true") {
                    setWeatherData(devData);
                }
                else {
                    const response =await Promise.all(cities.map(city => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=he`)));
                    const data = (await response).map(res => res.data);
                    setWeatherData(data);
                }
            } catch (error) {
                console.error("An error occurred while fetching weather data:", error);
            }
        }
        fetchWeatherData();
    }, []);
    return (
        <div id="card-container">
            {weatherData.map((data, index) => (
                <WetherCard key={index} data={data} cityName={data.name} />
            ))}
        </div>
    );
};
