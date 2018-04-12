<template>
<div id="main-layout">
	<input id="menu-trigger" type="checkbox"/>
	<logo></logo>
	<top-nav></top-nav>
	<main>
		<slot></slot>
	</main>
	<footer-element></footer-element>
</div>
</template>

<script>
import TopNav from '~/layouts/TopNav.vue'
import FooterElement from '~/layouts/FooterElement.vue'
import Logo from '~/layouts/Logo.vue'

export default {
	components: {
		Logo,
		TopNav,
		FooterElement
	}
}
</script>
