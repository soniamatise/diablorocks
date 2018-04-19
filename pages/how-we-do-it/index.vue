<template>
	<main-layout>

		<section class="intro">
			<type-writer
			heading="Like what"
			v-on:doneTyping="showContent"
			/>
		</section>

		<section class="subnav">
			<nav class="nav" aria-label="Top navigation" ref="topNav">
				<ul class="nav__list">
					<li class="nav__item main-link">
						<nuxt-link class="nav__link" to="/about">
							<span class="nav__text">Who we are</span>
						</nuxt-link>
					</li>
					<li class="nav__item main-link">
						<nuxt-link class="nav__link" to="/what-we-do">
							<span class="nav__text">What we do</span>
						</nuxt-link>
					</li>
					<li class="nav__item main-link">
						<nuxt-link class="nav__link active" to="/how-we-do-it">
							<span class="nav__text">How we do it</span>
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</section>

		<section class="how_we_do_it">

			<div class="header_image">
				<div class="image_holder">
				</div>
			</div>

			<div class="content_block_left row center">
				<div class="large-8 column">
					<div class="content">
						<h3>We practice and preach empathy.</h3>
						<h5>Empathy with our clients’ organizations and their goals, their brand, our clients clients, and the teams we work with. Putting ourselves in the shoes of the user, we are able to truly understand their wants and needs.</h5>
						<p>In our opinion a total absorption of a brand and its users is the key to create solutions that are truly inspiring and extremely effective.</p>
					</div>
				</div>
				<div class="large-8 column">
					<div class="image_holder">
					</div>
				</div>
			</div>

			<div class="content_block row center">
				<div class="large-8 column">
					<div class="content">
						<h3>Co-creation</h3>
						<p>Empathy is by definition not a solitary endeavour. In our work and process we champion collaboration and co-creation. It delivers better results, more alignment and quite frankly: it’s way more fun for everyone involved.</p>
					</div>
				</div>
				<div class="large-8 column">
					<div class="content">
						<h3>Size doesn’t matter</h3>
						<p>Size doesn’t matter to us. We don’t work for big brands. Or for small ones. We work with people, companies and brands that we believe in. And in clients that believe in us. That’s when excellence happens.</p>
					</div>
				</div>
			</div>

			<div class="clients">
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
		}
	},
	methods: {
		showContent: function() {
			let self = this;
			self.displayContent = true;
			let col = document.querySelector('.how_we_do_it');
			self.Velocity(col, {
				transform: 'translateY(0)'
			}, 600, [180, 16]);
			setTimeout(function() {
				col.style = '';
				col.classList.add('stay');
			}, 600)
		}
	},
	// asyncData () {
	// 	return axios.get(`${process.env.baseUrl}/wp/v2/pages?slug=what-we-do&_embed`)
	// 	.then((res) => {
	// 	return {
	// 		page: res.data[0],
	// 		layouts :res.data[0]['layout'],
  //     }
  //   })
  // }
}
</script>
