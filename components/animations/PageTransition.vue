<template>
	<transition name="slide-fade" mode="out-in" @after-enter="afterEnter" appear>
		<div class="page-transition-overlay fade-enter">

		</div>
	</transition>
</template>

<script>
export default {
	props: {

	},
	data: function() {
		return {

		};
	},
	mounted() {

	},
	methods: {
		afterEnter: function () {
			// how to have this per-route
			console.log( 'Route entered' );
		}
	}
};
</script>

<style scoped>
.page-transition-overlay {
    position: fixed;
    background-color: white;
    z-index: 500;
    width: 100%;
    height: 100vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
