<template>
  <section class="upcoming-events">
    <div class="st-container">
      <header class="upcoming-events-header st-flex st-flex-between">
        <h2>Upcoming Events</h2>
        <a class="btn v2" href="current-season.html">View Calendar</a>
      </header>
      <div class="upcoming-events-list">
        <ul class="upcoming-events-list-items st-flex st-four st-flex-between">
          <li 
            v-for="event in events" 
            :key="event.id" 
            class="event-item st-item"
          >
            <a :href="event.ticketUrl">
              <div class="upcoming-events-list-item-image">
                <img :src="event.image" :alt="event.title">
              </div>
              <div class="event-info">
                <p class="event-title" v-html="event.title"></p>
                <p class="event-date" v-html="event.date"></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UpcomingEvents',
  props: {
    events: {
      type: Array,
      required: true
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
}

.event-date {
  font-family: var(--font-text);
  margin: 0;
}
</style>
