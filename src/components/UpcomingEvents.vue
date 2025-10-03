<template>
  <section class="upcoming-events" aria-labelledby="upcoming-events-heading">
    <div class="st-container">
      <header class="upcoming-events-header st-flex st-flex-between">
        <h2 id="upcoming-events-heading">{{ contentConfig.upcomingEvents.title }}</h2>
        <a 
          class="btn v2" 
          :href="contentConfig.upcomingEvents.viewAllHref" 
          :aria-label="contentConfig.upcomingEvents.viewAllAriaLabel"
        >
          {{ contentConfig.upcomingEvents.viewAllLabel }}
        </a>
      </header>
      <div class="upcoming-events-list">
        <ul class="upcoming-events-list-items st-flex st-four st-flex-between" role="list">
          <li 
            v-for="event in events" 
            :key="event.id" 
            class="event-item st-item"
            role="listitem"
          >
            <article class="event-card">
              <a :href="event.ticketUrl" :aria-label="`Purchase tickets for ${event.title} on ${formatEventDate(event.date, event.year)}`">
                <div class="upcoming-events-list-item-image">
                  <img :src="event.image" :alt="`${event.title} concert poster`" loading="lazy">
                </div>
                <div class="event-info">
                  <h3 class="event-title" v-html="event.title"></h3>
                  <time class="event-date" :datetime="getEventDateTime(event.date, event.year)" v-html="formatEventDate(event.date, event.year)"></time>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { useSiteConfig } from '../composables/useSiteConfig.js'
import { useEvents } from '../composables/useEvents.js'

export default {
  name: 'UpcomingEvents',
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  setup() {
    const { getContentConfig } = useSiteConfig()
    const { formatEventDate, getEventDateTime } = useEvents()
    
    return {
      contentConfig: getContentConfig(),
      formatEventDate,
      getEventDateTime
    }
  }
}
</script>

<style scoped>
.upcoming-events {
  margin-top: -10rem;
  z-index: 3;
  position: relative;
}

.upcoming-events-header {
  margin-bottom: 24px;
}

.upcoming-events-header h2 {
  font-family: var(--font-headline);
  font-size: 32px;
  text-transform: uppercase;
  margin: 0;
  color: #fff;
}

.upcoming-events .st-container {
  background: linear-gradient(to bottom, var(--color-pistachio) 0 50%, transparent 0 50%);
  padding: 24px;
  border: .5px solid var(--color-pistachio);
}

.event-item a {
  position: relative;
  text-decoration: none;
  color: inherit;
}

.event-info {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(-60px);
  background-color: var(--color-pistachio);
  padding: 12px 8px;
  color: #fff;
}

.event-title {
  font-family: var(--font-headline);
  line-height: 150%;
  margin: 0;
  font-size: 18px;
  font-weight: 100;
}

.event-date {
  font-family: var(--font-text);
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}
</style>
