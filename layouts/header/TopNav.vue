<template>
	<header id="header" ref="header" class="header ">
		<nav ref="topNav" class="nav" aria-label="Top navigation">
			<ul class="nav__list">

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
			</ul>
			<div class="nav__contact">
				<p>
					<strong>Contact</strong><br >
					<a href="mailto:office@matise.nl">office@matise.nl</a><br >
					<a href="tel:+31 20 845 37 99">+31 20 845 37 99</a><br >
					<a href="http://maps.google.com/?q=Entrepotdok 78, Amsterdam, the Netherlands">Entrepotdok 78, Amsterdam</a>
				</p>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
};   
</script>
