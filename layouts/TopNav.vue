<template>
  <header id="header" class="header">
    <div class="row center">
      <div class="column small-16 large-20 column-20">
        <input id="menu-trigger" type="checkbox"/>
        <div class="sidekick"><a class="logo"><img src="~/assets/img/logo.svg"></a>
          <label class="trigger" for="menu-trigger"><span></span></label>
        </div>
        <nav class="nav top__nav" aria-label="Top navigation">
          <ul>
            <li class="nav__list-item__top main-link"><nuxt-link to="/culture">Culture</nuxt-link></li>
            <li class="nav__list-item__top main-link"><nuxt-link to="/work">Work</nuxt-link></li>
            <li class="nav__list-item__top main-link"><nuxt-link to="/whatwedo">What we do</nuxt-link></li>
            <li class="nav__list-item__top main-link"><nuxt-link to="/whoweare">Who we are</nuxt-link></li>
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
</script>
