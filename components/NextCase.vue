<template>
<section id="next-case" class="nextCase">
	<div class="hoverContainer" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()">
		<text-transition text-left="Next case" :text-right="caseName" onloadedmetadata=""></text-transition>
	</div>
	<div id="caseImage" class="caseImage">
		<img :src="image">
	</div>
</section>
</template>

<script>
import TextTransition from '~/components/TextTransition.vue'

export default {
	components: {
		TextTransition
	},
	props: ['caseName', 'image', 'caseColor'],
	data() {
		return {
			Velocity: this.$velocity
		}
	},
	methods: {
		//case color color and animation img on mouseenter
		bgOfCase: function() {
			// console.log('hoi of case');
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = this.caseColor;

			const caseImage = document.getElementById('caseImage');
			//get grid size for image height on mouseover
			const getGrid = window.innerWidth / 12;
			let self = this;

			setTimeout(function() {
				self.Velocity(caseImage, {
					transform: 'translateY(' + -getGrid + 'px)'
				}, 800, [180, 12]);
			}, 600);
		},
		//black color and animation img on mouseleave
		bgToNormal: function() {
			// console.log('hoi to normal');
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';

			const caseImage = document.getElementById('caseImage');

			this.Velocity(caseImage, {
				transform: 'translateY(0px)'
			}, 800, [180, 18]);
		},
	},
	mounted: () => {

	}
}
</script>
