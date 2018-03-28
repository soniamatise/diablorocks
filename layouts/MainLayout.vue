<template>
<div>
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

export default {
	components: {
		TopNav,
		FooterElement
	}
}
</script>
