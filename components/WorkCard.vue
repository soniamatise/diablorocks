<template>
	<article class="work__card " :case="caseName">
		<!-- <nuxt-link :to="'/work/' + slug "> -->
			<div :class="'work__card__image-container work__card__image-container--'+ size ">
				<img v-on:click="clickAnim()" v-on:hover="onHover()" class="work__card__image" :src="image">
			</div>
		<!-- </nuxt-link> -->
		<p class="work__card__description"><span class="work__card__description--bold">{{ client }}</span> {{ description }}</p>
	</article>
</template>

<script>
export default {
	props: ['caseName', 'size', 'image', 'client', 'description', 'slug'],
	methods: {
    clickAnim: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
}



</script>
