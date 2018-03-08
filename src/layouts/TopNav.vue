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
            <li class="menu-link"><v-link href="/culture"><p>Culture</p></v-link></li>
            <li class="menu-link"><v-link href="/work"><p>Work</p></v-link></li>
            <li class="menu-link"><v-link href="/what-we-do"><p>What we do</p></v-link></li>
            <li class="menu-link"><v-link href="/who-we-are"><p>Who we are</p></v-link></li>
            <li id="logo" class="menu-link logo"><v-link href="/">Matise.</v-link></li>
          </ul>
          <div class="contact-info">
            <p>Contact</p>
            <p><a href="mailto:office@matise.nl">office@matise.nl</a></p>
            <p>+31 20 845 37 99</p>
            <p>Entrepotdok 78, Amsterdam</p>
          </div>
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
