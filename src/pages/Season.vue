<template>
  <div class="season-page">
    <section class="page-hero">
      <div class="st-container">
        <h1>2025/2026 Season</h1>
        <p class="hero-description">
          Experience the magic of live classical music with our upcoming concerts and events
        </p>
      </div>
    </section>

    <section class="season-content">
      <div class="st-container">
        <UpcomingEvents :events="upcomingConcerts" />
        
        <div class="season-highlights">
          <h2>Season Highlights</h2>
          <div class="highlights-grid">
            <div class="highlight-card">
              <h3>New Conductor</h3>
              <p>Welcome our new conductor, Martin Alex Arellano, who brings fresh energy and artistic vision to our performances.</p>
              <router-link to="/artistic-team" class="btn v2">Meet Our Conductor</router-link>
            </div>
            
            <div class="highlight-card">
              <h3>Youth Competition</h3>
              <p>Our second Youth Concerto Competition is now open for applications from young instrumentalists in grades 9-12.</p>
              <router-link to="/youth-competition" class="btn v2">Learn More</router-link>
            </div>
            
            <div class="highlight-card">
              <h3>Subscription Discount</h3>
              <p>Save 25% when you purchase tickets for 3 or more concerts. Perfect for music lovers who want to experience our full season.</p>
              <a href="https://scso.ludus.com/index.php" class="btn v2" target="_blank" rel="noopener">Purchase Tickets</a>
            </div>
          </div>
        </div>

        <div class="venue-info">
          <h2>Our Concert Home</h2>
          <div class="venue-details">
            <div class="venue-text">
              <p>
                We're proud to call the Canyon High School Performing Arts Center our musical home. 
                The 450-seat theater features cutting-edge technology, accessible seating, a beautiful 
                lobby and is right here in the Santa Clarita Valley.
              </p>
              <p>
                Located at 19300 W. Nadal Street, Canyon Country, CA 91351, the venue provides 
                an intimate setting perfect for experiencing classical music.
              </p>
            </div>
            <div class="venue-image">
              <img :src="getAssetUrl('/images/canyon-pac.webp')" alt="Canyon High School Performing Arts Center" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useEvents } from '@/composables/useEvents.js'
import { useSiteConfig } from '@/composables/useSiteConfig.js'
import UpcomingEvents from '@/components/UpcomingEvents.vue'

export default {
  name: 'SeasonPage',
  components: {
    UpcomingEvents
  },
  setup() {
    const { getProcessedUpcomingConcerts } = useEvents()
    const { getAssetUrl } = useSiteConfig()
    
    return {
      upcomingConcerts: getProcessedUpcomingConcerts,
      getAssetUrl
    }
  }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-flame), var(--color-pistachio));
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  font-weight: 100;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
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

.venue-info {
  background: var(--color-light-gray);
  padding: 80px 0;
  margin-top: 80px;
}

.venue-info h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.venue-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.venue-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.venue-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .venue-details {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .page-hero h1 {
    font-size: 2.5rem;
  }
}
</style>
