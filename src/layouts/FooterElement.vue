<template>
	<footer class="footer">
		<section class="row footer__title">
			<h3>Not your average Digital Agency.</h3>
		</section>

			<ul class="row list--row footer__nav">
				<li class="mobile-hide footer__nav__list-item footer__nav__list-item--active"><a href="/culture">Culture</a></li>
				<li class="mobile-hide footer__nav__list-item"><a href="/work">Work</a></li>
				<li class="mobile-hide footer__nav__list-item"><a href="/who-we-are">Who we are</a></li>
				<li class="mobile-hide footer__nav__list-item"><a href="/what-we-do">What we do</a></li>
				<li class="footer__nav__list-item"><a href="/news">News</a></li>
				<li class="footer__nav__list-item"><a href="/careers">Careers</a></li>
			</ul>

		<section class="row footer__contact-us">
				<ul class="column list--column footer__contact">
					<li class="footer__contact__item">office@matise.nl</li>
					<li class="footer__contact__item">+31 20 845 37 99</li>
					<li class="footer__contact__item">Entrepotdok 78, Amsterdam</li>
					<li class="footer__contact__item">Open till 6pm today</li>
				</ul>

				<ul class="column list--column footer__social">
					<li class="footer__social__item link--external"><a href="https://www.instagram.com/matiseamsterdam/" target="_blank">Instagram</a></li>
					<li class="footer__social__item link--external"><a href="https://www.facebook.com/MatiseAmsterdam/" target="_blank">Facebook</a></li>
					<li class="footer__social__item link--external"><a href="https://www.linkedin.com/company/matise/" target="_blank">LinkedIn</a></li>
					<li class="footer__social__item link--external"><a href="https://github.com/MatiseAms" target="_blank">Github</a></li>
				</ul>
		</section>

		<ul class="row list--row footer__practical">
			<li class="footer__practical__item copyright">© Matise 2018 — All Rights Reserved</li>
			<li class="footer__practical__item"><a href="#">Terms & conditions</a></li>
			<li class="footer__practical__item"><a href="#">Privacy Policy</a></li>
		</ul>
	</footer>
</template>

<style lang="scss">
	@import '../assets/scss/app.scss';
</style>

<script>
/* eslint-disable */
import VLink from '../components/VLink.vue'
export default {
	components: {
		VLink
	}
}
</script>
