<template>
	<h1 class="nav__logo">
		<a class="nav__logo__link" href="/">Matise</a>
		<label v-on:click="toggleScrollBody()" @click="toggleHeaderWidth()" class="trigger" for="menu-trigger">
			<span></span>
		</label>
	</h1>
</template>


<script>
export default {
	data() {
    return {
      isMenuOpen: false,
      headerIsActive: false
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isMenuOpen ? 'scroll-disable' : ''
      }
    };
  },
  methods: {
    toggleScrollBody: function() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleHeaderWidth: function() {
      // setTimeout(()=>{
      this.$emit.headerIsActive = false;
      // },1000);
    }
  },
}

</script>
