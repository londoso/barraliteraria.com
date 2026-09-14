<template>
  <section
    id="hero"
    class="hero"
  >
    <div class="hero__inner">
      <div class="hero__text">
        <p class="hero__hello">
          {{ t('common.heroMessage') }}
        </p>
        <h1 class="hero__title">
          Carolina<br>Barragán Ardila
        </h1>
        <p class="hero__role">
          {{ t('common.heroRole') }}
        </p>
        <p class="hero__tagline">
          «{{ t('common.heroTagline') }}»
        </p>

        <div
          class="hero__tags"
          aria-hidden="true"
        >
          <span class="tag">{{ t('common.literature') }}</span>
          <span class="tag">{{ t('common.philosophy') }}</span>
          <span class="tag tag--cats">{{ t('common.cats') }} <span class="tag__paw">🐈</span></span>
        </div>
      </div>

      <div class="hero__portrait">
        <div class="hero__portrait-frame">
          <img
            class="hero__image"
            :src="portrait"
            alt="Retrato de Carolina Barragán Ardila"
            width="600"
            height="600"
            fetchpriority="high"
            decoding="async"
          >
        </div>
        <span class="hero__seal">CB</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
// Retrato de Carolina.
import portrait from '@/assets/images/carolina.jpg'

const { t } = useI18n()
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';

.hero {
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 120px 5% 60px;

  &__inner {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 44px;
    width: 100%;
    max-width: $maxw;
    margin: 0 auto;

    @include from('lg') {
      flex-direction: row;
      justify-content: space-between;
      gap: 64px;
    }
  }

  &__text {
    text-align: center;

    @include from('lg') { text-align: left; }
  }

  &__hello {
    margin: 0 0 8px;
    @include eyebrow($gold);
    letter-spacing: 3px;
  }

  &__title {
    margin: 0;
    @include serif;
    font-size: 46px;
    font-weight: 600;
    line-height: 1.05;
    color: $ink;

    @include from('md') { font-size: 66px; }
    @include from('lg') { font-size: 74px; }
  }

  &__role {
    margin: 18px 0 0;
    @include sans;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.4px;
    color: $burgundy;
  }

  &__tagline {
    margin: 12px 0 0;
    @include serif;
    font-size: 21px;
    font-style: italic;
    color: $muted;

    @include from('md') { font-size: 24px; }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 26px;

    @include from('lg') { justify-content: flex-start; }
  }

  &__portrait {
    position: relative;
    flex-shrink: 0;
  }

  &__portrait-frame {
    width: 250px;
    height: 250px;
    padding: 8px;
    border-radius: 50%;
    background: linear-gradient(150deg, $gold-soft, $gold, $burgundy);
    @include soft-shadow(2);

    @include from('md') { width: 320px; height: 320px; }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 30%;
    background: $paper-2;
    border: 4px solid $paper;
  }

  &__seal {
    position: absolute;
    right: 4px;
    bottom: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    @include serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: $white;
    background: $burgundy;
    border: 3px solid $paper;
    border-radius: 50%;
    @include soft-shadow(1.5);
  }
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  @include sans;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  color: $ink;
  background: $paper-2;
  border: 1px solid $paper-3;
  border-radius: 999px;

  &--cats { color: $olive; }

  &__paw { font-size: 14px; }
}
</style>
