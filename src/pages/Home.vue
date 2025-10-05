<template>
  <div class="home-page">
    <Hero />
    <UpcomingEvents :events="upcomingConcerts" />
    <ContentCards />
    <NonProfitBanner />
    <WideContentCard />
  </div>
</template>

<script>
import { useEvents } from '@/composables/useEvents.js'
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
    
    return {
      upcomingConcerts: getProcessedUpcomingConcerts
    }
  }
}
</script>

<style scoped>
.home-page {
  /* Home page specific styles if needed */
}
</style>
