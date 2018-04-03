<template>
<section id="next-case" class="nextCase">
	<text-transition text-left="Next case" :text-right="caseName" onloadedmetadata="" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()"></text-transition>
	<div id="caseImage" class="caseImage">
		<img :src="image">
	</div>
</section>
</template>

<script>
import TextTransition from '~/components/TextTransition.vue'

export default {
	components:{
		TextTransition
	},
	props: ['caseName', 'image', 'caseColor'],
	data() {
		return {
			Velocity: this.$velocity,
		}
	},
	mounted() {

	},
	methods: {

		bgOfCase: function() {
			console.log('hoi to color case');

			// const bgDiv = document.getElementById('next-case');
			// bgDiv.style.backgroundColor = this.caseColor;

		},

		bgToNormal: function() {
			console.log('hoi to black');
			// const bgDiv = document.getElementById('next-case');
			// bgDiv.style.backgroundColor = 'black';
		},

	}
}
</script>
