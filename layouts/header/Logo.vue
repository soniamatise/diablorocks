<template>
	<h1 class="nav__logo">
		<nuxt-link to="/">
			<span class="">Diablo</span>
		</nuxt-link>
		<label class="trigger" for="menu-trigger" @click="toggleScrollBody(),toggleHeaderWidth()">
			<span :class="{flip: flip}"/>
		</label>
	</h1>
</template>


<script>
export default {
	data() {
		return {
			isMenuOpen: false,
			headerIsActive: false,
			flip: ''
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
		},
		toggleHeaderWidth: function() {
			let self = this;
			self.$emit.headerIsActive = !self.$emit.headerIsActive;
			setTimeout(function() {
				if (self._data.flip == false) {
					self._data.flip = true;
				} else {
					self._data.flip = false;
				}
			}, 600);
		}
	}
};
</script>
