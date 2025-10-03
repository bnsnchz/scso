# SCSO Vue.js Template

A highly templatized, modern Vue.js implementation designed for maximum reusability across different organizations.

## ✨ Features

- 🎨 **Component-based architecture** - Modular, reusable components
- 📱 **Fully responsive** - Works on all devices
- 🚀 **Modern Vue 3** - Latest Vue.js features with Composition API
- 💫 **Reactive data** - Dynamic event management
- 🎯 **SEO-friendly** - Semantic HTML structure
- ⚡ **Fast development** - Hot reload with Vite
- 🌐 **GitHub Pages ready** - Automated deployment
- 🔧 **Highly templatized** - Easy customization for any organization
- ⚙️ **Configuration-driven** - Centralized config system
- 🎭 **Multi-tenant ready** - Support for different organizations

## 🏗️ Project Structure

```
scso/
├── public/
│   └── images/          # All website images
├── src/
│   ├── config/          # Configuration files
│   │   ├── site.js      # Main site configuration
│   │   └── environment.js # Environment settings
│   ├── data/            # Data files
│   │   └── events.js    # Events and content data
│   ├── composables/     # Vue composables
│   │   ├── useSiteConfig.js # Site config composable
│   │   └── useEvents.js # Events data composable
│   ├── components/      # Vue components
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   ├── UpcomingEvents.vue
│   │   ├── NonProfitBanner.vue
│   │   ├── ContentCards.vue
│   │   └── Footer.vue
│   ├── styles/
│   │   └── main.css     # Global styles
│   ├── App.vue          # Main app component
│   └── main.js          # App entry point
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── env.example          # Environment variables example
├── TEMPLATE_CUSTOMIZATION.md # Customization guide
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

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

1. **Push to main branch**: The site automatically deploys when you push changes to the `main` branch
2. **Check deployment status**: Go to the "Actions" tab in your GitHub repository
3. **View your site**: Once deployed, your site will be available at:
   ```
   https://yourusername.github.io/scso/
   ```

### Manual Deployment

If you prefer to deploy manually:

1. **Install gh-pages**:
   ```bash
   npm install
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

### Setting up GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Select "GitHub Actions" as the source

2. **Configure repository name**:
   - If your repository is named `scso`, the site will be at `https://yourusername.github.io/scso/`
   - If you want it at `https://yourusername.github.io/`, rename your repository to `yourusername.github.io`

3. **Update base path** (if needed):
   - If your repository name is different, update the `base` path in `vite.config.js`
   - Change `/scso/` to match your repository name

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

## 🎨 Quick Customization

### For a New Organization

1. **Update Organization Info**: Edit `src/config/site.js`
2. **Replace Images**: Add your logos and images to `public/images/`
3. **Update Events**: Modify `src/data/events.js`
4. **Customize Colors**: Change the color scheme in `src/config/site.js`
5. **Deploy**: Run `npm run build` and deploy

### Key Configuration Files

- **`src/config/site.js`** - Main organization and content configuration
- **`src/data/events.js`** - Events and concert data
- **`src/config/environment.js`** - Environment-specific settings

### Adding New Events

Update the events in `src/data/events.js`:

```javascript
upcomingConcerts: [
  {
    id: 5,
    title: 'New Event Title',
    date: 'Sunday, Date',
    year: 2025,
    image: '/images/new-event-image.jpg',
    ticketUrl: 'https://ticket-url.com',
    description: 'Event description...',
    program: ['Piece 1', 'Piece 2']
  }
]
```

## 📚 Documentation

- **[Template Customization Guide](TEMPLATE_CUSTOMIZATION.md)** - Comprehensive customization documentation
- **Configuration System** - Centralized config for easy organization changes
- **Component Architecture** - Modular, reusable Vue components
- **Environment Support** - Different settings for dev/prod

## Customization

- **Organization Info**: Update `src/config/site.js`
- **Events & Content**: Modify `src/data/events.js`
- **Styling**: Change CSS variables in `src/styles/main.css`
- **Branding**: Replace images and update paths in config
- **Functionality**: Add new composables and components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
