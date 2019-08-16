<template>
	<div id="nav">
		<md-toolbar class="md-primary" md-elevation="5" id="nav">
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
		</md-toolbar>
	</div>
</template>