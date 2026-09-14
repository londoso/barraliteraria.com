<template>
  <section
    id="about"
    class="about"
  >
    <h2 class="about__title reveal">
      {{ t('common.about') }}
    </h2>
    <div class="about__grid reveal">
      <div class="about__bio">
        <p
          v-for="(paragraph, i) in tm('about.bioParagraphs')"
          :key="i"
        >
          {{ paragraph }}
        </p>
        <p class="about__interests">
          <b>{{ t('about.interestsLabel') }}</b>
          {{ tm('about.interests').join(' · ') }}
        </p>
      </div>
      <ul class="about__info">
        <li class="about__info-item">
          <span class="about__info-label">{{ t('about.name') }}</span>
          Carolina Barragán Ardila
        </li>
        <li class="about__info-item">
          <span class="about__info-label">{{ t('about.email') }}</span>
          <a href="mailto:barraliteraria@gmail.com">barraliteraria@gmail.com</a>
        </li>
        <li class="about__info-item">
          <span class="about__info-label">{{ t('about.location') }}</span>
          Medellín — Colombia
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';
@import '@/scss/typography';

.about {
  &__title { @extend %section-title; }

  &__grid {
    display: grid;
    gap: 28px;

    @include from('lg') {
      grid-template-columns: 1.7fr 1fr;
      align-items: start;
    }
  }

  &__bio {
    font-size: 18px;
    line-height: 1.8;
    color: $ink;

    p { margin: 0 0 16px; }
    p:last-child { margin-bottom: 0; }

    b { color: $burgundy; }
  }

  &__interests {
    margin-top: 20px;
    font-size: 16px;
    color: $muted;
  }

  &__info {
    padding: 26px;
    background: $paper-2;
    border: 1px solid $paper-3;
    border-radius: $radius;
  }

  &__info-item {
    font-size: 16px;
    color: $ink;

    &:not(:last-child) {
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid $paper-3;
    }
  }

  &__info-label {
    display: block;
    margin-bottom: 3px;
    @include eyebrow($gold);
    font-size: 10px;
    letter-spacing: 2px;
  }
}
</style>
