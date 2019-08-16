<template>
	<div id="app">
		<router-view />
		<NavBar />
	</div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
	components: {
		NavBar
	}
};
</script>
<style lang="scss">
// setup theme
@import '~vue-material/dist/theme/engine';
@include md-register-theme(
	'default',
	(
		primary: #ff502f,
		accent: #32dbc6,
		theme: light // This can be dark or light
	)
);
@import '~vue-material/dist/theme/all';

// body,
// html {
// 	min-height: 100vh;
// 	background: #f0f0f0;
// }

// #app {
// 	max-width: 440px;
// 	width: 100%;
// 	margin: 0px auto;
// }
</style>
