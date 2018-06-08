<template>
	<!-- <transition name="bounce"> -->
	<!-- <div v-if="show" class="page-transition-overlay"> -->
	<!-- <button @click="show = !show">Toggle show</button> -->
	<!-- </div> -->
	<div class="page-transition-overlay_close">
		<!-- <button @click="show = !show">Toggle show</button> -->
	</div>
	<!-- </transition> -->
</template>

<script>
export default {
	props: {

	},
	data: function() {
		return {
			show: false
		};
	},
	mounted() {

	},
	methods: {
		beforeLeave: function () {
			// how to have this per-route
			console.log( 'Route entered' );
		}
	}
};
</script>

<style scoped>
/* .page-transition-overlay {
    position: fixed;
    background-color: white;
    z-index: 500;
    width: 0%;
    height: 100%;
    left: 0;
    opacity: 1;
    animation-name: example;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-direction: forwards;
}
@keyframes example {
    0%   { width: 0%;}
    100% { width: 100%;}
} */

</style>
