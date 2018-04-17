
<!-- very basic data import -->
<template>
	<main-layout>
		<h1>{{page.title.rendered}}</h1>

		<!-- loop trough layouts -->
		<section v-for="value in layouts" :key="value.id" :class="value.acf_fc_layout">
			<!-- layout to generate slider -->
			<div v-if="value.acf_fc_layout==='gallery'" class="gallery">
				<!-- just data -->
				<span v-for="image in value.image_holder" :key="image.id" >
					url: {{ image.url }}
					title {{image.title}}
					width: {{image.width }}
					height: {{image.height}}
				</span>
			</div>

			<!-- team member bloc, image, name and function -->
			<div v-if="value.acf_fc_layout==='team_block'" class="team_member">
				<span v-for="team_member in value.team_member" :key="team_member.id" >
					image:{{ team_member.team_member_photo.url }}
					name: {{ team_member.team_member_name }}
					function {{ team_member.team_member_function }}

				</span>
			</div>

			<!-- simple text block -->
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
		return {
        	page: res.data[0],
			layouts :res.data[0]['layout'],
      }
    })
  }
}
</script>
