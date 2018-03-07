<template>
  <div class="container">
    <div class="row center">
      <div class="column column-20">
        <header class="header">
          <nav>
            <ul>
              <li>
                <v-link href="/culture">Culture</v-link>
                <v-link href="/work">Work</v-link>
                <v-link href="/what-we-do">What we do</v-link>
                <v-link href="/who-we-are">Who we are</v-link>
                <v-link href="/">Home</v-link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>

    <slot></slot>
  </div>
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
