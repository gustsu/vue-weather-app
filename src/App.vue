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
		primary: #0092d0,
		accent: #32dbc6,
		theme: light // This can be dark or light
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
}
</style>
