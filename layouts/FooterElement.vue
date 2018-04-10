<template>
	<footer class="footer">
		<div class="row center">

			<div class="column medium-16 small-full">

				<section class="footer__title">
					<h3>Not your average Digital Agency.</h3>
				</section>

				<nav class="nav footer__nav" aria-label="Footer navigation">
					<ul class="nav__list">
						<li class="mobile-hide nav__item">
							<nuxt-link class="nav__link" to="/culture">
								<span class="nav__text">Culture</span>
							</nuxt-link>
						</li>
						<li class="mobile-hide nav__item font-medium">
							<nuxt-link class="nav__link" to="/work">
								<span class="nav__text">Work</span>
							</nuxt-link>
						</li>
						<li class="mobile-hide nav__item font-medium">
							<nuxt-link class="nav__link" to="/about">
								<span class="nav__text">About</span>
							</nuxt-link>
						</li>
						<!-- <li class="mobile-hide nav__item font-medium"><nuxt-link to="/whoweare">Who we are</nuxt-link></li> -->
						<!-- <li class="mobile-hide nav__item font-medium"><nuxt-link to="/whatwedo">What we do</nuxt-link></li> -->
						<li class="nav__item font-medium">
							<a class="nav__link" href="#">
								<span class="nav__text">News</span>
							</a>
						</li>
						<li class="nav__item font-medium">
							<a class="nav__link" href="#">
								<span class="nav__text">Careers</span>
							</a>
						</li>
					</ul>
				</nav>

				<section class="footer__content row">

					<div class="column nav__contact">
						<p>
							<a href="mailto:office@matise.nl">office@matise.nl</a><br />
							<a href="tel:+31 20 845 37 99">+31 20 845 37 99</a><br />
							<a href="http://maps.google.com/?q=Entrepotdok 78, Amsterdam, the Netherlands">Entrepotdok 78, Amsterdam</a><br />
							Open till 6pm today
						</p>
					</div>

					<ul class="column nav__social">
						<li class="nav__socialItem">
							<a class="nav__link" href="https://www.instagram.com/matiseamsterdam/" target="_blank">
								<span class="nav__text">Instagram</span>
							</a>
						</li>
						<li class="nav__socialItem">
							<a class="nav__link" href="https://www.facebook.com/MatiseAmsterdam/" target="_blank">
								<span class="nav__text">Facebook</span>
							</a>
						</li>
						<li class="nav__socialItem">
							<a class="nav__link" href="https://www.linkedin.com/company/matise/" target="_blank">
								<span class="nav__text">LinkedIn</span>
							</a>
						</li>
						<li class="nav__socialItem">
							<a class="nav__link" href="https://github.com/MatiseAms" target="_blank">
								<span class="nav__text">Github</span>
							</a>
						</li>
					</ul>

				</section>

				<div class="footer__bottom">
					<p class="hide-desktop">
						<a href="#">Terms &amp; conditions</a> <a href="#">Privacy Policy</a>
					</p>
					<p>&copy; Matise 2018 — All Rights Reserved <span class="hide-mobile"><a href="#">Terms &amp; conditions</a> <a href="#">Privacy Policy</a></span></p>
				</div>

			</div>
		</div>
	</footer>
</template>
