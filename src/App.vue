<template>
  <div id="app">
    <Header />
    <main role="main">
      <Hero />
      <UpcomingEvents :events="processedEvents" />
      <ContentCards />
      <NonProfitBanner />
      <WideContentCard />
      <Newsletter />
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ContentCards from './components/ContentCards.vue'
import UpcomingEvents from './components/UpcomingEvents.vue'
import NonProfitBanner from './components/NonProfitBanner.vue'
import WideContentCard from './components/WideContentCard.vue'
import Newsletter from './components/Newsletter.vue'
import Footer from './components/Footer.vue'
import { useEvents } from './composables/useEvents.js'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ContentCards,
    UpcomingEvents,
    NonProfitBanner,
    WideContentCard,
    Newsletter,
    Footer
  },
  setup() {
    // Use the events composable to get processed events data
    const { getProcessedUpcomingConcerts } = useEvents()
    
    return {
      processedEvents: getProcessedUpcomingConcerts
    }
  }
}
</script>
