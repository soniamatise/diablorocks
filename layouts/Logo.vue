<template>
	<div class="nav__logo">
		<a class="nav__logoLink" href="/">
			<img class="nav__logoImage" src="~/assets/img/logo.svg">
		</a>
		<label v-on:click="toggleScrollBody()" @click="toggleHeaderWidth()" class="trigger" for="menu-trigger">
			<span></span>
		</label>
	</div>
</template>
