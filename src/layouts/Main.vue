<template>
  <div class="container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/work">Work</v-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable */
import VLink from '../components/VLink.vue'
export default {
	components: {
		VLink
	}
}
</script>
