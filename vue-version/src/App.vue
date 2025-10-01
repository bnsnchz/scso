<template>
  <div id="app">
    <Header />
    <main>
      <Hero />
      <UpcomingEvents />
      <NonProfitBanner />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import UpcomingEvents from './components/UpcomingEvents.vue'
import NonProfitBanner from './components/NonProfitBanner.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    UpcomingEvents,
    NonProfitBanner,
    Footer
  }
}
</script>
