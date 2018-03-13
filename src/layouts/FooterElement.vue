<template>
	<footer class="footer">
<div class="column medium-16 small-full">
	<section class="row footer__title">
		<h3>Not your average Digital Agency.</h3>
	</section>
	<nav class="footer__nav" aria-label="Footer navigation">
		<ul class="row list--row ">
			<li class="mobile-hide footer__nav__list-item footer__nav__list-item--active font-medium"><a href="/culture">Culture</a></li>
			<li class="mobile-hide footer__nav__list-item font-medium"><a href="/work">Work</a></li>
			<li class="mobile-hide footer__nav__list-item font-medium"><a href="/who-we-are">Who we are</a></li>
			<li class="mobile-hide footer__nav__list-item font-medium"><a href="/what-we-do">What we do</a></li>
			<li class="footer__nav__list-item font-medium"><a href="/news">News</a></li>
			<li class="footer__nav__list-item font-medium"><a href="/careers">Careers</a></li>
		</ul>
	</nav>

	<section class="row footer__contact-us">
		<ul class="column list--column footer__contact">
			<li class="footer__contact__item font-large"><a href="mailto:office@matise.nl">office@matise.nl</a></li>
			<li class="footer__contact__item font-large"><a href="tel:+31208453799">+31 20 845 37 99</a></li>
			<li class="footer__contact__item font-large">Entrepotdok 78, Amsterdam</li>
			<li class="footer__contact__item font-large">Open till 6pm today</li>
		</ul>

		<ul class="column list--column footer__social">
			<li class="footer__social__item"><a class="font-large link--external" href="https://www.instagram.com/matiseamsterdam/" target="_blank">Instagram</a></li>
			<li class="footer__social__item"><a class="font-large link--external" href="https://www.facebook.com/MatiseAmsterdam/" target="_blank">Facebook</a></li>
			<li class="footer__social__item"><a class="font-large link--external" href="https://www.linkedin.com/company/matise/" target="_blank">LinkedIn</a></li>
			<li class="footer__social__item"><a class="font-large link--external" href="https://github.com/MatiseAms" target="_blank">Github</a></li>
		</ul>
	</section>

	<ul class="row list--row footer__practical">
		<li class="footer__practical__item copyright">© Matise 2018 — All Rights Reserved</li>
		<li class="footer__practical__item"><a href="#">Terms & conditions</a></li>
		<li class="footer__practical__item"><a href="#">Privacy Policy</a></li>
	</ul>
</div>
	</footer>
</template>

<style lang="scss">
	@import '../assets/scss/app.scss';
</style>

<script>
import VLink from '../components/VLink.vue'
export default {
	components: {
		VLink
	}
}
</script>
