<template>
	<div>
		<top-nav></top-nav>
		<one-column></one-column>
		<two-column></two-column>
		<slot></slot>
		<footer-element></footer-element>
	</div>
</template>

<script>
import TopNav from '../layouts/TopNav.vue'
import OneColumn from '../layouts/OneColumn.vue'
import TwoColumn from '../layouts/TwoColumn.vue'
import FooterElement from '../layouts/FooterElement.vue'
export default {
	components: {
		TopNav,
		OneColumn,
		TwoColumn,
		FooterElement
	}
}
</script>
