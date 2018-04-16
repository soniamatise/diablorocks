<template>
	<main>
		<input id="menu-trigger" type="checkbox"/>
		<logo/>
		<top-nav/>

		<home-slider :cases="cases" />
	</main>
</template>

<script>
import axios from 'axios'

import TopNav from '~/layouts/TopNav';
import Logo from '~/layouts/Logo';
import HomeSlider from '~/components/HomeSlider';

export default {
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/page/homepage`)
    .then((res) => {
			return {
				cases: res.data.cases
			}
    })
  },
	components: {
		HomeSlider,
		TopNav,
		Logo
	},
	watch: {
		slideIn: function(){
		}
	},
}
</script>
