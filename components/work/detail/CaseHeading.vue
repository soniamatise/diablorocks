<template>
<Motion
	:values="values"
	:spring="spring">
	<div slot-scope="props">
		<section class="intro" :style="introStyle">
			<!-- intro text -->
			<div class="intro_text">
				<div class="row center">
					<div class="column small-full medium-16 large-12">
						<h2><span class="medium">{{ caseName }}</span> {{ caseQuote }}</h2>
					</div>
				</div>

				<div id="caseImage" class="intro_holder" :style="{'top': `${props.yElement}%`}">
					<div class="intro_image" :style="{ 'background-image': 'url(' + caseImage + ')' }">
					</div>
				</div>
			</div>
			<!-- end intro text -->
		</section>
		<section class="intro_fake" :style="{ 'background-color': '' + caseColor + '' }"></section>
	</div>
</Motion>
</template>

<script>
import * as VueMotion from '~/plugins/vue-motion'

export default {
	props: ['caseName', 'caseQuote', 'caseImage', 'caseColor', 'image'],
	data() {
		return {
			yElement: 0,
			introStyle: { 'background-color': this.caseColor, 'z-index': 10 }
		}
	},
	methods: {
		// case color color and animation img on mouseenter
		bgOfCase: function() {
			const caseImage = document.getElementById('caseImage');
			let self = this;
			this.yElement = 100
			this.introStyle['z-index'] = 1

			self.$emit('doneAnimation')
		},
	},
	mounted() {
		let self = this;
		setTimeout(function() {
			self.bgOfCase();
		}, 600);
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
	components: { VueMotion }

}
</script>
