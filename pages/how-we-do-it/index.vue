<template>
	<main-layout>

		<section class="intro">
			<type-writer
			heading="Like what"
			v-on:doneTyping="showContent"
			/>
		</section>

		<section class="what_we_do">

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
