<template>
  <section class="upcoming-events">
    <div class="st-container">
      <header class="upcoming-events-header st-flex st-flex-between">
        <h2>Upcoming Events</h2>
        <a class="btn v1" href="current-season.html">View Calendar</a>
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
                <p class="event-title">{{ event.title }}</p>
                <p class="event-date">{{ event.date }}</p>
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
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'New Beginnings',
          date: 'Sunday, October 12',
          image: '/images/new-beginnings.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491376'
        },
        {
          id: 2,
          title: 'Sounds of the Seasons',
          date: 'Sunday, December 7',
          image: '/images/sounds-of-the-seaons.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491377'
        },
        {
          id: 3,
          title: 'Dreams and Desires',
          date: 'Sunday, March 8',
          image: '/images/dreams-and-desires.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491379'
        },
        {
          id: 4,
          title: 'Dances the World Over',
          date: 'Sunday, June 7',
          image: '/images/dances-the-world-over.avif',
          ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491380'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/berlin-sans-fb');

:root {
  --color-russet: #653514;
  --color-fern: #53833E;
  --color-pistachio: #8DC543;
  --color-flame: #E06126;
  --color-carrot: #F7941D;
  --font-headline: 'Berlin Sans FB', sans-serif;
  --font-text: 'Roboto Light', sans-serif;
  --var-container-width: 1200px;
}

.upcoming-events {
  margin-top: -10rem;
  z-index: 3;
  position: relative;
}

.upcoming-events-header {
  margin-bottom: 24px;
}

.upcoming-events-header h2 {
  margin: 0;
  font-family: var(--font-headline);
  font-size: 36px;
  font-weight: 100;
  line-height: 1.2;
}

.upcoming-events .st-container {
  background-color: #fff;
  padding: 24px;
}

.st-container {
  width: 100%;
  max-width: var(--var-container-width);
  margin: 0 auto;
  position: relative;
}

.st-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

.st-flex-between {
  justify-content: space-between;
}

.st-four > .st-item {
  flex-basis: calc(25% - 16px);
}

.st-item {
  max-width: 100%;
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

.btn {
  padding: 10px 32px;
  font-family: var(--font-headline);
  font-weight: 100;
  display: inline-block;
  transition: all .25s ease 0s;
  text-decoration: none;
}

.btn.v1 {
  background-color: var(--color-flame);
  color: #fff;
}

.btn.v1:hover {
  background-color: var(--color-fern);
}

@media screen and (max-width: 1000px) {
  .st-flex {
    flex-direction: column;
  }
  .st-four > .st-item {
    flex-basis: 100%;
  }
}
</style>
