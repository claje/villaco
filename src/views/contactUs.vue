
<template>
  <div class="contact-page">
    <section id="contact" class="contact-hero">
      <p class="eyebrow">WE'RE HERE TO HELP</p>
      <h1>Contact Us</h1>
      <p>
        Have questions or need more information?
        Get in touch with the College of Computer Studies.
      </p>
    </section>

    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-information">
          <p class="section-label">GET IN TOUCH</p>
          <h2>We'd Love to Hear From You</h2>
          <p class="intro">
            Contact our college for inquiries about academic programs,
            admissions, and other college-related concerns.
          </p>

          <div class="info-card">
            <div class="info-icon">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>Mary Thomas Hall</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">✉️</div>
            <div>
              <h3>Email Address</h3>
              <p>ccssec.cpu.edu.ph</p>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">🕒</div>
            <div>
              <h3>Office Hours</h3>
              <p>7:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <h2>Send Us a Message</h2>
          <p class="form-description">
            Fill out the form below to prepare your inquiry.
          </p>

          <form class="contact-form" @submit.prevent="submitContact">
            <label for="name">Full Name</label>
            <input
              id="name"
              v-model.trim="form.name"
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label for="email">Email Address</label>
            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              placeholder="Enter your email address"
              required
            />

            <label for="subject">Subject</label>
            <input
              id="subject"
              v-model.trim="form.subject"
              type="text"
              placeholder="Enter the subject"
              required
            />

            <label for="message">Message</label>
            <textarea
              id="message"
              v-model.trim="form.message"
              placeholder="Write your message here"
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message →</button>

            <p v-if="notice" class="form-notice" role="status">
              {{ notice }}
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const notice = ref('')

// Replace this with the real, official college email.
const contactEmail = ''

function submitContact() {
  if (!contactEmail) {
    notice.value =
      'The college email has not been configured yet. Please contact the college using its official contact details.'
    return
  }

  const params = new URLSearchParams({
    subject: form.subject,
    body:
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n\n` +
      form.message
  })

  window.location.href =
    `mailto:${contactEmail}?${params.toString()}`
}
</script>

<style scoped>
.contact-page {
  color: #222;
  font-family: Arial, sans-serif;
}

.contact-hero {
  padding: 80px 8%;
  text-align: center;
  background: #edf4fc;
}

.eyebrow,
.section-label {
  color: #174a8b;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.contact-hero h1 {
  color: #17365d;
  font-size: 42px;
  margin-bottom: 20px;
}

.contact-hero > p:last-child {
  max-width: 650px;
  margin: 0 auto;
  color: #666;
  line-height: 1.8;
}

.contact-section {
  padding: 75px 8%;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 45px;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-information h2,
.contact-form-container h2 {
  color: #17365d;
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 15px;
}

.intro,
.form-description {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-top: 20px;
  padding: 18px;
  background: #f9fbfe;
  border: 1px solid #e0e7ef;
  border-radius: 8px;
}

.info-icon {
  font-size: 25px;
}

.info-card h3 {
  color: #17365d;
  font-size: 16px;
  margin-bottom: 8px;
}

.info-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.contact-form-container {
  padding: 30px;
  background: #fff;
  border: 1px solid #e0e7ef;
  border-radius: 10px;
  box-shadow: 0 5px 20px #17365d0d;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-form label {
  color: #17365d;
  font-size: 14px;
  font-weight: bold;
  margin-top: 5px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  font: inherit;
  font-size: 14px;
  border: 1px solid #ccd6e2;
  border-radius: 5px;
  outline: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #174a8b;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  margin-top: 10px;
  padding: 14px 20px;
  color: white;
  background: #174a8b;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.contact-form button:hover {
  background: #103564;
}

.form-notice {
  color: #174a8b;
  font-size: 13px;
  line-height: 1.6;
}

@media (max-width: 750px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-hero h1 {
    font-size: 32px;
  }

  .contact-section {
    padding: 50px 6%;
  }

  .contact-form-container {
    padding: 22px;
  }
}
</style>
