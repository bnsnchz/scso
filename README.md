# SCSO Vue.js Version

A modern Vue.js implementation of the Santa Clarita Symphony Orchestra website.

## Features

- 🎨 **Component-based architecture** - Modular, reusable components
- 📱 **Fully responsive** - Works on all devices
- 🚀 **Modern Vue 3** - Latest Vue.js features with Composition API
- 💫 **Reactive data** - Dynamic event management
- 🎯 **SEO-friendly** - Semantic HTML structure
- ⚡ **Fast development** - Hot reload with Vite

## Project Structure

```
vue-version/
├── public/
│   └── images/          # All website images
├── src/
│   ├── components/      # Vue components
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── UpcomingEvents.vue
│   │   ├── NonProfitBanner.vue
│   │   └── Footer.vue
│   ├── styles/
│   │   └── main.css     # Global styles
│   ├── App.vue          # Main app component
│   └── main.js          # App entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. **Install Node.js** (if not already installed):
   - Visit [nodejs.org](https://nodejs.org/)
   - Download and install the LTS version

2. **Navigate to the project directory**:
   ```bash
   cd vue-version
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Key Improvements Over Original

### 1. **Component Architecture**
- Each section is now a reusable Vue component
- Better separation of concerns
- Easier to maintain and extend

### 2. **Dynamic Data Management**
- Events are now stored in reactive data
- Easy to add/edit events without touching HTML
- Can be easily connected to a CMS or API

### 3. **Modern Development Experience**
- Hot reload for instant feedback
- TypeScript support (optional)
- Better debugging tools
- Modern build system with Vite

### 4. **Scalability**
- Easy to add new features
- Component reusability
- State management ready (Pinia)
- Router ready for multiple pages

## Adding New Events

To add new events, simply update the `events` array in `UpcomingEvents.vue`:

```javascript
events: [
  {
    id: 5,
    title: 'New Event Title',
    date: 'Sunday, Date',
    image: '/images/new-event-image.jpg',
    ticketUrl: 'https://ticket-url.com'
  }
  // ... existing events
]
```

## Customization

- **Styles**: Modify CSS variables in `main.css` or component-specific styles
- **Content**: Update text in individual components
- **Functionality**: Add new methods to components
- **Layout**: Modify component templates

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
