<template>
  <li class="board-staff-item st-item st-flex st-half">
    <div class="image-cont st-item">
      <img :src="getAssetUrl(member.image)" :alt="member.name" />
    </div> 
    <div class="board-staff-content st-item">
      <p v-if="member.title" class="title">{{ member.title }}</p>
      <h3>{{ member.name }}</h3>
      <a 
        v-if="member.email" 
        :href="`mailto:${member.email}`"
        :aria-label="`Email ${member.name}`"
      >
        {{ member.email }}
      </a>
    </div>
  </li>
</template>

<script>
import { useSiteConfig } from '@/composables/useSiteConfig.js'

export default {
  name: 'BoardStaffCard',
  props: {
    member: {
      type: Object,
      required: true,
      validator: (member) => {
        return member && typeof member.name === 'string'
      }
    }
  },
  setup() {
    const { getAssetUrl } = useSiteConfig()
    
    return {
      getAssetUrl
    }
  }
}
</script>

<style scoped>
.board-staff-item {
  align-items: stretch;
  gap: 0;
  --var-item-width: calc(50% - 12px);
  flex: 1 1 calc(50% - 12px);
  min-width: 0;
}

.image-cont {
  --_var-img-height: 272px;
}

.board-staff-content {
  background-color: var(--color-pistachio);
  padding: 48px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 0;
}

.board-staff-content .title {
  color: var(--color-dark);
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.board-staff-content h3 {
  color: var(--color-dark);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.board-staff-content a {
  color: var(--color-black);
  font-size: 10px;
  word-break: break-all;
  overflow-wrap: break-word;
  text-decoration: none;
  transition: color 0.2s ease;
}

.board-staff-content a:hover {
  color: var(--color-flame);
  text-decoration: underline;
}

/* Mobile Responsive Styles */
@media screen and (max-width: 768px) {
  .board-staff-item {
    --var-item-width: 100%;
    flex: 1 1 100%;
  }
  
  .board-staff-content {
    padding: 32px 20px;
  }
  
  .board-staff-content h3 {
    font-size: 18px;
  }
  
  .board-staff-content .title {
    font-size: 13px;
  }
  
  .board-staff-content a {
    font-size: 12px;
  }
}

@media screen and (max-width: 480px) {
  .board-staff-content {
    padding: 24px 16px;
  }
  
  .board-staff-content h3 {
    font-size: 16px;
  }
}
</style>
