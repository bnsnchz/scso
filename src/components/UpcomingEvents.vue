<template>
  <section class="upcoming-events" aria-labelledby="upcoming-events-heading">
    <div class="st-container">
      <header class="upcoming-events-header st-flex st-flex-between">
        <h2 id="upcoming-events-heading">{{ contentConfig.upcomingEvents.title }}</h2>
        <router-link 
          class="btn v2" 
          :to="contentConfig.upcomingEvents.viewAllHref" 
          :aria-label="contentConfig.upcomingEvents.viewAllAriaLabel"
        >
          {{ contentConfig.upcomingEvents.viewAllLabel }}
        </router-link>
      </header>
      <div class="upcoming-events-list">
        <ul 
          ref="eventsSlider"
          class="upcoming-events-list-items st-flex st-four st-flex-between" 
          :class="{ 'slick-slider': isMobile }"
          role="list"
        >
          <li 
            v-for="event in events" 
            :key="event.id" 
            class="event-item st-item"
            :class="{ 'slick-slide': isMobile }"
            role="listitem"
          >
            <article class="event-card">
              <a :href="event.ticketUrl" :aria-label="`Purchase tickets for ${event.title} on ${formatEventDate(event.date, event.year)}`">
                <div class="upcoming-events-list-item-image image-cont">
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useSiteConfig } from '../composables/useSiteConfig.js'
import { useEvents } from '../composables/useEvents.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    
    const eventsSlider = ref(null)
    const isMobile = ref(false)
    let slickInstance = null

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768
    }

    const initSlick = async () => {
      if (isMobile.value && eventsSlider.value && !slickInstance) {
        await nextTick()
        
        try {
          // Dynamically import jQuery and slick-carousel
          const jQuery = await import('jquery')
          const $ = jQuery.default || jQuery
          await import('slick-carousel')
          
          // Make jQuery available globally for slick
          if (typeof window !== 'undefined') {
            window.$ = window.jQuery = $
          }
          
          // Wait a bit for slick to be available
          await new Promise(resolve => setTimeout(resolve, 100))
          
          // Initialize slick slider
          if (typeof $.fn.slick === 'function') {
            $(eventsSlider.value).slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              arrows: false,
              autoplay: false,
              adaptiveHeight: false,
              variableWidth: false,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: false
                  }
                }
              ]
            })
            
            slickInstance = $(eventsSlider.value)
          } else {
            console.error('Slick carousel not available')
          }
        } catch (error) {
          console.error('Error initializing Slick carousel:', error)
        }
      }
    }

    const destroySlick = () => {
      if (slickInstance && typeof slickInstance.slick === 'function') {
        try {
          slickInstance.slick('unslick')
        } catch (error) {
          console.error('Error destroying Slick carousel:', error)
        }
        slickInstance = null
      }
    }

    onMounted(() => {
      checkMobile()
      initSlick()
      
      window.addEventListener('resize', () => {
        const wasMobile = isMobile.value
        checkMobile()
        
        if (wasMobile !== isMobile.value) {
          if (isMobile.value) {
            initSlick()
          } else {
            destroySlick()
          }
        }
      })
    })

    onUnmounted(() => {
      destroySlick()
      window.removeEventListener('resize', checkMobile)
    })
    
    return {
      contentConfig: getContentConfig(),
      formatEventDate,
      getEventDateTime,
      eventsSlider,
      isMobile
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

.main:not(.page-home) .upcoming-events {
  margin-top: 0;
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

.event-card .image-cont {
  --_var-img-height: 100%;
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

/* Slick carousel styles for mobile */
.upcoming-events-list-items.slick-slider {
  display: block !important;
}

.upcoming-events-list-items.slick-slider .event-item {
  display: block !important;
  width: 100% !important;
  margin: 0 !important;
}

.upcoming-events-list-items.slick-slider .slick-slide {
  display: block !important;
  height: 600px !important; /* Fixed height for all slides */
}

.upcoming-events-list-items.slick-slider .slick-slide > div {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.upcoming-events-list-items.slick-slider .event-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.upcoming-events-list-items.slick-slider .event-card a {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.upcoming-events-list-items.slick-slider .upcoming-events-list-item-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.upcoming-events-list-items.slick-slider .upcoming-events-list-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Slick navigation arrows */
.upcoming-events-list-items.slick-slider .slick-prev,
.upcoming-events-list-items.slick-slider .slick-next {
  z-index: 10;
  width: 40px;
  height: 40px;
  background: var(--color-pistachio);
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 18px;
  line-height: 1;
}

.upcoming-events-list-items.slick-slider .slick-prev {
  left: 10px;
}

.upcoming-events-list-items.slick-slider .slick-next {
  right: 10px;
}

.upcoming-events-list-items.slick-slider .slick-prev:before,
.upcoming-events-list-items.slick-slider .slick-next:before {
  color: white;
  font-size: 18px;
}

/* Slick dots */
.upcoming-events-list-items.slick-slider :deep(.slick-dots) {
  bottom: -40px!important;
}

.upcoming-events-list-items.slick-slider :deep(.slick-dots li button:before) {
  color: var(--color-pistachio);
  font-size: 12px;
}

.upcoming-events-list-items.slick-slider .slick-dots li.slick-active button:before {
  color: var(--color-pistachio);
}

@media screen and (max-width: 768px) {
  .upcoming-events {
    margin-top: 0;
    padding-top: 0;
  }
  
  .upcoming-events-header {
    align-items: center;
    text-align: center;
  }
  
  .upcoming-events-list-items.st-flex {
    display: block !important;
  }
  
  .upcoming-events-list-items .event-item {
    width: 100% !important;
    margin-bottom: 0 !important;
  }
  
}
</style>
