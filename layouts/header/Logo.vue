<template>
	<h1 class="logo">
		<nuxt-link to="/">
			<!-- <span class="">Diablo</span> -->
		</nuxt-link>
	</h1>
</template>


<script>
export default {
	data() {
		return {
			isMenuOpen: false,
		};
	},
	head() {
		return {
			bodyAttrs: {
				// class: this.isMenuOpen ? 'scroll-disable' : null
			}
		};
	},
	methods: {
		toggleScrollBody: function() {
			this.isMenuOpen = !this.isMenuOpen;
		}
	}
};
</script>
