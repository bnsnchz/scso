// Site Configuration
// This file contains all configurable site data that can be easily modified
// for different organizations or deployments

export const siteConfig = {
  // Basic Site Information
  organization: {
    name: "Santa Clarita Symphony Orchestra",
    shortName: "SCSO",
    description: "Santa Clarita's premier community orchestra bringing classical music to the valley",
    website: "https://scso.org",
    email: "info@scso.org",
    phone: "(661) 222-2222",
    address: "Santa Clarita, CA",
    ein: "88-4299007", // Tax ID for nonprofit status
    founded: "2020"
  },

  // Branding & Assets
  branding: {
    logo: {
      horizontal: "/images/scso-logo-horizontal-1500x525.png",
      vertical: "/images/scso-acronym-bgtransparent.png",
      icon: "/images/scso-logoonly-bgtransparent.png"
    },
    colors: {
      primary: "#E06126", // flame
      secondary: "#8dc543", // pistachio
      accent: "#53833E", // fern
      warning: "#F7941D", // carrot
      dark: "#653514", // russet
      black: "#060201"
    },
    fonts: {
      headline: "'Berlin Sans FB', sans-serif",
      text: "'Roboto Light', sans-serif"
    }
  },

  // Navigation
  navigation: {
    main: [
      { label: "2025/2026 Season", href: "season.html", ariaLabel: "View 2025/2026 concert season" },
      { label: "About", href: "about.html", ariaLabel: "Learn about Santa Clarita Symphony Orchestra" },
      { label: "Support", href: "support.html", ariaLabel: "Support Santa Clarita Symphony Orchestra" }
    ],
    cta: {
      label: "Tickets",
      href: "https://scso.ludus.com/index.php",
      ariaLabel: "Purchase tickets for Santa Clarita Symphony Orchestra concerts"
    },
    topBar: {
      label: "Join Our Mailing List",
      href: "mailing-list.html",
      ariaLabel: "Join Santa Clarita Symphony Orchestra mailing list for updates"
    }
  },

  // Social Media
  social: {
    facebook: {
      url: "https://www.facebook.com/SCSOrchestra",
      ariaLabel: "Follow Santa Clarita Symphony Orchestra on Facebook"
    },
    instagram: {
      url: "https://www.instagram.com/scsorchestra/",
      ariaLabel: "Follow Santa Clarita Symphony Orchestra on Instagram"
    }
  },

  // Hero Section
  hero: {
    title: "Join us for our 2025/2026 season",
    description: "Experience the magic of live classical music with Santa Clarita's premier community orchestra. Join us for an unforgettable season of concerts, featuring our new conductor Martin Alex Arellano and celebrating the talented musicians who make our community vibrant through music.",
    cta: {
      label: "Explore Ticket Options",
      href: "https://scso.ludus.com/index.php",
      ariaLabel: "Purchase tickets for Santa Clarita Symphony Orchestra concerts"
    },
    backgroundImage: "/images/SCSO-Spring2024-88.webp"
  },

  // Content Sections
  content: {
    upcomingEvents: {
      title: "Upcoming Concerts & Events",
      viewAllLabel: "View Calendar",
      viewAllHref: "current-season.html",
      viewAllAriaLabel: "View full calendar of Santa Clarita Symphony Orchestra events"
    },
    about: {
      conductor: {
        name: "Martin Alex Arellano",
        title: "New Conductor",
        description: "SCSO welcomes our new conductor, Alex Arellano, who will be working closely with Artistic Director Dr. Brian Stone to bring exciting concerts to the Santa Clarita Valley. Experience the fresh energy and artistic vision that Alex brings to our classical music performances.",
        image: "/images/alex-hp.webp",
        learnMoreHref: "/about-us/artistic-teams.html",
        learnMoreAriaLabel: "Learn more about Martin Alex Arellano and the SCSO artistic team"
      },
      youthCompetition: {
        title: "Youth Concerto Competition 2025",
        description: "SCSO is pleased to open applications for its second Youth Concerto Competition, open to young instrumentalists in grades 9-12.",
        image: "/images/concerto-competition.jpg",
        learnMoreHref: "/youth-concerto-competition.html",
        learnMoreAriaLabel: "Learn more about the SCSO Youth Concerto Competition and how to apply"
      }
    }
  },

  // Footer
  footer: {
    copyright: "© 2025 SCSO. All rights reserved.",
    legal: "Santa Clarita Symphony Orchestra is a Section 501(c)3 nonprofit (EIN: 88-4299007) and your gift may qualify as a charitable deduction for federal income tax purposes.",
    lacac: {
      description: "This organization is supported, in part, by the Los Angeles County Board of Supervisors through the Department of Arts and Culture.",
      logo: "/images/LACAC.avif",
      alt: "LACAC Logo"
    }
  },

  // Newsletter
  newsletter: {
    title: "Stay Connected",
    description: "Subscribe to our newsletter for the latest updates on concerts, events, and special announcements.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing!",
    errorMessage: "Please enter a valid email address."
  }
}

export default siteConfig
