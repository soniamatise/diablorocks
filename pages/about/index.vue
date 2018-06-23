<!-- very basic data import -->
<template>
	<main-layout>
		<loader :leave-open="leaveOpen"></loader>

		<section class="intro">
			<h1>About</h1>
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
				<div v-if="value.acf_fc_layout==='gallery'" class="container">
					<!-- swiper -->
					<div v-swiper:mySwiper="swiperOption" class="holder">
						<!-- swiper wrapper -->
						<div class="swiper-wrapper">
							<!-- swiper slide -->
							<div v-for="image in value.image_holder" :key="image.id" class="swiper-slide" >
								<div class="content_container">
									<div class="image_holder">
										<img :src="image.url" >
									</div>
								</div>
							</div>
							<!-- end swiper slide -->
						</div>
						<!-- end swiper wrapper -->
					</div>
				</div>

				<!-- simple text block -->
				<div v-if="value.acf_fc_layout==='simpel_text'" class="row center" >
					<div class="large-12 small-full column">
						<h3 v-if="value.block_title" slot="“header”">{{ value.block_title }}</h3>
						<div class="simple_text_content" v-html="value.block_text"/>
					</div>
				</div>

				<!-- simple text block 2 col-->
				<div v-if="value.acf_fc_layout==='2_column_content_with_call_to_action'" class="row center" >
					<div class="large-full small-full column title_block">
						<h2 v-if="value.block_title" v-html="value.block_title"/>
					</div>
					<div class="large-8 small-full column content_block">
						<h2 v-if="value.left_column_title" slot="“header”">{{ value.left_column_title }}</h2>
						<div class="simple_text_content" v-html="value.left_column_content"/>
						<nuxt-link :to="'work/'+ value.left_column_call_to_action.post_name" class="simple_text_content__link">
							<span class="simple_text_content__text"> {{ value.left_column_call_to_action.post_title }}</span>
						</nuxt-link>
					</div>
					<div class="large-8 small-full column content_block">
						<h2 v-if="value.right_column_title" slot="“header”">{{ value.right_column_title }}</h2>
						<div class="simple_text_content" v-html="value.right_column_content"/>
						<nuxt-link :to="'work/'+ value.right_column_call_to_action.post_name" class="simple_text_content__link">
							<span class="simple_text_content__text"> {{ value.right_column_call_to_action.post_title }}</span>
						</nuxt-link>
					</div>
				</div>

				<!-- team member block, image, name and function -->
				<div v-if="value.acf_fc_layout==='team_block'" class="team_member">
					<ul>
						<li v-for="team_member in value.team_member" :key="team_member.id" >
							<div class="picture_frame">
								<img :src="team_member.team_member_photo.url" >
							</div>
							<div class="member_info">
								<p class="medium"> {{ team_member.team_member_name }} </p>
								<p class="gray"> {{ team_member.team_member_function }} </p>
							</div>
						</li>
					</ul>
				</div>


				<!-- end loop trough layouts -->
			</div>

			<!-- logo  -->
			<div class="client_logo black_bg">
				<ul>
					<li>Amnest International</li>
					<li>BBB Cycling</li>
					<li>Schweppes</li>
				</ul>
			</div>

		</section>



	</main-layout>
</template>

<script>
import axios from 'axios';

import MainLayout from '~/layouts/body/MainLayout.vue';
import Loader from '~/components/animations/Loader';

export default {
	components: {
		MainLayout,
		Loader
	},
	data() {
		return {
			Velocity: this.$velocity,
			displayContent: false,
			// LOADING COMPONENT LEAVE OVERLAY
			leaveOpen: false,
			swiperOption: {
				slidesPerView: 'auto',
				centeredSlides: true,
				speed: 600,
				grabCursor: true,
				preventIntercationOnTransition: true,
				touchRatio: 1,
				mousewheel: true,
				direction: 'horizontal',
				autoHeight: true,

				// loop: true,
				keyboard: {
					enabled: true
				},
				breakpoints: {
					768: {
						slidesPerView: '1',
						touchRatio: 1,
						loop: true,
						mousewheel: false
					}
				}
			}
		};
	},
	// LOADING COMPONENT LEAVE OVERLAY
	beforeRouteLeave (to, from , next) {
		this.leaveOpen = true;
		setTimeout(function() {
			next();
		},200);
	},
	methods: {
		showContent: function() {
			let self = this;
			self.displayContent = true;
			let col = document.querySelector('.about');
			self.Velocity(col, { transform: 'translateY(0)' }, 600, [180, 16]);
			setTimeout(function() {
				col.style = '';
				col.classList.add('stay');
			}, 600);
		}
	},
	asyncData() {
		return axios
			.get(`${process.env.baseUrl}/wp/v2/pages?slug=about&_embed`)
			.then(res => {
				return {
					page: res.data[0],
					layouts: res.data[0]['layout']
				};
			});
	}
};
</script>
