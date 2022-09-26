import {action, makeAutoObservable, observable} from "mobx";
import {WeatherService} from "../services/WeatherService";
import {IWeatherProps} from "../types";

interface IWeatherStore {
    weatherData?: Array<IWeatherProps>
}

export class WeatherStore implements IWeatherStore {
    @observable weatherData: Array<IWeatherProps> = [];

    constructor() {
        makeAutoObservable(this)
    }

    @action fetchWeather = async (value) => {

        await WeatherService.getWeather(value).then(res => {
            console.log(res)
            this.weatherData = Boolean(this.weatherData.length) ? [...this.weatherData, res.data] : [res.data]

        }).catch(e => console.log('err', e))
    }

    @action deleteCity = (index: number) => {
        this.weatherData.splice(index, 1)
    }

}