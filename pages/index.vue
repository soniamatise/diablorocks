<template>
	<main>
		<top-nav/>
		<home-slider :cases="cases" />
	</main>
</template>

<script>
import axios from 'axios';
import TopNav from '~/layouts/header/TopNav';
import HomeSlider from '~/components/home/HomeSlider';

export default {
	asyncData() {
		return axios.get(`${process.env.baseUrl}/page/homepage`).then(res => {
			return {
				cases: res.data.cases
			};
		});
	},
	components: {
		HomeSlider,
		TopNav
	},
	watch: {
		slideIn: function() {}
	}
};
</script>
