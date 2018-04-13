<template>
	<div>
	<section class="intro" :style="{ 'background-color': '' + caseColor + '' }">

		<!-- intro text -->
		<div class="intro_text">
			<div class="row center">
				<div class="column small-full medium-16 large-12">
					<h2><span class="medium">{{ caseName }}</span> {{ caseQuote }}</h2>
				</div>
			</div>

			<div id="caseImage" class="intro_holder">
				<div class="intro_image" :style="{ 'background-image': 'url(' + caseImage + ')' }">
				</div>
			</div>
		</div>
		<!-- end intro text -->

		<!-- <div class="intro_holder" :style="{ 'background-image': 'url(' + caseImage + ')' }">
			<div class="intro_image"></div>
		</div> -->
	</section>

	<section class="intro_fake" :style="{ 'background-color': '' + caseColor + '' }"></section>

	</div>


</template>

<!--
// export default {
// 	props: ['caseName', 'caseQuote', 'caseImage', 'caseColor'],
// 	mounted() {
// 	},
// 	methods: {
// 	}
// }
-->

<script>

export default {
	props: ['caseName', 'caseQuote', 'caseImage', 'caseColor', 'image'],
	data() {
		return {
			Velocity: this.$velocity
		}
	},
	methods: {
		// case color color and animation img on mouseenter
		bgOfCase: function() {
			const caseImage = document.getElementById('caseImage');
			// velocity
			let self = this;
			self.Velocity(caseImage, {
				top: '100%'
			}, 2000, [180, 9])
			.then(function(){ self.$emit('doneAnimation') });
		}
	},
	mounted() {
		let self = this;
		setTimeout(function() {
			self.bgOfCase();
		}, 600);
	}
}
</script>
