<template>
  <footer class="footer">
    <p class="footer__text">
      {{ t('common.footerMessage') }}
      <span class="footer__user">Carolina Barragán Ardila</span>
    </p>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';

.footer {
  margin-top: 60px;
  padding: 34px 5%;
  text-align: center;
  border-top: 1px solid $paper-3;
  background: $paper-2;

  &__text {
    margin: 0;
    @include sans;
    font-size: 14px;
    letter-spacing: 0.4px;
    color: $muted;
  }

  &__user {
    @include serif;
    font-size: 16px;
    font-weight: 600;
    color: $burgundy;
  }
}
</style>
