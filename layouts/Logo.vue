<template>
	<h1 class="nav__logo">
		<a class="nav__logo__link" href="/">Matise</a>
		<label v-on:click="toggleScrollBody()" @click="toggleHeaderWidth()" class="trigger" for="menu-trigger">
			<span></span>
		</label>
	</h1>
</template>
