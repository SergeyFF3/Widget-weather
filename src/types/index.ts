export interface IWeatherInfo {
    deck_id?: string;
    remaining?: number;
    shuffled?: boolean;
    success?: boolean;
}

export interface IWeatherProps {
    base?: string
    clouds?: {
        all?: number
    }
    cod?: number
    coord?: {
        lon?: number
        lat?: number
    }
    dt?: number
    id?: number
    main: Main
    name: string
    sys: Sys
    visibility: number
    timezone?: number
    weather: Weather
    wind: Wind
}

export interface Main {
    feels_like: number
    grnd_level?: number
    sea_level?: number
    humidity: number
    pressure: number
    temp: number
    temp_min?: number
    temp_max?: number
}

export interface Sys {
    country: string
    type?: number
    id?: number
    sunrise?: number
    sunset?: number
}

export interface Weather {
    id: number
    main: string
    description: string
    icon?: string
}

export interface Wind {
    speed: number
    deg?: number
    gust?: number
}
