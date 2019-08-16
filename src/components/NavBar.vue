<template>
	<div id="nav">
		<!-- <md-toolbar class="md-primary" md-elevation="5" id="nav">
			<h3 class="md-title" id="logo" style="flex: 1">Logo</h3>
			<router-link :to="{ name: 'home' }">
				<md-button>Home</md-button>
			</router-link>
			<router-link :to="{ name: 'locations' }">
				<md-button>Locations</md-button>
			</router-link>
			<router-link :to="{ name: 'about' }">
				<md-button>About</md-button>
			</router-link>
			<router-link :to="{ name: 'settings' }">
				<md-button>Settings</md-button>
			</router-link>
		</md-toolbar>-->
		<md-bottom-bar md-sync-route>
			<md-bottom-bar-item exact :to="{ name: 'home' }" md-label="Weather" md-icon="wb_sunny"></md-bottom-bar-item>
			<md-bottom-bar-item :to="{ name: 'about' }" md-label="About" md-icon="person"></md-bottom-bar-item>
			<md-bottom-bar-item :to="{ name: 'locations' }" md-label="Locations" md-icon="place"></md-bottom-bar-item>
			<md-bottom-bar-item :to="{ name: 'settings' }" md-label="Settings" md-icon="settings"></md-bottom-bar-item>
		</md-bottom-bar>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss">
#nav {
	position: fixed;
	width: 100%;
	left: 0px;
	bottom: 0px;
}
</style>