// Environment Configuration
// This file handles environment-specific settings and paths

const isDevelopment = import.meta.env.DEV
const isProduction = import.meta.env.PROD

// Base URL configuration based on environment
export const getBaseUrl = () => {
  if (isDevelopment) {
    return ''
  }
  
  // In production, use the configured base path
  const basePath = import.meta.env.VITE_BASE_PATH || '/scso'
  return basePath
}

// Asset path configuration
export const getAssetPath = (path) => {
  // For static assets in public folder, don't add base path in development
  if (isDevelopment) {
    return path
  }
  
  const baseUrl = getBaseUrl()
  // Ensure path starts with / and remove any duplicate slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

// API configuration
export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.scso.org',
  timeout: 10000,
  retries: 3
}

// Build configuration
export const buildConfig = {
  isDevelopment,
  isProduction,
  basePath: getBaseUrl(),
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
  buildDate: new Date().toISOString()
}

// Analytics configuration
export const analyticsConfig = {
  enabled: isProduction && import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  googleAnalyticsId: import.meta.env.VITE_GA_ID,
  googleTagManagerId: import.meta.env.VITE_GTM_ID
}

// Feature flags
export const featureFlags = {
  enableNewsletter: import.meta.env.VITE_ENABLE_NEWSLETTER !== 'false',
  enableSocialSharing: import.meta.env.VITE_ENABLE_SOCIAL_SHARING !== 'false',
  enableAnalytics: analyticsConfig.enabled,
  enablePWA: import.meta.env.VITE_ENABLE_PWA === 'true'
}

export default {
  getBaseUrl,
  getAssetPath,
  apiConfig,
  buildConfig,
  analyticsConfig,
  featureFlags
}
