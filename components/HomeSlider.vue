<template>
	<div><slot><h1>Hello world I am a HomeSLider</h1></slot></div>
</template>

<script>
import HomeSliderItem from '~/components/HomeSliderItem.vue'

export default {
	components: {
		HomeSliderItem,
	},
	props: [''],
	mounted() {
	},
	methods: {
		typeWriter: function(){

		}
	}
}
</script>
