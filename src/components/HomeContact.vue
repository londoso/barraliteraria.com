<template>
  <section
    id="contact"
    class="contact"
  >
    <h2 class="contact__title reveal">
      {{ t('common.contact') }}
    </h2>
    <ul class="contact__list reveal">
      <li
        v-for="item in social"
        :key="item.url"
        class="contact__item"
      >
        <a
          :href="item.url"
          :target="item.url.startsWith('mailto:') ? null : '_blank'"
          rel="noopener noreferrer"
          :aria-label="item.label"
        >
          <svg
            class="contact__icon"
            viewBox="0 0 24 24"
            role="img"
            :aria-label="item.label"
            focusable="false"
          >
            <path
              fill="currentColor"
              :d="item.path"
            />
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// SVG path data (viewBox 24x24) para los iconos usados.
const icons = {
  email:
    'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  instagram:
    'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.6-.07-4.75-.07zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9zm0 1.44a4.51 4.51 0 1 0 0 9.02 4.51 4.51 0 0 0 0-9.02zm7.07-.9a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z',
  linkedin:
    'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z'
}

const social = [
  { label: 'Correo', url: 'mailto:barraliteraria@gmail.com', path: icons.email },
  { label: 'Instagram', url: 'https://www.instagram.com/barraliteraria/', path: icons.instagram },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/caritobarra/', path: icons.linkedin }
]
</script>

<style lang="scss">
@import '@/scss/variables';
@import '@/scss/mixins';
@import '@/scss/typography';

.contact {
  &__title { @extend %section-title; }

  &__list {
    display: flex;
    gap: 18px;
  }

  &__item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: $paper-2;
    border-radius: 50%;
    border: 1px solid $paper-3;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: rgba($burgundy, 0.5);
      @include soft-shadow(1.5);
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    color: $burgundy;
    transition: color 0.2s ease;

    .contact__item:hover & { color: $burgundy-deep; }
  }
}
</style>
