<template>
  <div class="season-page">
    <PageHero
      title="2025/2026 Season"
      description="Experience the magic of live classical music with our upcoming concerts and events"
      :background-image="getAssetUrl('/images/brian-hero-banner.png')"
      background-image-alt="2025/2026 Season"
    />
    <UpcomingEvents :events="upcomingConcerts" />
    <SplitContent
      title="Our Concert Home"
      :content="venueContent"
      :image="getAssetUrl('/images/canyon-pac.webp')"
      image-alt="Canyon High School Performing Arts Center"
      has-background
    />
  </div>
</template>

<script>
import { useEvents } from '@/composables/useEvents.js'
import { useSiteConfig } from '@/composables/useSiteConfig.js'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import PageHero from '@/components/PageHero.vue'
import SplitContent from '@/components/SplitContent.vue'

export default {
  name: 'SeasonPage',
  components: {
    UpcomingEvents,
    PageHero,
    SplitContent
  },
  setup() {
    const { getProcessedUpcomingConcerts } = useEvents()
    const { getAssetUrl } = useSiteConfig()
    
    const venueContent = [
      '<p>We\'re proud to call the Canyon High School Performing Arts Center our musical home. The 450-seat theater features cutting-edge technology, accessible seating, a beautiful lobby and is right here in the Santa Clarita Valley.</p>',
      '<p>Located at 19300 W. Nadal Street, Canyon Country, CA 91351, the venue provides an intimate setting perfect for experiencing classical music.</p>'
    ]
    
    return {
      upcomingConcerts: getProcessedUpcomingConcerts,
      getAssetUrl,
      venueContent
    }
  }
}
</script>

<style scoped>

.upcoming-events-header .btn.v2 {
  display: none;
}

.season-content {
  padding: 80px 0;
}

.season-highlights {
  margin: 80px 0;
}

.season-highlights h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.highlight-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
}

.highlight-card h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.highlight-card p {
  margin-bottom: 30px;
  line-height: 1.6;
}


@media (max-width: 768px) {
  /* Mobile styles handled by SplitContent component */
}
</style>
