<template>
<section id="payoffCredits">
	<div class="row center">
		<div class="column large-12 medium-16 small-full payoff" v-html="intro"></div>
	</div>
	<div class="credits">
		<div class="row item center" v-for="credit in credits" :key="credit.id">
			<div class="column large-12 medium-16 small-full">
				<div class="row">
					<div class="column large-8 medium-full small-full ">
						<p class="medium">{{credit.info_table_key}}</p>
					</div>
					<div class="column large-16 medium-full small-full">
						<p v-html="credit.info_table_value"></p>
					</div>
					<div class="line"></div>
				</div>
				<!-- end column -->
			</div>
			<!-- end row -->
		</div>
		<div class="row column large-12 medium-16 small-full link" v-html="footer"></div>
	</div>
</section>
</template>

<script>
	export default {
		props: ['intro', 'credits', 'footer']
	}
</script>
