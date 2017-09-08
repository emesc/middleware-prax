// installed axios thru npm install --save axios; behaves like a jquery method
import axios from 'axios'

// create an action creator that'll be responsible for making an api request to go fetch our weather data
const API_KEY = '8b548b21d92f162d09bb5d5fadc98738'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

// responsible for creating action that contain requests to the backend api; its type is FETCH_WEATHER
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	// axios:  there's an ajax request in the form of get and returns a promise
	// we pass that promise in to the payload in the action object as a property
	const request = axios.get(url)

	return {
		type: FETCH_WEATHER,
		// pass the request as a payload which is an optional property that can contain some data that describe this particular action
		// we're returning the promise as a payload
		payload: request,
	}
}

// goal is to call the action creator when the user submits a search
