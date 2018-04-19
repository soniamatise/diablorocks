<template>
	<main-layout>
		<h1>What we do</h1>
	</main-layout>
</template>

<script>
import axios from 'axios'
import MainLayout from '~/layouts/MainLayout.vue'

export default {
	components: {
		MainLayout
	},
	// asyncData () {
	// 	return axios.get(`${process.env.baseUrl}/wp/v2/pages?slug=about&_embed`)
	// 	.then((res) => {
	// 	return {
	// 		page: res.data[0],
	// 		layouts :res.data[0]['layout'],
  //     }
  //   })
  // }
}
</script>
