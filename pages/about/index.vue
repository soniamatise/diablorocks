<template>
	<main-layout>
		<h1>{{page.title.rendered}}</h1>

		<section v-for="value in layouts" :key="value.id" :class="value.acf_fc_layout">
			<div v-if="value.acf_fc_layout==='gallery'" class="gallery">
				<span v-for="image in value.image_holder" :key="image.id" >
					url: {{ image.url }}
					title {{image.title}}
					width: {{image.width }}
					height: {{image.height}}

				</span>
			</div>

			<div v-if="value.acf_fc_layout==='team_block'" class="team_member">
				<span v-for="team_member in value.team_member" :key="team_member.id" >

					name: {{ team_member.team_member_name }}
					function {{ team_member.team_member_function }}


				</span>
			</div>

			{{value.acf_fc_layout}}
			<title-text v-if="value.acf_fc_layout==='simpel_text'" >
				<h3 v-if="value.block_title" slot="header">{{value.block_title}}</h3>
				<div class="simple_text_content" v-html="value.block_text"></div>
			</title-text>
		</section>


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
      console.log(res.data[0]['layout'][2]);
			return {
        page: res.data[0],
		layouts :res.data[0]['layout'],


      }
    })
  }
}
</script>
