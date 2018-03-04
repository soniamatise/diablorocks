<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
		<div class="row">
			<div class="small-12 column">
				hoi 1
			</div>
			<div class="small-12 column">
				hoi 1
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/scss/app.scss';
</style>
