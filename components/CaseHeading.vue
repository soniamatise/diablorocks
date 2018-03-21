<template>
	<section class="intro">
		<div class="intro-text">
			<div class="row center">
				<div class="column small-full medium-16 large-12">
					<p><span>{{ caseName }}</span> {{ caseQuote }}</p>
				</div>
			</div>
		</div>
		<div class="intro-image" :style="{ 'background-image': 'url(' + image + ')' }">
			<div class="row center">
				<div class="column column-24">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: ['caseName', 'caseQuote', 'image'],
	mounted() {
	},
	methods: {
	}
}
</script>
