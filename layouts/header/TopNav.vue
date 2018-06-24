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
		</nav>
	</header>
</template>

<script>
export default {
};   
</script>
