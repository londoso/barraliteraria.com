<template>
  <section
    id="publications"
    class="cards"
  >
    <h2 class="cards__title reveal">
      {{ t('common.publications') }}
    </h2>
    <p class="cards__intro reveal">
      {{ t('common.publicationsIntro') }}
    </p>
    <ul class="cards__list">
      <li
        v-for="item in visibleItems"
        :key="item.title"
        class="card reveal"
      >
        <span class="card__date">
          {{ localizedDate(item.date) }}
          <template v-if="item.date && item.outlet"> · </template>
          {{ item.outlet }}
        </span>
        <h3 class="card__title">
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.title }}
          </a>
          <template v-else>
            {{ item.title }}
          </template>
        </h3>
      </li>
    </ul>
    <button
      v-if="publications.length > limit"
      class="cards__more"
      @click="showAll = !showAll"
    >
      {{ showAll ? t('common.showLess') : t('common.showMore') }}
    </button>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import publications from '@/assets/data/publications.js'

const { t, locale } = useI18n()
const limit = 4
const showAll = ref(false)

const visibleItems = computed(() =>
  showAll.value ? publications : publications.slice(0, limit)
)

function localizedDate (date) {
  if (!date) return ''
  return new Date(`${date}T12:00:00`).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long'
  })
}
</script>

<style lang="scss" src="@/scss/_cards.scss"></style>
