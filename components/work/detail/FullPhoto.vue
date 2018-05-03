<template>
  <div class="image_holder">
    <img :src="imageFull.url" :alt="imageFull.alt" >

    <div class="makeAbsolute">
      <div class="row center">
        <div class="column large-12 medium-16 small-16">
          <div class="simple_text_content" v-html="imageText"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    imageFull: {
      type: Object,
      default: () => ({})
    },
    imageText: {
      type: String,
      default: ""
    }
  }
}
</script>
