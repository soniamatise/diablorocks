<template>
	<section class="intro" :style="{ 'background-color': '' + caseColor + '' }">
		<div class="intro_text">
			<div class="row center">
				<div class="column small-full medium-16 large-12">
					<h2><span class="medium">{{ caseName }}</span> {{ caseQuote }}</h2>
				</div>
			</div>
		</div>
		<div class="intro_image" :style="{ 'background-image': 'url(' + caseImage + ')' }">
			<div class="row center">
				<div class="column column-24">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['caseName', 'caseQuote', 'caseImage', 'caseColor'],
	mounted() {
	},
	methods: {
	}
}
</script>
