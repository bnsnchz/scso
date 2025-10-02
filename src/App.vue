<template>
  <div id="app">
    <Header />
    <main role="main">
      <Hero />
      <UpcomingEvents :events="upcomingConcerts" />
      <ContentCards />
      <NonProfitBanner />
      <WideContentCard />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import ContentCards from './components/ContentCards.vue'
import UpcomingEvents from './components/UpcomingEvents.vue'
import NonProfitBanner from './components/NonProfitBanner.vue'
import Footer from './components/Footer.vue'
import WideContentCard from './components/WideContentCard.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ContentCards,
    UpcomingEvents,
    NonProfitBanner,
    WideContentCard,
    Footer
  },
  data() {
    return {
      // Default events data (moved from component)
      upcomingConcerts: [
        {
          id: 1,
          title: 'New Beginnings',
          date: 'Sunday, October 12',
          image: '/scso/images/new-beginnings.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491376'
        },
        {
          id: 2,
          title: 'Sounds of the Seasons',
          date: 'Sunday, December 7',
          image: '/scso/images/sounds-of-the-seaons.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491377'
        },
        {
          id: 3,
          title: 'Dreams and Desires',
          date: 'Sunday, March 8',
          image: '/scso/images/dreams-and-desires.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491379'
        },
        {
          id: 4,
          title: 'Dances the World Over',
          date: 'Sunday, June 7',
          image: '/scso/images/dances-the-world-over.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491380'
        }
      ]
    }
  }
}
</script>
