<template>
	<div id="nav">
		<md-bottom-bar md-type="shift" md-sync-route>
			<md-bottom-bar-item exact :to="{ name: 'home' }" md-label="Weather" md-icon="wb_sunny"></md-bottom-bar-item>
			<md-bottom-bar-item :to="{ name: 'locations' }" md-label="Locations" md-icon="place"></md-bottom-bar-item>
			<md-bottom-bar-item :to="{ name: 'about' }" md-label="About" md-icon="person"></md-bottom-bar-item>
			<md-bottom-bar-item :to="{ name: 'settings' }" md-label="Settings" md-icon="settings"></md-bottom-bar-item>
		</md-bottom-bar>
	</div>
</template>

<style lang="scss">
#nav {
	position: fixed;
	width: 100%;
	left: 0px;
	bottom: 0px;
}
</style>