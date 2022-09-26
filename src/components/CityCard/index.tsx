import React from 'react';
import {IWeatherProps} from "../../types";
import styles from './City.module.css'
import {useRootData} from "../../utils/hooks/store";
import {observer} from "mobx-react";

interface ICardProps {
    city: IWeatherProps
    index: number
}

const CityCard: React.FC<ICardProps> = observer(({city, index}) => {

    const {deleteCity} = useRootData(store => store.weatherStore)

    const {name, sys, wind, main, visibility, weather} = city

    const calCelsius = (temp: number) => {
        const cell = Math.floor(temp - 273.15);
        return cell;
    }

    return (
        <div className={styles.card}>
            <div className='d-flex justify-content-between align-items-center'>
                <div className={styles.name}>{name}, {sys.country}</div>
                <i className="bi bi-trash" style={{cursor: 'pointer'}} onClick={() => deleteCity(index)}></i>
            </div>
            <div className={styles.temp}>
                <div className={styles.main}>{main.temp && calCelsius(main.temp)}&deg;С</div>
            </div>
            <div className={styles.description}>Feels
                like {main.feels_like && calCelsius(main.feels_like)}&deg;С {weather.main} {weather.description}</div>
            <div className={styles.wind}>
                <i className="bi bi-wind"/>
                <span>{wind.speed} m/s</span>
                <i className="bi bi-arrow-down-square"/>
                <span>{main.pressure} hPa</span>
            </div>
            <div className={styles.humidity}>
                <span>humidity: {main.humidity}%</span>
                <span>visibility: {visibility && (visibility / 1000).toFixed(1)}km</span>
            </div>
        </div>
    );
});

export default CityCard;