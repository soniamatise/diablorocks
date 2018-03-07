<template>
  <div class="container">
    <ul>
      <li class="menu header">
        <v-link href="/">Home</v-link>
        <v-link href="/work">Work</v-link>
      </li>
    </ul>
    <ul>
      <li class="menu footer">
        <v-link href="/">Home</v-link>
        <v-link href="/work">Work</v-link>
      </li>
    </ul>

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
