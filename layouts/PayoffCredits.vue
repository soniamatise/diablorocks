<template>
	<div class="payoff_credits">

		<!-- payoff -->
		<div class="row center">
			<div class="column large-12 medium-16 small-full payoff" v-html="intro"></div>
		</div>
		<!-- end payoff -->

		<!-- credits -->
		<div class="row center">
			<div class="column large-12 medium-16 small-full">
				<ul class="credits">
					<li class="row item center" v-for="credit in credits" :key="credit.id">
						<div class="row">
							<div class="column large-8 medium-full small-full ">
								<p class="medium">{{credit.info_table_key}}</p>
							</div>
							<div class="column large-16 medium-full small-full" v-html="credit.info_table_value"></div>
						</div>
					</li>
				</ul>
				<!-- link -->
				<div class="link" v-if="footer!==''">
					<p v-html="footer"></p> 
				</div>
				<!-- end link -->
			</div>
		</div>
		<!-- end credits -->

	</div>
</template>

<script>
	export default {
		props: ['intro', 'credits', 'footer']
	}
</script>
