<template>
	<!-- <transition name="bounce"> -->
	<!-- <div v-if="show" class="page-transition-overlay"> -->
	<!-- <button @click="show = !show">Toggle show</button> -->
	<!-- </div> -->
	<div class="page-transition-overlay_close">
		<!-- <button @click="show = !show">Toggle show</button> -->
	</div>
	<!-- </transition> -->
</template>

<script>
export default {
  props: {},
  data: function() {
    return {

    };
  },
  mounted() {},
  methods: {

  }
};
</script>

<style scoped>
.page-transition-overlay_close {
  position: fixed;
  background-color: white;
  z-index: 500;
  width: 0%;
  height: 100%;
  left: 0;
  opacity: 1;
  animation: example 1s 1.5s ease forwards;
}

@keyframes example {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}
</style>
