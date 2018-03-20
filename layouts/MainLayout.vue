<template>
	<div>
		<top-nav></top-nav>
		<slot></slot>
		<footer-element></footer-element>
	</div>
</template>

<script>
import TopNav from '~/layouts/TopNav.vue'
import FooterElement from '~/layouts/FooterElement.vue'

export default {
	components: {
		TopNav,
		FooterElement
	}
}
</script>
