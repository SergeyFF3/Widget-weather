import axios from "../config/axios";
import {apiWeather} from "../config/apiListURL";
import {AxiosResponse} from "axios";
import {IWeatherInfo, IWeatherProps} from "../types";

interface IWeatherService {
    getWeather: () => Promise<AxiosResponse<IWeatherInfo>>;
}

// @ts-ignore
export class WeatherService implements IWeatherService {

    static getWeather(payload): Promise<AxiosResponse<IWeatherProps>>{
        return axios.get(apiWeather(payload))
    }

}