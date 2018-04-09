<template>
	<main>
		<input id="menu-trigger" type="checkbox"/>
		<logo/>
		<top-nav/>
		<home-slider >

			<home-slider-item v-for="value in cases" :key="value.post.id"
				:caseName="value.case_fields.client_name"
				:slug="`work/${value.post.post_name}`"
				:caseDescription="value.case_fields.case_description"
				:caseImage="value.case_fields.case_image"
				caseImageHeight="full-height"
			/>

		</home-slider>
	</main>
</template>

<script>
import axios from 'axios'

import TopNav from '~/layouts/TopNav';
import Logo from '~/layouts/Logo';
import HomeSlider from '~/components/HomeSlider';
import HomeSliderItem from '~/components/HomeSliderItem';

export default {
	asyncData ({ params }) {
    return axios.get(`${process.env.baseUrl}/page/homepage`)
    .then((res) => {
			console.log(res.data);
			return {
				cases: res.data.cases
			}
    })
  },
	components: {
		HomeSlider,
		HomeSliderItem,
		TopNav,
		Logo
	},
	watch: {
		slideIn: function(){
			// console.log('change');
		}
	},
}
</script>
