<template>
	<div v-bind:class="[curCondition]" class="home-page">
		<div v-if="!isLoading">
			<p class="city">{{ curCity }}, {{ curCountry }}</p>
			<div class="mid-block">
				<span class="topper">Current Weather: {{ curCondition }}</span>
				<div class="half-l">
					<img :src="curIcon" />
				</div>
				<div class="half-r">
					<p>{{ Math.round(curTemp) }}°</p>
				</div>
			</div>
			<p class="wind">Wind: {{ curWind }}</p>
			<p class="hum">Humidity: {{ curHumidity }}</p>
		</div>
	</div>
</template>
<script>
import WeatherApiService from '@/services/WeatherApiService.js';
export default {
	data() {
		return {
			curCity: '',
			curTemp: 0,
			curCondition: '',
			curWind: 0,
			curHumidity: 0,
			curIcon: '',
			isLoading: true
		};
	},
	beforeMount() {
		this.getLocation();
	},
	methods: {
		getWeather(lat, long) {
			WeatherApiService.getWeatherByLatLon(lat, long)
				.then(response => {
					this.curCity = response.data.name;
					this.curCountry = response.data.sys.country;
					this.curTemp = response.data.main.temp;
					this.curCondition = response.data.weather[0].main;
					this.curWind = response.data.wind.speed + ' m/s';
					this.curHumidity = response.data.main.humidity + '%';
					this.curIcon =
						'https://openweathermap.org/img/wn/' +
						response.data.weather[0].icon +
						'@2x.png';
					this.isLoading = false;
					console.log(response.data);
				})
				.catch(error => {
					console.log('Openweathermap error: ' + error.response);
				});
		},
		getLocation() {
			navigator.geolocation.getCurrentPosition(
				pos => {
					console.log('current latitude: ' + pos.coords.latitude);
					console.log('current longitude: ' + pos.coords.longitude);
					this.getWeather(pos.coords.latitude, pos.coords.longitude);
				},
				error => {
					//show New York as the location if geolocation is not supported by the browser or disabled by the user
					console.log('Geolocation error: ' + error.response);
					this.getWeather(40.63061, -73.835242);
				}
			);
		}
	}
};
</script>

<style lang="scss">
$primary-color: #0092d0;
$accent-color: #32dbc6;
.home-page {
	// background: $accent-color;
	// background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
	// 	url('~@/assets/snowbg.jpg');
	background-size: cover;
	background-size: cover;
	height: 100vh;
	display: block;
	width: 100vw;
	position: relative;
	left: 0px;
	top: 0px;
	padding-top: 30px;
}
// .home-page.Clouds,
// .home-page.Clear,
// .home-page.Haze,
// .home-page.Smoke,
// .home-page.Snow,
// .home-page.Rain,
// .home-page.Thunderstorm {
// 	display: block;
// }

.home-page.Rain {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('~@/assets/rainbg.jpg');
	background-size: cover;
}

.home-page.Clouds {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('~@/assets/cloudbg.jpg');
	background-size: cover;
}

.home-page.Thunderstorm {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url('~@/assets/lightningbg.jpg');
	background-size: cover;
}

.home-page.Clear {
	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url('~@/assets/sunnybg.jpg');
	background-size: cover;
}

.home-page.Snow {
	background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url('~@/assets/snowbg.jpg');
	background-size: cover;
}

.city {
	color: #fff;
	border-radius: 10px;
	display: block;
	width: 100%;
	text-align: center;
	font-size: 15px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0px;
}
.mid-block {
	display: flex;
	text-align: center;
	margin: 20px 0 50px;
	flex-direction: row;
	flex-wrap: wrap;
	border-radius: 10px;
	padding-bottom: 30px;
	justify-items: center;
	justify-content: space-around;
	position: relative;

	// box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

	.topper {
		display: block;
		flex: 0 0 100%;
		margin: 10px 0 30px;
		color: #fff;
		font-size: 16px;
		font-weight: 300;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding-bottom: 10px;
		flex: 0 0 90%;
	}
	i {
		color: #fff !important;
	}
	p {
		font-size: 62px;
		line-height: 48px;
		display: block;
		padding: 0px;
		margin: 0px;
		color: #fff !important;
	}
	img {
		position: absolute;
		left: 0px;
		right: 0px;
		margin: 0 auto;
		top: -30px;
	}
	.half-l {
		flex: 0 0 50%;
		position: relative;
	}
	.half-r {
		flex: 0 0 50%;
	}
}
.wind {
	position: absolute;
	bottom: 60px;
	color: #fff;
	font-size: 16px;
	left: 0;
	margin-left: 10px;
	width: 50%;
	text-align: center;
}

.hum {
	position: absolute;
	bottom: 60px;
	color: #fff;
	font-size: 16px;
	left: 50%;
	margin-left: 10px;
	width: 50%;
	text-align: center;
}
</style>
