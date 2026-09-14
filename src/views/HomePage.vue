<template>
  <div class="home">
    <navigation />
    <main class="home__content">
      <hero />
      <div class="home__container">
        <about />
        <publications />
        <talks />
        <contact />
      </div>
      <bottom />
    </main>
  </div>
</template>

<script setup>
import About from '@/components/HomeAbout.vue'
import Publications from '@/components/HomePublications.vue'
import Contact from '@/components/HomeContact.vue'
import Bottom from '@/components/HomeFooter.vue'
import Hero from '@/components/HomeHero.vue'
import Navigation from '@/components/HomeNavigation.vue'
import Talks from '@/components/HomeTalks.vue'
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';

.home {
  &__content {
    width: 100%;
  }

  &__container {
    width: 90%;
    max-width: $maxw;
    margin: 0 auto;

    @include from('md') {
      width: 85%;
    }
  }
}
</style>
