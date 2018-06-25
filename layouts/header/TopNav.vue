<template>
	<header id="header" ref="header" class="header ">
		<logo/>
		<nav ref="" class="nav" aria-label="navigation">
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
import Logo from '~/layouts/header/Logo';

export default {
	components: {
		Logo
	},
};   
</script>
