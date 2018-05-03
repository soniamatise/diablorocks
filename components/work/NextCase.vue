<template>
  <Motion
    :values="values"
    :spring="spring">
    <section id="next-case" slot-scope="props" class="next_case">

      <!-- holder -->
      <div ref="holder" class="holder">

        <!-- hover element -->
        <div v-if="image" class="hover_container" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()" @click="nextCase()">
          <text-transition :text-right="caseName" text-left="Next case" onloadedmetadata=""/>
        </div>

        <nuxt-link v-if="!image" to="/about" class="hover_container" @mouseenter="bgOfCase()" @mouseleave="bgToNormal()">
          <text-transition :text-right="caseName" text-left="It's not all work" onloadedmetadata=""/>
        </nuxt-link>
        <!-- end hover element -->

      </div>
      <!-- end holder -->

      <!-- case image -->
      <div v-if="image != undefined" id="caseImage" :class="['case_image', {'case_image--expand': expand}]" :style="[{'transform': `translateY(${props.yElement}%)`}, {'background-image': `url('${image}')` } ]">
        <!-- <img :src="image"> -->
      </div>
      <!-- end case image -->

    </section>
  </Motion>
</template>

<script>
import * as VueMotion from "~/plugins/vue-motion"
import TextTransition from "~/components/animations/TextTransition.vue"

export default {
  components: {
    TextTransition,
    VueMotion
  },
  props: {
    caseName: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    caseColor: {
      type: String,
      default: ""
    },
    slug: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      yElement: 0,
      expand: false
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
  mounted: function() {},
  methods: {
    // case color color and animation img on mouseenter
    bgOfCase: function() {
      const bgDiv = document.getElementById("next-case")
      bgDiv.style.backgroundColor = this.caseColor

      // get grid size for image height on mouseover
      // const getGrid = window.innerWidth / 12;

      if (!this._data.expand) {
        // vue motion TIM EPICNESS
        this.yElement = -50
      }
    },
    // black color and animation img on mouseleave
    bgToNormal: function() {
      const bgDiv = document.getElementById("next-case")
      bgDiv.style.backgroundColor = "black"

      // vue motion TIM EPICNESS
      this.yElement = 0
    },
    nextCase: function() {
      let self = this
      self._data.expand = true
      this.yElement = -50

      const bgDiv = document.getElementById("next-case").getBoundingClientRect()
        .y
      let pos = window.pageYOffset + bgDiv
      console.log(pos)
      window.scrollTo(0, pos)

      setTimeout(function() {
        self.$router.push(`/work/${self.slug}`)
      }, 1500)
    }
  }
}
</script>
