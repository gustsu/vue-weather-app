import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://api.openweathermap.org`,
	withCredentials: false, // This is the default
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	getWeather() {
		return apiClient.get(
			'/data/2.5/weather?q=Spokane&units=imperial&APPID=94bd87ae0f0af17b71db61eb2c0d79d2'
		);
	},
	getWeatherByCity(city) {
		return apiClient.get(
			'/data/2.5/weather?q=' + city + '&units=imperial&APPID=94bd87ae0f0af17b71db61eb2c0d79d2'
		);
	},
	getWeatherByLatLon(lat, lon) {
		return apiClient.get(
			'/data/2.5/weather?lat=' +
				lat +
				'&lon=' +
				lon +
				'&units=imperial&APPID=94bd87ae0f0af17b71db61eb2c0d79d2'
		);
	}
};
