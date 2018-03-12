<template>
	<main-layout>
		<div class="row center">
			<div class="column large-18 medium-full small-full">
				<div class="holder full">
					<!-- img paceholder for principle anime-->
					<div class="contentHolder">
						<img src="../../static/img/placeholder.png" alt="placeholder">
					</div>
				</div>
			</div>
			<div class="column large-12 medium-16 small-16">
				<h3>Part of you ride</h3>
				<p>Matise was asked to develop an online concept that would translate BBB’s vision. Simultaneously preserving the brand’s rich heritage and community, whilst also repositioning BBB’s modern vision on cycling. We developed a concept that allows BBB to
					present its products, without losing touch of the what a sunset ride in late spring feels like. In this way visitors may inform themselves about the specs on a helmet, while feeling the thrill of crossing down a hill.</p>
			</div>
		</div>
		<div class="row center">
			<div class="column large-14 medium-20 small-full">
				<slick ref="slick" :options="slickOptions">
					<img src="../../static/img/placeholderMob.png" alt="placeholder">
					<img src="../../static/img/placeholderMob.png" alt="placeholder">
				</slick>
			</div>
			<div class="column large-12 medium-16 small-16">
				<h4><span>Responsive?</span>In the design process we made the choice to kill responsive. A website should be fluid and adapt to all screen sizes from our perspective.</h4>
			</div>
		</div>
	</main-layout>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue'

export default {
	components: {
		MainLayout,
	}
}

</script>
