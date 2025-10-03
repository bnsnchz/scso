// Events Data Composable
// This composable provides reactive access to events data
// and handles event-related operations

import { computed, ref } from 'vue'
import { eventsData } from '@/data/events.js'
import { getAssetPath } from '@/config/environment.js'

export function useEvents() {
  // Reactive events data that can be updated at runtime
  const events = ref(eventsData)

  // Computed properties for easy access to different event types
  const upcomingConcerts = computed(() => events.value.upcomingConcerts)
  const specialEvents = computed(() => events.value.specialEvents)
  const pastSeasons = computed(() => events.value.pastSeasons)

  // Helper function to get asset paths for event images
  const getEventImageUrl = (imagePath) => {
    return getAssetPath(imagePath)
  }

  // Helper function to process events with resolved asset paths
  const getProcessedEvents = (eventList) => {
    return eventList.map(event => ({
      ...event,
      image: getEventImageUrl(event.image)
    }))
  }

  // Helper function to get upcoming concerts with processed asset paths
  const getProcessedUpcomingConcerts = computed(() => {
    return getProcessedEvents(upcomingConcerts.value)
  })

  // Helper function to get special events with processed asset paths
  const getProcessedSpecialEvents = computed(() => {
    return getProcessedEvents(specialEvents.value)
  })

  // Helper function to format event date for display
  const formatEventDate = (dateString, year = null) => {
    if (year) {
      return `${dateString}, ${year}`
    }
    return dateString
  }

  // Helper function to get event datetime for accessibility
  const getEventDateTime = (dateString, year = null) => {
    const fullDate = formatEventDate(dateString, year)
    const date = new Date(fullDate)
    return date.toISOString()
  }

  // Helper function to get events by year
  const getEventsByYear = (year) => {
    return upcomingConcerts.value.filter(event => event.year === year)
  }

  // Helper function to get next upcoming event
  const getNextEvent = computed(() => {
    const now = new Date()
    return upcomingConcerts.value.find(event => {
      const eventDate = new Date(`${event.date}, ${event.year}`)
      return eventDate > now
    })
  })

  // Helper function to get events happening this month
  const getEventsThisMonth = computed(() => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()
    
    return upcomingConcerts.value.filter(event => {
      const eventDate = new Date(`${event.date}, ${event.year}`)
      return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
    })
  })

  // Helper function to search events by title or description
  const searchEvents = (query) => {
    const searchTerm = query.toLowerCase()
    return upcomingConcerts.value.filter(event => 
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.program.some(piece => piece.toLowerCase().includes(searchTerm))
    )
  }

  // Method to add a new event
  const addEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: Date.now(), // Simple ID generation
      image: newEvent.image || '/images/default-event.jpg'
    }
    events.value.upcomingConcerts.push(eventWithId)
  }

  // Method to update an existing event
  const updateEvent = (eventId, updatedEvent) => {
    const index = events.value.upcomingConcerts.findIndex(event => event.id === eventId)
    if (index !== -1) {
      events.value.upcomingConcerts[index] = { ...events.value.upcomingConcerts[index], ...updatedEvent }
    }
  }

  // Method to remove an event
  const removeEvent = (eventId) => {
    const index = events.value.upcomingConcerts.findIndex(event => event.id === eventId)
    if (index !== -1) {
      events.value.upcomingConcerts.splice(index, 1)
    }
  }

  // Method to update all events data
  const updateEvents = (newEventsData) => {
    events.value = { ...events.value, ...newEventsData }
  }

  // Method to reset events to defaults
  const resetEvents = () => {
    events.value = eventsData
  }

  return {
    // Raw data
    events: computed(() => events.value),
    
    // Computed sections
    upcomingConcerts,
    specialEvents,
    pastSeasons,
    
    // Processed data with resolved asset paths
    getProcessedUpcomingConcerts,
    getProcessedSpecialEvents,
    
    // Helper functions
    getEventImageUrl,
    getProcessedEvents,
    formatEventDate,
    getEventDateTime,
    getEventsByYear,
    getNextEvent,
    getEventsThisMonth,
    searchEvents,
    
    // Data management methods
    addEvent,
    updateEvent,
    removeEvent,
    updateEvents,
    resetEvents
  }
}

export default useEvents
