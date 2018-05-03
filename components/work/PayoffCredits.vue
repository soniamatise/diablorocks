<template>
  <div class="payoff_credits">

    <!-- payoff -->
    <div class="row center">
      <div class="column large-12 medium-16 small-full payoff" v-html="intro"/>
    </div>
    <!-- end payoff -->

    <!-- credits -->
    <div class="row center">
      <div class="column large-12 medium-16 small-full">
        <ul class="credits">
          <li v-for="credit in credits" :key="credit.id" class="row item center">
            <div class="row">
              <div class="column large-8 medium-full small-full ">
                <p class="medium">{{ credit.info_table_key }}</p>
              </div>
              <div class="column large-16 medium-full small-full" v-html="credit.info_table_value"/>
            </div>
          </li>
        </ul>
        <!-- link -->
        <div v-if="footer!==''" class="link">
          <p v-html="footer"/> 
        </div>
        <!-- end link -->
      </div>
    </div>
    <!-- end credits -->

  </div>
</template>

<script>
export default {
  props: {
    intro: {
      type: String,
      default: ""
    },
    credits: {
      type: Array,
      default: () => ({})
    },
    footer: {
      type: String,
      default: ""
    }
  }
}
</script>
