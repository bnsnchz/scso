<template>
  <div class="mailing-list-page">
    <section class="page-hero">
      <div class="st-container">
        <h1>Join Our Mailing List</h1>
        <p class="hero-description">
          Stay connected with the latest updates on concerts, events, and special announcements
        </p>
      </div>
    </section>

    <section class="mailing-list-content">
      <div class="st-container">
        <div class="newsletter-form">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Get the latest news about upcoming concerts, special events, ticket discounts, 
            and community updates delivered directly to your inbox.
          </p>
          
          <form @submit.prevent="subscribe" class="subscription-form">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                :placeholder="newsletter.placeholder"
                required
                class="email-input"
              >
            </div>
            
            <div class="form-group">
              <label for="name">Name (Optional)</label>
              <input 
                type="text" 
                id="name" 
                v-model="name" 
                placeholder="Your name"
                class="name-input"
              >
            </div>
            
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="agreeToTerms" required>
                I agree to receive email updates from the Santa Clarita Symphony Orchestra
              </label>
            </div>
            
            <button type="submit" class="btn v2" :disabled="isSubmitting">
              {{ isSubmitting ? 'Subscribing...' : newsletter.buttonText }}
            </button>
          </form>
          
          <div v-if="subscriptionMessage" class="subscription-message" :class="subscriptionStatus">
            {{ subscriptionMessage }}
          </div>
        </div>

        <div class="newsletter-benefits">
          <h2>What You'll Receive</h2>
          <div class="benefits-grid">
            <div class="benefit-item">
              <h3>Concert Announcements</h3>
              <p>Be the first to know about upcoming concerts and special events</p>
            </div>
            
            <div class="benefit-item">
              <h3>Ticket Discounts</h3>
              <p>Exclusive access to subscriber-only discounts and early bird pricing</p>
            </div>
            
            <div class="benefit-item">
              <h3>Behind the Scenes</h3>
              <p>Get insights into our rehearsals, conductor interviews, and musician spotlights</p>
            </div>
            
            <div class="benefit-item">
              <h3>Community Events</h3>
              <p>Learn about music education programs, youth competitions, and community outreach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSiteConfig } from '@/composables/useSiteConfig.js'

export default {
  name: 'MailingListPage',
  setup() {
    const { newsletter } = useSiteConfig()
    const email = ref('')
    const name = ref('')
    const agreeToTerms = ref(false)
    const isSubmitting = ref(false)
    const subscriptionMessage = ref('')
    const subscriptionStatus = ref('')
    
    const subscribe = async () => {
      isSubmitting.value = true
      subscriptionMessage.value = ''
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // In a real application, this would integrate with an email service
        subscriptionMessage.value = newsletter.successMessage
        subscriptionStatus.value = 'success'
        
        // Reset form
        email.value = ''
        name.value = ''
        agreeToTerms.value = false
        
      } catch (error) {
        subscriptionMessage.value = newsletter.errorMessage
        subscriptionStatus.value = 'error'
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      newsletter,
      email,
      name,
      agreeToTerms,
      isSubmitting,
      subscriptionMessage,
      subscriptionStatus,
      subscribe
    }
  }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-flame), var(--color-pistachio));
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  font-weight: 100;
  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.mailing-list-content {
  padding: 80px 0;
}

.newsletter-form {
  max-width: 600px;
  margin: 0 auto 80px;
  text-align: center;
}

.newsletter-form h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.newsletter-form p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 40px;
  color: var(--color-dark);
}

.subscription-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--color-dark);
}

.email-input,
.name-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-light-gray);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.email-input:focus,
.name-input:focus {
  outline: none;
  border-color: var(--color-flame);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9rem;
  line-height: 1.4;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  margin: 0;
  flex-shrink: 0;
}

.subscription-message {
  margin-top: 20px;
  padding: 16px;
  border-radius: 6px;
  font-weight: 500;
}

.subscription-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.subscription-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.newsletter-benefits h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.benefit-item {
  text-align: center;
  padding: 30px 20px;
}

.benefit-item h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.benefit-item p {
  line-height: 1.6;
  color: var(--color-dark);
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.5rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
