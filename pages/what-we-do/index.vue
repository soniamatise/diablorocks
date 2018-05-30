<template>
	<main-layout>

		<section class="intro">
			<type-writer heading="Like Riri says" @doneTyping="showContent" />
		</section>

		<section class="subnav">
			<nav ref="topNav" class="nav" aria-label="Top navigation">
				<ul class="nav__list">
					<li class="nav__item main-link">
						<nuxt-link class="nav__link" to="/about">
							<span class="nav__text">Who we are</span>
						</nuxt-link>
					</li>
					<li class="nav__item main-link">
						<nuxt-link class="nav__link active" to="/what-we-do">
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
		</section>

		<section class="what_we_do">

			<div class="header_image">
				<div class="image_holder"/>
			</div>

			<div class="content_block_left row center">
				<div class="large-8 column">
					<div class="content">
						<h3>Brand development &amp; Strategic direction</h3>
						<h5>We listen, empathize, explore, and collaborate to articulate authentic brand foundations.</h5>
						<p>Customer centricity and measurable strategies help the brands we believe in, grow.</p>
					</div>
				</div>
				<div class="large-8 column">
					<div class="image_holder"/>
				</div>
			</div>

			<div class="content_block_right row center">
				<div class="large-8 column">
					<div class="image_holder"/>
				</div>
				<div class="large-8 column">
					<div class="content">
						<h3>Digital excellence</h3>
						<h5>We dream, conceptualize, design and build never seen before digital solutions.</h5>
						<p>UX, perfectionistic design and coding wizardry lead to cross-platform, cross-device experiences that convert.</p>
					</div>
				</div>
			</div>

			<div class="content_block row center">
				<div class="large-8 column">
					<div class="content">
						<h3>Branding &amp; strategy</h3>
						<p>When they turn left, you turn right. You’re smart like that.</p>
						<ul>
							<li>Design thinking workshops</li>
							<li>KPIs &amp; measurement</li>
							<li>Research &amp; market intelligence</li>
							<li>Stakeholder alignment</li>
							<li>Strategic planning</li>
						</ul>
						<a class="nav_link" href="/work/kalkhoff-bikes"><span class="nav_text">Explore Kalkhoff Bikes</span></a>
					</div>
				</div>
				<div class="large-8 column">
					<div class="content">
						<h3>Design &amp; development</h3>
						<p>If you can come up with something we can’t make, you’ll get it for free.</p>
						<ul>
							<li>Art direction</li>
							<li>Brand Appearance Guide</li>
							<li>E-commerce</li>
							<li>UI &amp; UX</li>
						</ul>
						<a class="nav_link" href="/work/bbb-cycling-magento2"><span class="nav_text">Explore BBB Cycling</span></a>
					</div>
				</div>
			</div>

			<div class="content_block row center">
				<div class="large-8 column">
					<div class="content">
						<h3>Campaigns</h3>
						<p>Our campaigns are insanely effective, and effectively insane.</p>
						<ul>
							<li>Concept</li>
							<li>Content</li>
							<li>Creative direction</li>
							<li>Planning</li>
							<li>Strategy</li>
						</ul>
						<a class="nav_link" href="/work/ticketchaser"><span class="nav_text">Explore Ticket Chaser</span></a>
					</div>
				</div>
				<div class="large-8 column">
					<div class="content">
						<h3>Content creation</h3>
						<p>Cat videos, fail compilations, which-Harry-Potter-character-are-you?-quizzes. But actually:</p>
						<ul>
							<li>Campaigns</li>
							<li>Copywriting</li>
							<li>Image retouching</li>
							<li>Photography</li>
							<li>Video editing</li>
						</ul>
						<a class="nav_link" href="/work/expeditie-wadden"><span class="nav_text">Explore Expeditie Wadden</span></a>
					</div>
				</div>
			</div>

			<div class="awards">
				<ul>
					<li>awwwards</li>
					<li>CSS design award</li>
					<li>German design award</li>
				</ul>
			</div>

		</section>

	</main-layout>
</template>

<script>
import MainLayout from '~/layouts/body/MainLayout.vue';
import TypeWriter from '~/components/animations/TypeWriter';

export default {
	components: {
		MainLayout,
		TypeWriter
	},
	data() {
		return {
			Velocity: this.$velocity,
			displayContent: false
		};
	},
	methods: {
		showContent: function() {
			let self = this;
			self.displayContent = true;
			let col = document.querySelector('.what_we_do');
			self.Velocity(
				col,
				{
					transform: 'translateY(0)'
				},
				600,
				[180, 16]
			);
			setTimeout(function() {
				col.style = '';
				col.classList.add('stay');
			}, 600);
		}
	}
};
</script>
