# Multipage Vue.js Application Setup

This document explains the multipage setup for the Santa Clarita Symphony Orchestra website.

## 🎯 **Overview**

The application has been converted from a single-page application to a multipage application with extensionless URLs using Vue Router.

## 📁 **Project Structure**

```
src/
├── pages/           # Page components
│   ├── Home.vue     # Homepage (original content)
│   ├── About.vue    # About page
│   ├── Season.vue   # 2025/2026 Season page
│   ├── Support.vue  # Support page
│   ├── MailingList.vue
│   ├── YouthCompetition.vue
│   ├── ArtisticTeam.vue
│   └── NotFound.vue  # 404 page
├── router/          # Vue Router configuration
│   └── index.js     # Route definitions
├── components/      # Reusable components
├── composables/     # Vue 3 composables
├── config/          # Configuration files
└── data/           # Data files
```

## 🛣️ **Routes**

| URL | Page | Description |
|-----|-------|-------------|
| `/` | Home | Main homepage with hero, events, content cards |
| `/about` | About | Organization information and mission |
| `/season` | Season | 2025/2026 concert season details |
| `/support` | Support | Donation and sponsorship information |
| `/mailing-list` | Mailing List | Newsletter subscription |
| `/youth-competition` | Youth Competition | Competition details and application |
| `/artistic-team` | Artistic Team | Conductor and team information |
| `/*` | 404 | Not found page with helpful links |

## 🔧 **Key Features**

### **Extensionless URLs**
- Clean URLs without `.html` extensions
- SEO-friendly structure
- Easy to remember and share

### **Vue Router Integration**
- Client-side routing for fast navigation
- Browser history support
- Automatic scroll-to-top on route changes

### **GitHub Pages Compatibility**
- Configured for GitHub Pages deployment
- 404.html fallback for SPA routing
- Proper base path handling

### **SEO Optimization**
- Dynamic page titles and meta descriptions
- Proper heading structure
- Semantic HTML elements

## 🚀 **Development**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 **Deployment**

The application is configured for GitHub Pages deployment with:

- **Base Path**: `/scso/` for production
- **SPA Fallback**: 404.html handles client-side routing
- **Asset Optimization**: Proper chunking and compression

## 🎨 **Navigation**

The header navigation automatically updates based on the current route:

- **Logo**: Links to homepage
- **Main Menu**: Season, About, Support pages
- **CTA Button**: External ticket sales link
- **Top Bar**: Mailing list signup

## 🔄 **Migration from Single Page**

The original single-page content has been preserved:

- **Home Page**: Contains all original components (Hero, Events, Content Cards, etc.)
- **Composables**: All existing functionality maintained
- **Styling**: No changes to existing styles
- **Data**: All configuration and data files preserved

## 📱 **Responsive Design**

All pages are fully responsive and maintain the original design system:

- Mobile-first approach
- Consistent styling across pages
- Accessible navigation
- Touch-friendly interactions

## 🎵 **Content Management**

Content is managed through:

- **Site Configuration**: `src/config/site.js`
- **Events Data**: `src/data/events.js`
- **Composables**: Reusable logic for data management

This setup provides a professional, scalable foundation for the Santa Clarita Symphony Orchestra website while maintaining all existing functionality and design.
