<template>
	<div class="locations-page">
		<h1>Weather Location</h1>
		<md-field>
			<md-select name="loc" id="loc" placeholder="Spokane">
				<md-option value="Spokane">Spokane</md-option>
				<md-option value="New York">New York</md-option>
			</md-select>
		</md-field>
		<md-button class="md-primary md-raised">Add a Location</md-button>
	</div>
</template>
<style lang="scss" scoped>
h1,
label,
select,
div {
	color: #fff;
}
</style>