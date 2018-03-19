<template>
	<div>
		<top-nav></top-nav>
		<payoff-credits></payoff-credits>
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
import PayoffCredits from '../layouts/PayoffCredits.vue'
import FooterElement from '../layouts/FooterElement.vue'
export default {
	components: {
		TopNav,
		OneColumn,
		TwoColumn,
		PayoffCredits,
		FooterElement
	}
}
</script>
