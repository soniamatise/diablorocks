<template>
	<section id="next-case" class="next_case">

		<!-- holder -->
		<div class="holder" ref="holder">

			<!-- hover element -->
			<div class="hover_container" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()" v-on:click="nextCase()">
				<text-transition text-left="Next case" :text-right="caseName" onloadedmetadata=""></text-transition>
			</div>
			<!-- end hover element -->

		</div>
		<!-- end holder -->

		<!-- case image -->
		<div id="caseImage" class="case_image">
			<img :src="image">
		</div>
		<!-- end case image -->

	</section>
</template>

<script>
import TextTransition from '~/components/TextTransition.vue'

export default {
	components: {
		TextTransition
	},
	props: ['caseName', 'leftText', 'image', 'caseColor', 'slug'],
	data() {
		return {
			Velocity: this.$velocity
		}
	},
	methods: {
		// case color color and animation img on mouseenter
		bgOfCase: function() {
			// console.log('hoi of case');
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = this.caseColor;

			const caseImage = document.getElementById('caseImage');
			// get grid size for image height on mouseover
			const getGrid = window.innerWidth / 12;

			// velocity
			let self = this;
			self.Velocity(caseImage, {
				transform: 'translateY(' + -getGrid + 'px)'
			}, 1500, [180, 9]);
		},
		// black color and animation img on mouseleave
		bgToNormal: function() {
			var self = this;
			// console.log('hoi to normal');
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';

			const caseImage = document.getElementById('caseImage');

			// velocity
			self.Velocity(caseImage, {
				transform: 'translateY(0px)'
			}, 700, [180, 16]);
		},
		nextCase: function() {
			this.$router.push(`/work/${this.slug}`);
		}
	},
	mounted: function() {

	}
}
</script>
