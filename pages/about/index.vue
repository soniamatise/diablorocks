<template>
	<main-layout>
		<h1>{{page.title.rendered}}</h1>
	</main-layout>
</template>

<script>
import axios from 'axios'
import MainLayout from '~/layouts/MainLayout.vue'

export default {
	components: {
		MainLayout
	},
	asyncData () {
    return axios.get(`${process.env.baseUrl}/wp/v2/pages?slug=about&_embed`)
    .then((res) => {
      console.log(res.data[0]);
			return {
        page: res.data[0]
      }
    })
  }
}
</script>
