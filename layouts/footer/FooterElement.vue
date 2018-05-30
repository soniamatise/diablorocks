<template>
	<footer class="footer">
		<div class="row center">

			<div class="column medium-16 small-full">

				<section class="footer__title">
					<h3>Not your average Agency.</h3>
				</section>

				<nav class="nav footer__nav" aria-label="Footer navigation">
					<ul class="nav__list">
						<li class="mobile-hide nav__item medium">
							<nuxt-link class="nav__link" to="/work">
								<span class="nav__text">Work</span>
							</nuxt-link>
						</li>
						<li class="mobile-hide nav__item medium">
							<nuxt-link class="nav__link" to="/about">
								<span class="nav__text">About</span>
							</nuxt-link>
						</li>
					</ul>
				</nav>

				<section class="footer__content row">

					<div class="column nav__contact">
						<p>
							<a class="nav__link" href="mailto:office@matise.nl">
								<span class="nav__text">office@matise.nl</span>
							</a><br >
							<a class="nav__link" href="tel:+31 20 845 37 99">
								<span class="nav__text">+31 20 845 37 99</span>
							</a><br >
							<a class="nav__link" href="http://maps.google.com/?q=Entrepotdok 78, Amsterdam, the Netherlands">
								<span class="nav__text">Entrepotdok 78, Amsterdam</span>
							</a><br >
							Open on weekdays till 6pm
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
					</ul>

				</section>

				<div class="footer__bottom">
					<p class="hide-desktop">
						<a class="nav__link" href="https://cdn.matise.nl/content/uploads/2018/04/20084059/av_matise.pdf">Terms &amp; conditions</a>
					</p>
					<p>&copy; Matise 2018 — All Rights Reserved
						<span class="hide-mobile">
							<a class="nav__link" href="https://cdn.matise.nl/content/uploads/2018/04/20084059/av_matise.pdf">
								<span class="nav__text">Terms &amp; conditions</span>
							</a>
						</span>
					</p>
				</div>

			</div>
		</div>
	</footer>
</template>
