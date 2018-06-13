<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: white;
  text-align: center;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 500;
  animation: open 1s ease forwards, close 1s 2s ease forwards;
}

@keyframes open {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

@keyframes close {
  0% {
    width: 100%;
  }

  100% {
    width: 0%;
    right: 0;
  }
}
</style>