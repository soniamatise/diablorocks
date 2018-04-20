<template>
	<Motion
		:values="values"
		:spring="spring">
		<section id="next-case" class="next_case" slot-scope="props">

			<!-- holder -->
			<div class="holder" ref="holder">

				<!-- hover element -->
				<div v-if="image" class="hover_container" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()" v-on:click="nextCase()">
					<text-transition text-left="Next case" :text-right="caseName" onloadedmetadata=""></text-transition>
				</div>

				<nuxt-link to="/about" v-if="!image" class="hover_container" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()">
					<text-transition text-left="It's not all work" :text-right="caseName" onloadedmetadata=""></text-transition>
				</nuxt-link>
				<!-- end hover element -->

			</div>
			<!-- end holder -->

			<!-- case image -->
			<div id="caseImage" :class="['case_image', {'case_image--expand': expand}]" :style="[{'transform': `translateY(${props.yElement}%)`}, {'background-image': `url('${image}')` } ]">
				<!-- <img :src="image"> -->
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
			yElement: 0,
			expand: false
		}
	},
	methods: {
		// case color color and animation img on mouseenter
		bgOfCase: function() {
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = this.caseColor;

			const caseImage = document.getElementById('caseImage');
			// get grid size for image height on mouseover
			// const getGrid = window.innerWidth / 12;

			if(!this._data.expand){
				// vue motion TIM EPICNESS
				let self = this;
				this.yElement = -50
			}
		},
		// black color and animation img on mouseleave
		bgToNormal: function() {
			var self = this;
			const bgDiv = document.getElementById('next-case');
			bgDiv.style.backgroundColor = 'black';

			const caseImage = document.getElementById('caseImage');

			// vue motion TIM EPICNESS
			this.yElement = 0

		},
		nextCase: function() {
			let self = this;
			self._data.expand = true;
			this.yElement = -50;

			const bgDiv = document.getElementById('next-case').getBoundingClientRect().y;
			let pos = window.pageYOffset + bgDiv;
			console.log(pos);
			window.scrollTo(0, pos);


			setTimeout(function () {
				self.$router.push(`/work/${self.slug}`);
			}, 1500)
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
