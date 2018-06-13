<template>
	<main-layout>
		<!-- <page-transition-open></page-transition-open> -->
		<!-- <page-transition-close></page-transition-close> -->
		<!-- <slide-video :cuts="cuts" src="video/bbb.mp4" debug="true"></slide-video> -->
	</main-layout>
</template>


<script>
import MainLayout from '~/layouts/body/MainLayout.vue';
import PageTransitionClose from '~/components/animations/PageTransitionClose.vue';
import PageTransitionOpen from '~/components/animations/PageTransitionOpen.vue';
// import SlideVideo from '~/components/work/detail/SlideVideo.vue'

export default {
	components: {
		MainLayout,
		PageTransitionOpen,
		PageTransitionClose
		// SlideVideo
	},
	data() {
		return {
			cuts: [6, 12, 24, 32]
		};
	}
};
</script>
