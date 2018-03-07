<template>
    <header class="header">
      <nav>
        <ul>
          <li>
            <v-link href="/">Home</v-link>
            <v-link href="/work">Work</v-link>
            <v-link href="/what-we-do">What we do</v-link>
            <v-link href="/who-we-are">Who we are</v-link>
          </li>
        </ul>
      </nav>
    </header>
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
