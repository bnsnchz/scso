// Site Configuration Composable
// This composable provides reactive access to site configuration
// and handles environment-specific path resolution

import { computed, ref } from 'vue'
import { siteConfig } from '@/config/site.js'
import { getAssetPath } from '@/config/environment.js'

export function useSiteConfig() {
  // Reactive configuration that can be updated at runtime if needed
  const config = ref(siteConfig)

  // Computed properties for easy access to common configuration
  const organization = computed(() => config.value.organization)
  const branding = computed(() => config.value.branding)
  const navigation = computed(() => config.value.navigation)
  const social = computed(() => config.value.social)
  const hero = computed(() => config.value.hero)
  const content = computed(() => config.value.content)
  const footer = computed(() => config.value.footer)
  const newsletter = computed(() => config.value.newsletter)

  // Helper function to get asset paths with proper base URL
  const getAssetUrl = (path) => {
    return getAssetPath(path)
  }

  // Helper function to get logo URLs
  const getLogoUrl = (type = 'horizontal') => {
    const logoPath = branding.value.logo[type]
    return getAssetUrl(logoPath)
  }

  // Helper function to get social media URLs
  const getSocialUrl = (platform) => {
    return social.value[platform]?.url || '#'
  }

  // Helper function to get social media aria labels
  const getSocialAriaLabel = (platform) => {
    return social.value[platform]?.ariaLabel || `Follow ${organization.value.name} on ${platform}`
  }

  // Helper function to get navigation items
  const getNavItems = () => {
    return navigation.value.main.map(item => ({
      ...item,
      href: item.href // Keep navigation hrefs as-is for Vue Router
    }))
  }

  // Helper function to get CTA configuration
  const getCtaConfig = () => {
    return {
      ...navigation.value.cta,
      href: navigation.value.cta.href.startsWith('http') 
        ? navigation.value.cta.href 
        : getAssetUrl(navigation.value.cta.href)
    }
  }

  // Helper function to get top bar configuration
  const getTopBarConfig = () => {
    return {
      ...navigation.value.topBar,
      href: navigation.value.topBar.href // Keep top bar href as-is for Vue Router
    }
  }

  // Helper function to get hero configuration with resolved asset paths
  const getHeroConfig = () => {
    return {
      ...hero.value,
      backgroundImage: getAssetUrl(hero.value.backgroundImage),
      cta: {
        ...hero.value.cta,
        href: hero.value.cta.href.startsWith('http') 
          ? hero.value.cta.href 
          : getAssetUrl(hero.value.cta.href)
      }
    }
  }

  // Helper function to get content configuration with resolved asset paths
  const getContentConfig = () => {
    return {
      ...content.value,
      about: {
        conductor: {
          ...content.value.about.conductor,
          image: getAssetUrl(content.value.about.conductor.image),
          learnMoreHref: content.value.about.conductor.learnMoreHref // Keep navigation hrefs as-is for Vue Router
        },
        youthCompetition: {
          ...content.value.about.youthCompetition,
          image: getAssetUrl(content.value.about.youthCompetition.image),
          learnMoreHref: content.value.about.youthCompetition.learnMoreHref // Keep navigation hrefs as-is for Vue Router
        }
      },
      artisticTeam: {
        ...content.value.artisticTeam,
        conductor: {
          ...content.value.artisticTeam.conductor,
          title: content.value.artisticTeam.conductor.title,
          name: content.value.artisticTeam.conductor.name,
          description: content.value.artisticTeam.conductor.description,
          image: getAssetUrl(content.value.artisticTeam.conductor.image),
          learnMoreHref: content.value.artisticTeam.conductor.learnMoreHref // Keep navigation hrefs as-is for Vue Router
        },
        artisticDirector: {
          ...content.value.artisticTeam.artisticDirector,
          title: content.value.artisticTeam.artisticDirector.title,
          name: content.value.artisticTeam.artisticDirector.name,
          description: content.value.artisticTeam.artisticDirector.description,
          image: getAssetUrl(content.value.artisticTeam.artisticDirector.image),
          learnMoreHref: content.value.artisticTeam.artisticDirector.learnMoreHref // Keep navigation hrefs as-is for Vue Router
        }
      }
    }
  }

  // Helper function to get footer configuration with resolved asset paths
  const getFooterConfig = () => {
    return {
      ...footer.value,
      lacac: {
        ...footer.value.lacac,
        logo: getAssetUrl(footer.value.lacac.logo)
      }
    }
  }

  // Method to update configuration at runtime (useful for A/B testing or dynamic content)
  const updateConfig = (newConfig) => {
    config.value = { ...config.value, ...newConfig }
  }

  // Method to reset configuration to defaults
  const resetConfig = () => {
    config.value = siteConfig
  }

  // Helper function to generate content cards data
  const getContentCards = () => {
    return [
      {
        id: 'conductor',
        title: content.value.about.conductor.name,
        description: content.value.about.conductor.description,
        image: getAssetUrl(content.value.about.conductor.image),
        imageAlt: `${content.value.about.conductor.name}, ${content.value.about.conductor.title} of ${organization.value.name}`,
        linkHref: content.value.about.conductor.learnMoreHref,
        linkText: 'Learn More',
        linkAriaLabel: content.value.about.conductor.learnMoreAriaLabel,
        linkType: 'internal',
        reverse: false
      },
      {
        id: 'youth-competition',
        title: content.value.about.youthCompetition.title,
        description: content.value.about.youthCompetition.description,
        image: getAssetUrl(content.value.about.youthCompetition.image),
        imageAlt: `Young musicians performing in ${organization.value.name} Youth Concerto Competition`,
        linkHref: content.value.about.youthCompetition.learnMoreHref,
        linkText: 'Learn More',
        linkAriaLabel: content.value.about.youthCompetition.learnMoreAriaLabel,
        linkType: 'internal',
        reverse: true
      }
    ]
  }

  const getArtisticTeamCards = () => {
    return [
      {
        id: 'artistic-team-brian',
        title: content.value.artisticTeam.artisticDirector.name,
        subtitle: content.value.artisticTeam.artisticDirector.title,
        description: content.value.artisticTeam.artisticDirector.description,
        image: getAssetUrl(content.value.artisticTeam.artisticDirector.image),
        imageAlt: `${content.value.artisticTeam.artisticDirector.name}, ${content.value.artisticTeam.artisticDirector.title} of ${organization.value.name}`,
        linkHref: content.value.artisticTeam.artisticDirector.learnMoreHref,
        linkText: 'Read More',
        linkAriaLabel: content.value.artisticTeam.artisticDirector.learnMoreAriaLabel,
        linkType: 'internal',
        reverse: false
      },
      {
        id: 'artistic-team-alex',
        title: content.value.artisticTeam.conductor.name,
        subtitle: content.value.artisticTeam.conductor.title,
        description: content.value.artisticTeam.conductor.description,
        image: getAssetUrl(content.value.artisticTeam.conductor.image),
        imageAlt: `${content.value.artisticTeam.conductor.name}, ${content.value.artisticTeam.conductor.title} of ${organization.value.name}`,
        linkHref: content.value.artisticTeam.conductor.learnMoreHref,
        linkText: 'Read More',
        linkAriaLabel: content.value.artisticTeam.conductor.learnMoreAriaLabel,
        linkType: 'internal',
        reverse: true
      }
    ]
  }

  return {
    // Raw configuration
    config: computed(() => config.value),
    
    // Computed sections
    organization,
    branding,
    navigation,
    social,
    hero,
    content,
    footer,
    newsletter,
    
    // Helper functions
    getAssetUrl,
    getLogoUrl,
    getSocialUrl,
    getSocialAriaLabel,
    getNavItems,
    getCtaConfig,
    getTopBarConfig,
    getHeroConfig,
    getContentConfig,
    getFooterConfig,
    getContentCards,
    getArtisticTeamCards,
    // Configuration management
    updateConfig,
    resetConfig
  }
}

export default useSiteConfig
