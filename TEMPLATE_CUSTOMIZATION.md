# Template Customization Guide

This Vue.js template has been designed for maximum reusability and easy customization. This guide explains how to adapt the template for different organizations or use cases.

## 🏗️ Architecture Overview

The template uses a configuration-driven approach with the following key components:

- **Configuration System**: Centralized config files for easy customization
- **Composables**: Reusable logic for data management and configuration access
- **Component System**: Modular, configurable Vue components
- **Environment Support**: Different settings for development and production

## 📁 Project Structure

```
src/
├── config/
│   ├── site.js          # Main site configuration
│   └── environment.js   # Environment-specific settings
├── data/
│   └── events.js        # Events and content data
├── composables/
│   ├── useSiteConfig.js # Site configuration composable
│   └── useEvents.js     # Events data composable
└── components/          # Vue components (already templated)
```

## ⚙️ Configuration Files

### 1. Site Configuration (`src/config/site.js`)

This is the main configuration file containing all customizable content:

```javascript
export const siteConfig = {
  organization: {
    name: "Your Organization Name",
    shortName: "YON",
    description: "Your organization description",
    // ... other organization details
  },
  branding: {
    logo: {
      horizontal: "/images/your-logo-horizontal.png",
      vertical: "/images/your-logo-vertical.png",
      icon: "/images/your-logo-icon.png"
    },
    colors: {
      primary: "#E06126",
      secondary: "#8dc543",
      // ... other brand colors
    }
  },
  // ... other configuration sections
}
```

### 2. Events Data (`src/data/events.js`)

Contains all event-related data:

```javascript
export const eventsData = {
  upcomingConcerts: [
    {
      id: 1,
      title: 'Your Event Title',
      date: 'Sunday, October 12',
      year: 2025,
      image: '/images/event-image.jpg',
      ticketUrl: 'https://your-ticketing-system.com',
      // ... other event details
    }
  ]
}
```

### 3. Environment Configuration (`src/config/environment.js`)

Handles environment-specific settings and path resolution.

## 🎨 Customization Guide

### Step 1: Update Organization Information

Edit `src/config/site.js`:

```javascript
organization: {
  name: "Your Symphony Orchestra",
  shortName: "YSO",
  description: "Your city's premier community orchestra",
  website: "https://yoursymphony.org",
  email: "info@yoursymphony.org",
  phone: "(555) 123-4567",
  address: "Your City, State",
  ein: "12-3456789", // Your tax ID
  founded: "2020"
}
```

### Step 2: Update Branding

#### Colors
Update the color scheme in `src/config/site.js`:

```javascript
branding: {
  colors: {
    primary: "#YourPrimaryColor",
    secondary: "#YourSecondaryColor",
    accent: "#YourAccentColor",
    // ... other colors
  }
}
```

#### Fonts
Change fonts in `src/config/site.js`:

```javascript
branding: {
  fonts: {
    headline: "'Your Headline Font', sans-serif",
    text: "'Your Text Font', sans-serif"
  }
}
```

#### Logos
Replace logo files in `public/images/` and update paths:

```javascript
branding: {
  logo: {
    horizontal: "/images/your-logo-horizontal.png",
    vertical: "/images/your-logo-vertical.png",
    icon: "/images/your-logo-icon.png"
  }
}
```

### Step 3: Update Content

#### Navigation
Modify navigation items in `src/config/site.js`:

```javascript
navigation: {
  main: [
    { label: "2025/2026 Season", href: "season.html", ariaLabel: "View 2025/2026 concert season" },
    { label: "About", href: "about.html", ariaLabel: "Learn about our organization" },
    { label: "Support", href: "support.html", ariaLabel: "Support our organization" }
  ]
}
```

#### Hero Section
Update hero content:

```javascript
hero: {
  title: "Join us for our 2025/2026 season",
  description: "Your custom hero description...",
  cta: {
    label: "Explore Ticket Options",
    href: "https://your-ticketing-system.com",
    ariaLabel: "Purchase tickets for our concerts"
  },
  backgroundImage: "/images/your-hero-image.jpg"
}
```

#### Events
Update events in `src/data/events.js`:

```javascript
upcomingConcerts: [
  {
    id: 1,
    title: 'Your Concert Title',
    date: 'Sunday, October 12',
    year: 2025,
    time: '7:00 PM',
    venue: 'Your Venue Name',
    image: '/images/concert-poster.jpg',
    ticketUrl: 'https://your-ticketing-system.com/event/1',
    description: 'Concert description...',
    program: ['Piece 1', 'Piece 2', 'Piece 3']
  }
]
```

### Step 4: Update Social Media

Edit social media links in `src/config/site.js`:

```javascript
social: {
  facebook: {
    url: "https://www.facebook.com/YourOrganization",
    ariaLabel: "Follow us on Facebook"
  },
  instagram: {
    url: "https://www.instagram.com/yourorganization/",
    ariaLabel: "Follow us on Instagram"
  }
}
```

### Step 5: Environment Configuration

For different deployment environments, create `.env` files:

#### `.env.development`
```
VITE_BASE_PATH=
VITE_API_BASE_URL=http://localhost:3000/api
VITE_ANALYTICS_ENABLED=false
```

#### `.env.production`
```
VITE_BASE_PATH=/your-subdirectory
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_ANALYTICS_ENABLED=true
VITE_GA_ID=GA-XXXXXXXXX
```

## 🔧 Advanced Customization

### Adding New Configuration Sections

1. Add new configuration to `src/config/site.js`
2. Update `src/composables/useSiteConfig.js` to expose the new configuration
3. Use the new configuration in your components

### Creating Custom Components

1. Create new Vue components in `src/components/`
2. Use the configuration composables for data access
3. Follow the existing component patterns for consistency

### Adding New Data Types

1. Create new data files in `src/data/`
2. Create corresponding composables in `src/composables/`
3. Use the new data in your components

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📝 Best Practices

1. **Keep Configuration Centralized**: Always update configuration files instead of hardcoding values in components
2. **Use Composables**: Leverage the provided composables for data access and configuration
3. **Maintain Accessibility**: Keep aria-labels and semantic HTML in your customizations
4. **Test Responsively**: Ensure your customizations work on all device sizes
5. **Optimize Images**: Use appropriate image formats and sizes for web performance

## 🐛 Troubleshooting

### Common Issues

1. **Images Not Loading**: Check that image paths are correct and files exist in `public/images/`
2. **Configuration Not Updating**: Ensure you're importing and using the composables correctly
3. **Build Errors**: Check that all required configuration properties are defined

### Getting Help

- Check the Vue.js documentation for component development
- Review the existing components for implementation patterns
- Ensure all imports are correct and paths are valid

## 🔄 Migration from Hardcoded Values

If you're migrating from a hardcoded version:

1. Identify all hardcoded values in components
2. Move them to appropriate configuration files
3. Update components to use composables
4. Test thoroughly to ensure functionality is preserved

This templatization system makes it easy to create multiple versions of the site for different organizations while maintaining a consistent codebase and development experience.
