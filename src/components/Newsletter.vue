<template>
  <section class="newsletter drk-bg" role="region" aria-labelledby="newsletter-heading">
    <div class="newsletter-container st-center">
      <h3 id="newsletter-heading">{{ newsletterConfig.title }}</h3>
      <form class="newsletter-form st-flex st-center" @submit.prevent="handleSubmit">
        <input 
          type="email" 
          v-model="email"
          :placeholder="newsletterConfig.placeholder" 
          required 
          :aria-label="newsletterConfig.placeholder"
        >
        <button class="btn v2" type="submit">{{ newsletterConfig.buttonText }}</button>
      </form>
      <p v-if="message" class="newsletter-message">{{ message }}</p>
    </div>
  </section>
</template>

<script>
import { useSiteConfig } from '../composables/useSiteConfig.js'
import { ref } from 'vue'

export default {
  name: 'Newsletter',
  setup() {
    const { newsletter } = useSiteConfig()
    const email = ref('')
    const message = ref('')
    
    const handleSubmit = () => {
      // Basic email validation
      if (email.value && email.value.includes('@')) {
        message.value = newsletter.value.successMessage
        email.value = ''
        setTimeout(() => {
          message.value = ''
        }, 3000)
      } else {
        message.value = newsletter.value.errorMessage
        setTimeout(() => {
          message.value = ''
        }, 3000)
      }
    }
    
    return {
      newsletterConfig: newsletter,
      email,
      message,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.newsletter {
  background-color: var(--color-pistachio);
  padding: 32px 0;
}

.newsletter-container {
  max-width: var(--var-container-width);
  margin: 0 auto;
  padding: 0 20px;
}

.drk-bg .newsletter-container {
  color: #fff;
}

.newsletter-container h3 {
  margin-bottom: 24px;
  text-align: center;
}

.newsletter-form {
  gap: 16px;
  align-items: center;
}

input[type="email"] {
    border: none;
    padding: 10px 16px;
    max-width: 300px;
    width: 100%;
    font-family: var(--font-text);
    font-size: 18px;
}

.newsletter-message {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 600;
}
</style>