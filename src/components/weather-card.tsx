import React from 'react';
import { WeatherData } from '../types/weathercard';

interface Props {
    data: WeatherData;
    cityName: string;

}

const getIcon = (temp: number) => {
    if (temp <= 20) return "❄️";
    if (temp >= 30) return "☀️";
    return "⛅";

}
export const WetherCard: React.FC<Props> = ({ data, cityName }) => {
    if (!data) return null;
    return (
        <div className='card'>
            <div className='icon'> {getIcon(data.main.feels_like)}</div>
            <h2>{cityName}</h2>
            <p className='description'> {data.weather[0].description}</p>
            <div className='info'>
                <div>
                    <p>טמפ' נמדדת</p>
                    <p>{Math.round(data.main.temp)}°C</p>
                </div>
                <div>
                    <p>טמפ' מורגשת</p>
                    <p>{Math.round(data.main.feels_like)}°C</p>
                </div>
                <div>
                    <p>לחות</p>
                    <p>{data.main.humidity}%</p>
                </div>
            </div>

        </div>
    )
}