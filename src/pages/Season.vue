<template>
  <div class="season-page">
    <PageHero
      title="2025/2026 Season"
      description="Experience the magic of live classical music with our upcoming concerts and events"
      :background-image="getAssetUrl('/images/brian-hero-banner.png')"
      background-image-alt="2025/2026 Season"
    />
    <UpcomingEvents :events="upcomingConcerts" class="upcoming-events" />
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
/* Hide the "View Calendar" button on the Season page since we're already on the season page */
.upcoming-events :deep(.btn.v2) {
  display: none;
}

/* Season page specific styles */
.season-page {
  min-height: 100vh;
}

/* Ensure proper spacing between sections */
.season-page > * + * {
  margin-top: 0;
}
</style>
