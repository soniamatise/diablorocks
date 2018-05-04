<template>
	<div class="row center">
		<div class="column column large-14 medium-20 small-20">

			<!-- holder -->
			<div :style="{ 'background-color': '' + gridColor + '' }" class="holder">
				<ul>

					<li v-for="gridIcon in gridIcons" :key="gridIcon.id" class="icon_holder">
						<img :src="gridIcon.url" :alt="gridIcon.alt">
					</li>
				</ul>
			</div>

		</div>


	</div>
</template>

<script>
export default {
	props: {
		gridColor: {
			type: String,
			default: ''
		},
		gridIcons: {
			type: Array,
			default: () => ({})
		}
	}
};
</script>
