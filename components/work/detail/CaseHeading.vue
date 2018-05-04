<template>
	<Motion
		:values="values"
		:spring="spring">
		<div slot-scope="props">
			<section :style="introStyle" class="intro">
				<!-- intro text -->
				<div class="intro_text">
					<div class="row center">
						<div class="column small-full medium-16 large-12">
							<h2><span class="medium">{{ caseName }}</span> {{ caseQuote }}</h2>
						</div>
					</div>

					<div id="caseImage" :style="{'top': `${props.yElement}%`}" class="intro_holder">
						<div :style="{ 'background-image': 'url(' + caseImage + ')' }" class="intro_image"/>
					</div>
				</div>
				<!-- end intro text -->
			</section>
			<section :style="{ 'background-color': '' + caseColor + '' }" class="intro_fake"/>
		</div>
	</Motion>
</template>

<script>
import * as VueMotion from "~/plugins/vue-motion"

export default {
  components: { VueMotion },
  props: {
    caseName: {
      type: String,
      default: ""
    },
    caseQuote: {
      type: String,
      default: ""
    },
    caseImage: {
      type: String,
      default: ""
    },
    caseColor: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      yElement: 0,
      introStyle: { "background-color": this.caseColor, "z-index": 10 }
    }
  },
  computed: {
    spring() {
      return {
        stiffness: 200,
        damping: 16,
        precision: 0.01
      }
    },
    values() {
      return {
        yElement: this.yElement
      }
    }
  },
  mounted() {
    let self = this
    setTimeout(function() {
      self.bgOfCase()
    }, 600)
  },
  methods: {
    // case color color and animation img on mouseenter
    bgOfCase: function() {
      // const caseImage = document.getElementById("caseImage")
      let self = this
      this.yElement = 100
      this.introStyle["z-index"] = 1

      self.$emit("doneAnimation")
    }
  }
}
</script>
