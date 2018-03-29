<template>
  <header id="header" class="header" ref="header" v-bind:class="{ fullHeight: headerIsActive }">
    <div class="row center">
      <div class="column small-16 large-20 column-20">
        <input id="menu-trigger" type="checkbox"/>
        <div class="sidekick"><a class="logo"><img src="~/assets/img/logo.svg"></a>
          <label v-on:click="toggleScrollBody()" @click="toggleHeaderWidth()" class="trigger" for="menu-trigger"><span></span></label>
        </div>
        <nav class="nav top__nav" aria-label="Top navigation" ref="topNav">
          <ul>
            <li class="nav__list-item__top main-link"><nuxt-link to="/culture">Culture</nuxt-link></li>
            <li class="nav__list-item__top main-link"><nuxt-link to="/work">Work</nuxt-link></li>
						<li class="nav__list-item__top main-link"><nuxt-link to="/about">About</nuxt-link></li>
            <!-- <li class="nav__list-item__top main-link"><nuxt-link to="/whatwedo">What we do</nuxt-link></li>
            <li class="nav__list-item__top main-link"><nuxt-link to="/whoweare">Who we are</nuxt-link></li> -->
            <li id="logo" class="nav__list-item__top logo"><a href="/"><img src="~/assets/img/logo.svg"></a></li>
          </ul>
          <section class="top__contact-us">
            <ul>
              <li class="nav__list-item__top title"><a>Contact</a></li>
              <li class="nav__list-item__top info-link"><a href="mailto:office@matise.nl">office@matise.nl</a></li>
              <li class="nav__list-item__top info-link"><a href="tel:+31 20 845 37 99">+31 20 845 37 99</a></li>
              <li class="nav__list-item__top info-link"><a target="blank" href="http://maps.google.com/?q=Entrepotdok 78, Amsterdam, the Netherlands">Entrepotdok 78, Amsterdam</a></li>
            </ul>
          </section>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false,
      headerIsActive: false
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: this.isMenuOpen ? 'scroll-disable' : ''
      }
    }
  },
  methods: {
    toggleScrollBody: function(){
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleHeaderWidth: function(){
      // setTimeout(()=>{
        this.headerIsActive = !this.headerIsActive;
      // },1000);
    },
  },
  mounted(){
    let topNav = this.$refs.topNav;
    setTimeout(function(){
      topNav.classList.add('show');
    },500);
  }
}
</script>
