<template>
  <div class="support-page">
    <PageHero
      title="Support the Santa Clarita Symphony Orchestra"
      description="Help us bring world-class classical music to the Santa Clarita Valley community"
    />

    <section class="support-content">
      <div class="st-container">
        <div class="support-intro">
          <h2>Why Support SCSO?</h2>
          <p>
            As a 501(c)(3) nonprofit organization (EIN: {{ organization.ein }}), the Santa Clarita 
            Symphony Orchestra relies on the generous support of our community to continue bringing 
            high-quality classical music to the valley. Your support helps us:
          </p>
          <ul class="support-benefits">
            <li>Provide free and low-cost concerts for families</li>
            <li>Support music education programs in local schools</li>
            <li>Offer opportunities for young musicians through our Youth Concerto Competition</li>
            <li>Maintain our commitment to musical excellence</li>
            <li>Enrich our community through the power of live classical music</li>
          </ul>
        </div>

        <div class="support-options">
          <h2>Ways to Support</h2>
          <div class="support-grid">
            <div class="support-card">
              <h3>Individual Donations</h3>
              <p>Make a one-time or recurring donation to support our programs and operations.</p>
              <div class="donation-amounts">
                <button class="amount-btn" @click="selectAmount(25)">$25</button>
                <button class="amount-btn" @click="selectAmount(50)">$50</button>
                <button class="amount-btn" @click="selectAmount(100)">$100</button>
                <button class="amount-btn" @click="selectAmount(250)">$250</button>
                <input type="number" v-model="customAmount" placeholder="Other amount" class="custom-amount">
              </div>
              <button class="btn v2" @click="makeDonation">Donate Now</button>
            </div>

            <div class="support-card">
              <h3>Corporate Sponsorship</h3>
              <p>Partner with us to support the arts while gaining valuable community visibility.</p>
              <ul class="sponsor-benefits">
                <li>Logo placement in concert programs</li>
                <li>Recognition in our newsletter</li>
                <li>Complimentary tickets for employees</li>
                <li>Tax-deductible contribution</li>
              </ul>
              <a href="mailto:{{ organization.email }}" class="btn v2">Contact Us</a>
            </div>

            <div class="support-card">
              <h3>Volunteer Opportunities</h3>
              <p>Join our team of dedicated volunteers who help make our concerts possible.</p>
              <ul class="volunteer-roles">
                <li>Concert ushering and hospitality</li>
                <li>Marketing and social media</li>
                <li>Fundraising and development</li>
                <li>Board of directors positions</li>
              </ul>
              <a href="mailto:{{ organization.email }}" class="btn v2">Get Involved</a>
            </div>
          </div>
        </div>

        <div class="tax-info">
          <h2>Tax Information</h2>
          <p>
            The Santa Clarita Symphony Orchestra is a Section 501(c)(3) nonprofit organization 
            (EIN: {{ organization.ein }}). Your gift may qualify as a charitable deduction for 
            federal income tax purposes. Please consult with your tax advisor for specific 
            deduction information.
          </p>
        </div>
      </div>
    </section>

    <NonProfitBanner />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useSiteConfig } from '@/composables/useSiteConfig.js'
import NonProfitBanner from '@/components/NonProfitBanner.vue'
import PageHero from '@/components/PageHero.vue'

export default {
  name: 'SupportPage',
  components: {
    NonProfitBanner,
    PageHero
  },
  setup() {
    const { organization } = useSiteConfig()
    const customAmount = ref('')
    
    const selectAmount = (amount) => {
      customAmount.value = amount
    }
    
    const makeDonation = () => {
      const amount = customAmount.value || 25
      // In a real application, this would integrate with a payment processor
      alert(`Thank you for your donation of $${amount}! This would redirect to our payment processor.`)
    }
    
    return {
      organization,
      customAmount,
      selectAmount,
      makeDonation
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

.support-content {
  padding: 80px 0;
}

.support-intro h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

.support-intro p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.support-benefits {
  list-style: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
}

.support-benefits li {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-light-gray);
  position: relative;
  padding-left: 30px;
}

.support-benefits li:before {
  content: "✓";
  color: var(--color-pistachio);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.support-options {
  margin: 80px 0;
}

.support-options h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.support-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.support-card h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.support-card p {
  margin-bottom: 30px;
  line-height: 1.6;
}

.donation-amounts {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 30px;
}

.amount-btn {
  padding: 12px 24px;
  border: 2px solid var(--color-flame);
  background: white;
  color: var(--color-flame);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.amount-btn:hover {
  background: var(--color-flame);
  color: white;
}

.custom-amount {
  padding: 12px;
  border: 2px solid var(--color-light-gray);
  border-radius: 6px;
  width: 120px;
  text-align: center;
}

.sponsor-benefits,
.volunteer-roles {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 30px;
}

.sponsor-benefits li,
.volunteer-roles li {
  padding: 8px 0;
  border-bottom: 1px solid var(--color-light-gray);
  position: relative;
  padding-left: 25px;
}

.sponsor-benefits li:before,
.volunteer-roles li:before {
  content: "•";
  color: var(--color-flame);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.tax-info {
  background: var(--color-light-gray);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}

.tax-info h2 {
  color: var(--color-flame);
  font-size: 2rem;
  margin-bottom: 20px;
}

.tax-info p {
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.5rem;
  }
  
  .support-grid {
    grid-template-columns: 1fr;
  }
}
</style>
