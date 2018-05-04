<template>

	<!-- hover container extra -->
	<div class="hover_container_extra" @mouseenter="textAnimationenter()" @mouseleave="textAnimationleave()">

		<!-- content_holder -->
		<div class="content_holder">

			<!-- text left -->
			<div ref="leftTextElement" class="text_holder text_holder_left">
				<div class="keep_position">
					<h2><span>{{ textLeft }}</span>&nbsp;</h2>
				</div>
			</div>
			<!-- end text left -->

			<!-- text right -->
			<div ref="rightTextElement" class="text_holder text_holder_right">
				<div class="keep_position">
					<h2>{{ textRight }}</h2>
				</div>
			</div>
			<!-- end text right -->

			<!-- mobile text -->
			<div class="text_holder mobile-only">
				<h2><span class="medium">{{ textLeft }}</span>&nbsp;{{ textRight }}</h2>
			</div>
			<!-- end mobile text -->

		</div>
		<!-- end content_holder -->

	</div>
	<!-- end hover container extra -->

</template>

<script>
export default {
  props: {
    textRight: {
      type: String,
      default: ""
    },
    textLeft: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      elements: {
        left: null,
        right: null
      }
    }
  },
  mounted() {
    this.elements.right = this.$refs.rightTextElement
    this.elements.left = this.$refs.leftTextElement

    this.toggleWidth()
  },
  methods: {
    toggleWidth: function() {
      this.elements.right.style.transform = "translate(0%, 0%)"
    },
    // text animation on mouseenter
    textAnimationenter: function() {
      this.elements.right.style.transform =
        "translate(" + -(this.elements.left.offsetWidth / 2) * 1 + "px, 0%)"
    },
    // text animation on mouseleave
    textAnimationleave: function() {
      this.elements.right.style.transform = "translate(0%, 0%)"
    }
  }
}
</script>
