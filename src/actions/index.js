// create an action creator that'll be responsible for making an api request to go fetch our weather data
const API_KEY = '8b548b21d92f162d09bb5d5fadc98738'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
	return {
		type: FETCH_WEATHER,
	}
}
