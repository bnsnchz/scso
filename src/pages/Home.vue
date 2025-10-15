<template>
  <div class="home-page">
    <Hero />
    <UpcomingEvents :events="upcomingConcerts" />
    <ContentCards 
      :cards="contentCards"
      section-title="About SCSO Programs"
      section-id="home-content-cards"
    />
    <NonProfitBanner />
    <WideContentCard />
  </div>
</template>

<script>
import { useEvents } from '@/composables/useEvents.js'
import { useSiteConfig } from '@/composables/useSiteConfig.js'
import Hero from '@/components/Hero.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import ContentCards from '@/components/ContentCards.vue'
import NonProfitBanner from '@/components/NonProfitBanner.vue'
import WideContentCard from '@/components/WideContentCard.vue'

export default {
  name: 'HomePage',
  components: {
    Hero,
    UpcomingEvents,
    ContentCards,
    NonProfitBanner,
    WideContentCard
  },
  setup() {
    const { getProcessedUpcomingConcerts } = useEvents()
    const { getContentCards } = useSiteConfig()
    
    return {
      upcomingConcerts: getProcessedUpcomingConcerts,
      contentCards: getContentCards()
    }
  }
}
</script>

<style scoped>
</style>
