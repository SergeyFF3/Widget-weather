import React from 'react';
import {observer} from "mobx-react";
import {useRootData} from "../../utils/hooks/store";
import CityCard from "../CityCard";
import styles from './CityList.module.css'

const CityList: React.FC = observer(() => {

    const {weatherData} = useRootData(store => store.weatherStore)

    return (
        <div className='container'>
            <div className={styles.cardList}>
                {Boolean(weatherData.length) && weatherData.map((city, index) =>
                    <CityCard key={city.id} city={city} index={index}/>
                )}
            </div>
        </div>
    );
});

export default CityList;