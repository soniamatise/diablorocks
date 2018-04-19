
<!-- very basic data import -->
<template>
	<main-layout>

		<section class="intro">
			<type-writer
			heading="About"
			sub="It's all about us"
			v-on:doneTyping="showContent"
			/>
		</section>

		<!-- loop trough layouts -->
		<section v-for="value in layouts" :key="value.id" :class="value.acf_fc_layout">

			<!-- layout to generate slider -->
			<div v-if="value.acf_fc_layout==='gallery'" class="gallery">

				<!-- swiper -->
				<div class="holder" v-swiper:mySwiper="swiperOption">

					<!-- swiper wrapper -->
					<div class="swiper-wrapper">

						<!-- swiper slide -->
						<div class="swiper-slide" v-for="image in value.image_holder" :key="image.id" >
							<div class="content_container">
								<div class="image_holder">

							url: {{ image.url }}
							title {{image.title}}
							width: {{image.width }}
							height: {{image.height}}
								</div>
						</div>


			      </div>
						<!-- end swiper slide -->

			    </div>
					<!-- end swiper wrapper -->

		  	</div>

			</div>

			<!-- team member bloc, image, name and function -->
			<div v-if="value.acf_fc_layout==='team_block'" class="team_member">
				<span v-for="team_member in value.team_member" :key="team_member.id" >
					image:{{ team_member.team_member_photo.url }}
					name: {{ team_member.team_member_name }}
					function {{ team_member.team_member_function }}
					<img :src="team_member.team_member_photo.sizes.thumbnail" ref="imgActive" />
				</span>
			</div>

			<!-- simple text block -->
			<title-text v-if="value.acf_fc_layout==='simple_text'" >
				<h3 v-if="value.block_title" slot="header">{{value.block_title}}</h3>
				<div class="simple_text_content" v-html="value.block_text"></div>
			</title-text>

		</section>
	</main-layout>
</template>

<script>
import axios from 'axios'

import MainLayout from '~/layouts/MainLayout.vue'
import TypeWriter from '~/components/TypeWriter'


export default {
	components: {
		MainLayout,
		TypeWriter,
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 'auto',
	      centeredSlides: true,
				speed: 600,
				grabCursor: true,
				loop: true,
				loopedSlides: 2,
				preventIntercationOnTransition: true,
				keyboard: {
			    enabled: true,
			  },
			}
		}
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
