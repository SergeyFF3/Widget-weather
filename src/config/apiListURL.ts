// api
export const hostname = 'https://api.openweathermap.org/data/2.5/weather'

export const apiWeather = (payload: string) => `${hostname}?q=${payload}&APPID=6c8049a5a68c8a4540db71dc90b89335`
