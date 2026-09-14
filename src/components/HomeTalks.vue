<template>
  <section
    id="talks"
    class="cards"
  >
    <h2 class="cards__title reveal">
      {{ t('common.talks') }}
    </h2>
    <p class="cards__intro reveal">
      {{ t('common.talksIntro') }}
    </p>
    <ul class="cards__list">
      <li
        v-for="talk in visibleTalks"
        :key="talk.title"
        class="card reveal"
      >
        <span class="card__date">
          {{ talk.date ? localizedDate(talk.date) : '' }}
          <template v-if="talk.date && talk.event"> · </template>
          {{ talk.event }}
        </span>
        <h3 class="card__title">
          {{ talk.title }}
        </h3>
        <div
          v-if="talk.resources && talk.resources.length"
          class="card__resources"
        >
          <a
            v-for="resource in talk.resources"
            :key="resource.name"
            :href="resource.url"
            target="_blank"
            rel="noopener noreferrer"
            class="card__resource"
          >
            {{ resource.name }}
          </a>
        </div>
      </li>
    </ul>
    <button
      v-if="talks.length > limit"
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
import talks from '@/assets/data/talks.js'

const { t, locale } = useI18n()
const limit = 4
const showAll = ref(false)

const visibleTalks = computed(() =>
  showAll.value ? talks : talks.slice(0, limit)
)

function localizedDate (date) {
  if (!date) return ''
  return new Date(`${date}T12:00:00`).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style lang="scss" src="@/scss/_cards.scss"></style>
