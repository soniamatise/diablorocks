<template>
	<div class="row center">
		<div class="column column large-14 medium-20 small-20">

			<!-- holder -->
			<div class="holder" :style="{ 'background-color': '' + gridColor + '' }">
			<ul>

			<li class="icon_holder" v-for="gridIcon in gridIcons" :key="gridIcon.id">
				<img :src="gridIcon.url" :alt="gridIcon.alt">
			</li>
		</ul>
	</div>

		</div>


	</div>
</template>

<script>
// export default {
//   data() {
//     return {
//     };
//   },
//   props: ['caseColor' , 'caseIcon' ,''],
// 	mounted() {
// 	},
// 	methods: {
// 	}
// }


	export default {
		props: ['gridColor', 'gridIcons']
	}
</script>
