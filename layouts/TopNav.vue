<template>
<header id="header" class="header " ref="header">
	<nav class="nav" aria-label="Top navigation" ref="topNav">
		<ul class="nav__list">
			<li class="nav__item main-link">
				<nuxt-link class="nav__link" to="/culture">
					<span class="nav__text">Culture</span>
				</nuxt-link>
			</li>
			<li class="nav__item main-link">
				<nuxt-link class="nav__link" to="/work">
					<span class="nav__text">Work</span>
				</nuxt-link>
			</li>
			<li class="nav__item main-link">
				<nuxt-link class="nav__link" to="/about">
					<span class="nav__text">About</span>
				</nuxt-link>
			</li>
			<!-- <li class="nav__list-item__top main-link"><nuxt-link to="/whatwedo">What we do</nuxt-link></li>
        <li class="nav__list-item__top main-link"><nuxt-link to="/whoweare">Who we are</nuxt-link></li> -->
		</ul>
		<div class="nav__contact">
			<p>
				<strong>Contact</strong><br />
				<a href="mailto:office@matise.nl">office@matise.nl</a><br />
				<a href="tel:+31 20 845 37 99">+31 20 845 37 99</a><br />
				<a href="http://maps.google.com/?q=Entrepotdok 78, Amsterdam, the Netherlands">Entrepotdok 78, Amsterdam</a>
			</p>
		</div>
	</nav>
</header>
</template>

<script>
export default {
	mounted() {

		let savedScroll = 0;
		let topNav = this.$refs.topNav;
		let didScroll = false;
		let lelek;

		// add / remove class on scroll 
		window.addEventListener('scroll', function(e) {

			let scrollPosition = window.scrollY;

			if (scrollPosition >= savedScroll + 40) {
				// scroll down
				topNav.classList.add('up');
				lelek = scrollPosition;
				savedScroll = scrollPosition + 40;
			} else if (lelek >= scrollPosition) {
				// scroll up
				topNav.classList.remove('up');
				lelek = scrollPosition;
				savedScroll = scrollPosition + 40;
			}
		});

		setTimeout(function() {
			topNav.classList.add('show');
		}, 500);

	}
};
</script>
