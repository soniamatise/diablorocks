<template>
	<main-layout>
		<slide-video :cuts="cuts" src="video/bbb.mp4" debug="true"></slide-video>
	</main-layout>
</template>


<script>
import MainLayout from '~/layouts/MainLayout.vue'
import SlideVideo from '~/components/SlideVideo.vue'

export default {
	components: {
		MainLayout,
		SlideVideo
	},
	data(){
		return{
			cuts: [6,12,24,32]
		}
	}
}
</script>
