<template>
<div id="main-layout">
	<input id="menu-trigger" type="checkbox"/>
	<logo></logo>
	<top-nav></top-nav>
	<div id="page">
		<main>
			<slot></slot>
		</main>
		<footer-element></footer-element>
	</div>
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
