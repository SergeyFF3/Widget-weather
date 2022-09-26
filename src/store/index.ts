import {WeatherStore} from "./weatherStore";

export class RootStore {
    weatherStore: WeatherStore;

    constructor() {
        this.weatherStore = new WeatherStore();
    }
}

export const createStore = () => {
    return new RootStore();
};

export type TStore = ReturnType<typeof createStore>;

export default RootStore;
export const store = new RootStore();