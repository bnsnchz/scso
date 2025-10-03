// Events Data Configuration
// This file contains all event-related data that can be easily modified
// for different seasons or organizations

export const eventsData = {
  // Upcoming concerts for the current season
  upcomingConcerts: [
    {
      id: 1,
      title: 'New Beginnings',
      date: 'Sunday, October 12',
      year: 2025,
      time: '7:00 PM',
      venue: 'Santa Clarita Performing Arts Center',
      image: '/images/new-beginnings.avif',
      ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491376',
      description: 'Join us for the opening concert of our 2025/2026 season featuring works by Beethoven, Mozart, and contemporary composers.',
      program: [
        'Beethoven: Symphony No. 5',
        'Mozart: Piano Concerto No. 21',
        'Contemporary: New Works by Local Composers'
      ]
    },
    {
      id: 2,
      title: 'Sounds of the Seasons',
      date: 'Sunday, December 7',
      year: 2025,
      time: '7:00 PM',
      venue: 'Santa Clarita Performing Arts Center',
      image: '/images/sounds-of-the-seaons.avif',
      ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491377',
      description: 'Celebrate the holiday season with festive classical music and beloved seasonal favorites.',
      program: [
        'Tchaikovsky: Nutcracker Suite',
        'Handel: Messiah Highlights',
        'Traditional: Holiday Favorites'
      ]
    },
    {
      id: 3,
      title: 'Dreams and Desires',
      date: 'Sunday, March 8',
      year: 2026,
      time: '7:00 PM',
      venue: 'Santa Clarita Performing Arts Center',
      image: '/images/dreams-and-desires.avif',
      ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491379',
      description: 'Explore the emotional depth of classical music through works that capture the essence of human dreams and aspirations.',
      program: [
        'Debussy: Clair de Lune',
        'Rachmaninoff: Piano Concerto No. 2',
        'Mahler: Symphony No. 1 "Titan"'
      ]
    },
    {
      id: 4,
      title: 'Dances the World Over',
      date: 'Sunday, June 7',
      year: 2026,
      time: '7:00 PM',
      venue: 'Santa Clarita Performing Arts Center',
      image: '/images/dances-the-world-over.avif',
      ticketUrl: 'https://scso.ludus.com/show_page.php?show_id=200491380',
      description: 'A musical journey around the world featuring dance-inspired classical works from different cultures and traditions.',
      program: [
        'Dvořák: Slavonic Dances',
        'Ravel: Boléro',
        'Brahms: Hungarian Dances'
      ]
    }
  ],

  // Special events and competitions
  specialEvents: [
    {
      id: 'youth-competition-2025',
      title: 'Youth Concerto Competition 2025',
      date: 'Application Deadline: March 15, 2025',
      description: 'Open to young instrumentalists in grades 9-12. Winners will perform with the orchestra in our spring concert.',
      image: '/images/concerto-competition.jpg',
      detailsUrl: '/youth-concerto-competition.html',
      applicationUrl: '/youth-concerto-competition.html#apply'
    }
  ],

  // Past season archive (for reference)
  pastSeasons: {
    '2024-2025': [
      {
        title: 'Spring Awakening',
        date: 'June 2025',
        conductor: 'Dr. Brian Stone',
        featured: 'Mendelssohn Violin Concerto'
      }
    ]
  }
}

export default eventsData
