<template>
	<div class="home-page">
		<p>Spokane, WA</p>
		<p v-if="!isLoading">{{currentTemp}}°</p>
		<!-- <md-icon>wb_sunny</md-icon> -->
	</div>
</template>
<script>
import WeatherApiService from '@/services/WeatherApiService.js';
export default {
	data() {
		return {
			currentTemp: 0,
			isLoading: true
		};
	},
	created() {
		WeatherApiService.getWeather()
			.then(response => {
				this.currentTemp = response.data.main.temp;
				this.isLoading = false;
				console.log(response.data);
			})
			.catch(error => {
				console.log('errr: ' + error.response);
			});
	}
};
</script>

<style lang="scss">
html,
body {
	background: url('./../assets/test-bg.jpg');
	background-size: cover;
	text-align: center;
}
p,
i {
	color: #fff;
	font-size: 30px;
	font-weight: 700;
}
</style>