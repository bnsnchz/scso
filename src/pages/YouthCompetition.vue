<template>
  <div class="youth-competition-page">
    <PageHero
      title="Youth Concerto Competition 2025"
      description="Open to young instrumentalists in grades 9-12. Winners will perform with the orchestra in our spring concert."
    />

    <section class="competition-content">
      <div class="st-container">
        <div class="competition-overview">
          <h2>About the Competition</h2>
          <p>
            The Santa Clarita Symphony Orchestra is pleased to announce our second Youth Concerto Competition, 
            providing an opportunity for talented young musicians to perform with a full symphony orchestra. 
            This competition is designed to encourage musical excellence and provide valuable performance 
            experience for young instrumentalists.
          </p>
        </div>

        <div class="competition-details">
          <div class="details-grid">
            <div class="detail-section">
              <h3>Eligibility</h3>
              <ul>
                <li>Open to instrumentalists in grades 9-12</li>
                <li>All orchestral instruments welcome</li>
                <li>Must be able to perform a complete concerto movement</li>
                <li>Previous competition winners are eligible to apply</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>Repertoire Requirements</h3>
              <ul>
                <li>One complete movement from a standard concerto</li>
                <li>Maximum length: 15 minutes</li>
                <li>Must be memorized</li>
                <li>Piano accompaniment required for audition</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>Important Dates</h3>
              <ul>
                <li><strong>Application Deadline:</strong> March 15, 2025</li>
                <li><strong>Audition Date:</strong> April 12, 2025</li>
                <li><strong>Winner Announcement:</strong> April 15, 2025</li>
                <li><strong>Performance Date:</strong> June 7, 2025</li>
              </ul>
            </div>

            <div class="detail-section">
              <h3>Prizes</h3>
              <ul>
                <li><strong>1st Place:</strong> Performance with SCSO + $500</li>
                <li><strong>2nd Place:</strong> $300</li>
                <li><strong>3rd Place:</strong> $200</li>
                <li>All participants receive certificates</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="application-section">
          <h2>How to Apply</h2>
          <div class="application-steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>Complete Application Form</h3>
                <p>Fill out the online application with your personal information and repertoire selection.</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>Submit Recording</h3>
                <p>Upload a video recording of your concerto movement (audio quality should be clear).</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>Live Audition</h3>
                <p>Selected applicants will be invited to perform live for our judging panel.</p>
              </div>
            </div>
          </div>

          <div class="application-form">
            <h3>Application Form</h3>
            <form @submit.prevent="submitApplication" class="competition-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name *</label>
                  <input type="text" id="firstName" v-model="application.firstName" required>
                </div>
                <div class="form-group">
                  <label for="lastName">Last Name *</label>
                  <input type="text" id="lastName" v-model="application.lastName" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" v-model="application.email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input type="tel" id="phone" v-model="application.phone" required>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="grade">Grade Level *</label>
                  <select id="grade" v-model="application.grade" required>
                    <option value="">Select Grade</option>
                    <option value="9">9th Grade</option>
                    <option value="10">10th Grade</option>
                    <option value="11">11th Grade</option>
                    <option value="12">12th Grade</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="instrument">Instrument *</label>
                  <input type="text" id="instrument" v-model="application.instrument" required>
                </div>
              </div>

              <div class="form-group">
                <label for="repertoire">Repertoire Selection *</label>
                <textarea 
                  id="repertoire" 
                  v-model="application.repertoire" 
                  placeholder="Please list the composer, title, and movement you will perform"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label for="experience">Musical Experience</label>
                <textarea 
                  id="experience" 
                  v-model="application.experience" 
                  placeholder="Tell us about your musical background, teachers, and previous performances"
                ></textarea>
              </div>

              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="application.agreeToTerms" required>
                  I agree to the competition terms and conditions *
                </label>
              </div>

              <button type="submit" class="btn v2" :disabled="isSubmitting">
                {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import PageHero from '@/components/PageHero.vue'

export default {
  name: 'YouthCompetitionPage',
  components: {
    PageHero
  },
  setup() {
    const isSubmitting = ref(false)
    const application = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      grade: '',
      instrument: '',
      repertoire: '',
      experience: '',
      agreeToTerms: false
    })
    
    const submitApplication = async () => {
      isSubmitting.value = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        alert('Application submitted successfully! We will contact you soon.')
        
        // Reset form
        application.value = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          grade: '',
          instrument: '',
          repertoire: '',
          experience: '',
          agreeToTerms: false
        }
      } catch (error) {
        alert('There was an error submitting your application. Please try again.')
      } finally {
        isSubmitting.value = false
      }
    }
    
    return {
      application,
      isSubmitting,
      submitApplication
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

.competition-content {
  padding: 80px 0;
}

.competition-overview h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

.competition-overview p {
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.detail-section {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.detail-section h3 {
  color: var(--color-flame);
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.detail-section ul {
  list-style: none;
  padding: 0;
}

.detail-section li {
  padding: 8px 0;
  border-bottom: 1px solid var(--color-light-gray);
  position: relative;
  padding-left: 25px;
}

.detail-section li:before {
  content: "•";
  color: var(--color-flame);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.application-section h2 {
  color: var(--color-flame);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.application-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.step-number {
  background: var(--color-flame);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h3 {
  color: var(--color-flame);
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.step-content p {
  line-height: 1.6;
}

.application-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
}

.application-form h3 {
  color: var(--color-flame);
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
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

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--color-light-gray);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-flame);
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
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

@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .application-steps {
    grid-template-columns: 1fr;
  }
}
</style>
