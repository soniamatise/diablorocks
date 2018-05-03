<template>
<div id="main-layout">
	<input id="menu-trigger" type="checkbox"/>
	<logo></logo>
	<top-nav v-on:headerIsActive="makeActive" :class="{headerIsActive: activeHeader}"></top-nav>
	<main>
		<slot></slot>
	</main>
	<footer-element></footer-element>
</div>
</template>

<script>
import TopNav from '~/layouts/header/TopNav.vue'
import FooterElement from '~/layouts/footer/FooterElement.vue'
import Logo from '~/layouts/header/Logo.vue'

export default {
	components: {
		Logo,
		TopNav,
		FooterElement
	},
	data() {
		return {
			activeHeader: false
		}
	},
	methods: {
		makeActive: function(){
			this._data.activeHeader = true;
		}
	}
}
</script>
