import React, {ChangeEvent} from 'react';
import styles from './SearchCity.module.css'
import {observer} from "mobx-react";
import {useRootData} from "../../utils/hooks/store";

const SearchCity = observer( () => {

    const { fetchWeather } = useRootData((store) => store.weatherStore);

    const [value, setValue] = React.useState<string>()

    const onSubmit = () => {
        value && fetchWeather(value)
    }

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        setValue(value)
    }

    return (
        <div className='container'>
            <div className={styles.form}>
                <label htmlFor='city'></label>
                <input
                    className={styles.input}
                    value={ value || '' }
                    onChange={(e) => inputHandler(e)}
                    type='text' placeholder='Введите Название города'
                    name='city'
                    id='city'
                />
                <button
                    className={styles.btn}
                    onClick={onSubmit}>Показать</button>
            </div>
        </div>
    );
});

export default SearchCity;