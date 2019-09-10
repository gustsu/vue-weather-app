<template>
	<div class="home-page">
		<div v-if="!isLoading">
			<p class="city">{{ curCity }}</p>
			<div class="mid-block">
				<span class="topper">Currently Weather: {{ curCondition }}</span>
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
		this.getWeather();
		this.getLocation();
	},
	methods: {
		getWeather() {
			WeatherApiService.getWeather()
				.then(response => {
					this.curCity = response.data.name;
					this.curTemp = response.data.main.temp;
					this.curCondition = response.data.weather[0].main;
					this.curWind = response.data.wind.speed + ' m/s';
					this.curHumidity = response.data.main.humidity + '%';
					this.curIcon =
						'https://openweathermap.org/img/wn/' +
						response.data.weather[0].icon +
						'@2x.png';
					this.isLoading = false;
				})
				.catch(error => {
					console.log('errr: ' + error.response);
				});
		},
		getLocation() {
			navigator.geolocation.getCurrentPosition(function(pos) {
				console.log('current lat: ' + pos.coords.latitude);
				console.log('current lon: ' + pos.coords.longitude);
			});
		}
	}
};
</script>

<style lang="scss">
$primary-color: #0092d0;
$accent-color: #32dbc6;
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
}
.mid-block {
	display: flex;
	text-align: center;
	margin: 20px 0 50px;
	flex-direction: row;
	flex-wrap: wrap;
	background: rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding-bottom: 30px;
	justify-items: center;
	justify-content: center;
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