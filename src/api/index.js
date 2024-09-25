const baseURL = "https://api.weatherapi.com/v1/current.json?key=1f2b1209d0f5421e885112002242509"

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)

    return await response.json()
}

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)

    return await response.json()
}