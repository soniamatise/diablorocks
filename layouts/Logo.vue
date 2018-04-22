<template>
	<h1 class="nav__logo">
		<nuxt-link to="/">
			<span class="nav__logo__link">Matise</span>
		</nuxt-link>
		<label v-on:click="toggleScrollBody()" @click="toggleHeaderWidth()" class="trigger" for="menu-trigger" >
			<span :class="{flip: flip}"></span>
		</label>
	</h1>
</template>


<script>
export default {
	data() {
    return {
      isMenuOpen: false,
      headerIsActive: false,
			flip: '',
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
  },
}

</script>
