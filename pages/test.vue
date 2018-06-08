<template>
	<main-layout>
		<page-transition></page-transition>
		<!-- <slide-video :cuts="cuts" src="video/bbb.mp4" debug="true"></slide-video> -->
	</main-layout>
</template>


<script>
import MainLayout from '~/layouts/body/MainLayout.vue';
import PageTransition from '~/components/animations/PageTransition.vue';
// import SlideVideo from '~/components/work/detail/SlideVideo.vue'

export default {
	components: {
		MainLayout,
		PageTransition
		// SlideVideo
	},
	data() {
		return {
			cuts: [6, 12, 24, 32]
		};
	}
};
</script>
