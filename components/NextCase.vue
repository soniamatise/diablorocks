<template>
	<Motion
		:values="values"
		:spring="spring">
		<section id="next-case" class="next_case" slot-scope="props">

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
			<div id="caseImage" class="case_image" :style="{'transform': `translateY(${props.yElement}px)`}">
				<img :src="image">
			</div>
			<!-- end case image -->

		</section>
		</Motion>
</template>

<script>
import * as VueMotion from '~/plugins/vue-motion'
import TextTransition from '~/components/TextTransition.vue'

export default {
	components: {
		TextTransition,
		VueMotion,
	},
	props: ['caseName', 'leftText', 'image', 'caseColor', 'slug'],
	data() {
		return {
			yElement: 100,
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

			// vue motion TIM EPICNESS
			let self = this;
			this.yElement = -getGrid

		},
		// black color and animation img on mouseleave
		bgToNormal: function() {
			var self = this;
			// console.log('hoi to normal');
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';

			const caseImage = document.getElementById('caseImage');

			// vue motion TIM EPICNESS
			this.yElement = 0

		},
		nextCase: function() {
			this.$router.push(`/work/${this.slug}`);
		}
	},
	mounted: function() {

	},
	computed: {
		spring () {
			return {
				stiffness: 200,
				damping: 16,
				precision: 0.01,
			}
		},
		values () {
			return {
				yElement: this.yElement,
			}
		},
	},
}
</script>
