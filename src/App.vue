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
$primary-color: #0092d0;
$accent-color: #32dbc6;
@import '~vue-material/dist/theme/engine';
@include md-register-theme(
	'default',
	(
		primary: $primary-color,
		accent: $accent-color,
		theme: dark // This can be dark or light
	)
);
@import '~vue-material/dist/theme/all';
.md-ripple {
	justify-items: center;
	justify-content: center;
}

html,
body {
	overflow: hidden;
	padding: 0px 10px;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-weight: 300;
	padding: 0px;
	margin: 0px;
	// background: linear-gradient(45deg, #614ad3, #e42c64);
}
</style>
