<template>
  <header id="header" class="header">
    <div class="row center">
      <div class="column column-20">
        <input id="menu-trigger" type="checkbox"/>
        <div class="sidekick"><a class="logo"></a>
          <label class="trigger" for="menu-trigger"><span></span></label>
        </div>
        <nav id="nav" class="nav">
          <ul>
            <li class="menu-link"><v-link href="/culture">Culture</v-link></li>
            <li class="menu-link"><v-link href="/work">Work</v-link></li>
            <li class="menu-link"><v-link href="/what-we-do">What we do</v-link></li>
            <li class="menu-link"><v-link href="/who-we-are">Who we are</v-link></li>
            <li id="logo" class="menu-link logo"><v-link href="/">Matise.</v-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
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
