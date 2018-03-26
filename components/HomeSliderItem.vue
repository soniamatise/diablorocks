<template>
	<div class="swiper-slide">
		<!-- <div class="content name">
			<p>{{ caseName }}</p>
		</div> -->
		<div class="contentHolder">
			<img v-bind:src="caseImage" data-swiper-parallax="750" width="1200">
		</div>
		<!-- <div class="content description">
			<p>{{ caseDescription }}</p>
		</div> -->
	</div>
</template>

<script>
export default {
	props: ['caseName', 'caseDescription', 'caseImage', 'caseUrl'],
	// mounted is sort of like domready
	mounted() {
	},
	methods: {
		typeWriter: function(){

		}
	}
}
</script>
