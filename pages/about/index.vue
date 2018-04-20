<!-- very basic data import -->
<template>
	<main-layout>

		<section class="intro">
			<type-writer
			heading="About"
			sub="It’s all about us"
			v-on:doneTyping="showContent"
			/>
		</section>

		<!--  sub nav -->
		<!-- <section class="subnav">
			<nav class="nav" aria-label="Top navigation" ref="topNav">
				<ul class="nav__list">
					<li class="nav__item main-link">
						<nuxt-link class="nav__link active" to="/about">
							<span class="nav__text">Who we are</span>
						</nuxt-link>
					</li>
					<li class="nav__item main-link">
						<nuxt-link class="nav__link" to="/what-we-do">
							<span class="nav__text">What we do</span>
						</nuxt-link>
					</li>
					<li class="nav__item main-link">
						<nuxt-link class="nav__link" to="/how-we-do-it">
							<span class="nav__text">How we do it</span>
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</section> -->


		<section class="about">
			<!-- loop trough layouts -->
			<div v-for="value in layouts" :key="value.id" :class="value.acf_fc_layout">
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
										<img :src="image.url" />
									</div>
								</div>
							</div>
							<!-- end swiper slide -->
				    </div>
						<!-- end swiper wrapper -->
			  	</div>
				</div>

				<!-- simple text block -->
				<div class="row center" v-if="value.acf_fc_layout==='simpel_text'" >
					<div class="large-12 column">
						<h3 v-if="value.block_title" slot=“header”>{{value.block_title}}</h3>
						<div class="simple_text_content" v-html="value.block_text"></div>
					</div>
				</div>

				<!-- simple text block -->
				<div class="row center" v-if="value.acf_fc_layout==='2_column_content_with_call_to_action'" >
					<div class="large-6 column">
						<h3 v-if="value.left_column_title" slot=“header”>{{value.left_column_title}}</h3>
						<div class="simple_text_content" v-html="value.left_column_content"></div>
						<nuxt-link class="simple_text_content__link" :to="'case/'+ value.left_column_call_to_action.post_name">
							<span class="simple_text_content__text">Explore {{value.left_column_call_to_action.post_title}}</span>
						</nuxt-link>
					</div>
					<div class="large-6 column">
						<h3 v-if="value.right_column_title" slot=“header”>{{value.right_column_title}}</h3>
						<div class="simple_text_content" v-html="value.right_column_content"></div>
						<nuxt-link class="simple_text_content__link" :to="'case/'+ value.right_column_call_to_action.post_name">
							<span class="simple_text_content__text">Explore {{value.right_column_call_to_action.post_title}}</span>
						</nuxt-link>
					</div>
				</div>

				<!-- team member block, image, name and function -->
				<div v-if="value.acf_fc_layout==='team_block'" class="team_member">
					<ul>
						<li  v-for="team_member in value.team_member" :key="team_member.id" >
							<div class="picture_frame">
								<img :src="team_member.team_member_photo.url" />
							</div>
							<div class="member_info">
								<p class="bold"> {{ team_member.team_member_name }} </p>
								<p class="gray"> {{ team_member.team_member_function }} </p>
							</div>
						</li>
					</ul>
				</div>
				<!-- end loop trough layouts -->
			</div>

			<!-- 2 column text block  -->
			<div class="row center black_bg">
				<div class="large-half column content_block">
					<h3>Title</h3>
					<p>Text</p>
				</div>
				<div class="large-half column content_block">
					<h3>Title</h3>
					<p>Text</p>
				</div>
			</div>
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
			Velocity: this.$velocity,
			displayContent: false,
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
	methods: {
		showContent: function(){
			let self = this;
			self.displayContent = true;
			let col = document.querySelector('.about');
			self.Velocity(col, { transform: 'translateY(0)' }, 600, [180, 16]);
			setTimeout(function () {
				col.style = '';
				col.classList.add('stay');
			}, 600)
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
