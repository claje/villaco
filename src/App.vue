<script setup>
import { ref } from 'vue'
import ccsLogo from './image/ccs-logo.jpg'

import HomePage from './views/homePage.vue'
import AboutUs from './views/aboutUs.vue'
import Program from './views/program.vue'
import FacultyAndStaff from './views/faculty&staff.vue'
import Partnerships from './views/partnership.vue'
import NewsEvents from './views/NewsEvents.vue'
import ContactUs from './views/contactUs.vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="ccs-page">

    <header class="ccs-header">
      <a href="#home" class="ccs-brand" @click="closeMenu">
        <img :src="ccsLogo" alt="CCS Logo" />
        <span>College of Computer Studies</span>
      </a>

      <button
        class="ccs-menu-button"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

      <nav class="ccs-nav" :class="{ 'ccs-nav-open': menuOpen }">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About Us</a>
        <a href="#programs" @click="closeMenu">Programs</a>
        <a href="#faculty" @click="closeMenu">Faculty &amp; Staff</a>
        <a href="#partnerships" @click="closeMenu">Partnerships</a>
        <a href="#news-events" @click="closeMenu">News &amp; Events</a>
        <a href="#contact" @click="closeMenu">Contact Us</a>
      </nav>
    </header>


    <main>
      <HomePage />
      <AboutUs />
      <Program />
      <FacultyAndStaff />
      <Partnerships />
      <NewsEvents />
      <ContactUs/>
    </main>

  
    <footer class="ccs-footer">
      <a href="#home" aria-label="Go to Home">
        <img :src="ccsLogo" alt="CCS Logo" />
      </a>
      <p>College of Computer Studies</p>
      <p>Learning today, innovating tomorrow.</p>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  margin: 0;
  overflow-x: hidden;
}

.ccs-page {
  color: #203047;
  font-family: Arial, sans-serif;
}

.ccs-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 76px;
  padding: 12px 6%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #ffffff;
  z-index: 9999;
  box-shadow: 0 2px 12px #172b4d14;
}


.ccs-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #203047;
  text-decoration: none;
  font-weight: bold;
}

.ccs-brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.ccs-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.ccs-nav a {
  color: #203047;
  text-decoration: none;
  font-weight: 600;
}

.ccs-nav a:hover {
  color: #2874c8;
}

.ccs-menu-button {
  display: none;
  background: none;
  border: 0;
  font-size: 28px;
  cursor: pointer;
}

/* Home Hero */
.ccs-hero {
  min-height: 510px;
  padding: 70px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  background: linear-gradient(120deg, #eaf3ff, #f8fbff);
}

.ccs-hero-content {
  max-width: 650px;
}

.ccs-eyebrow {
  color: #2874c8;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
}

.ccs-hero h1 {
  font-size: clamp(36px, 5vw, 58px);
  line-height: 1.12;
  margin: 15px 0;
}

.ccs-hero-content > p:not(.ccs-eyebrow) {
  font-size: 18px;
  line-height: 1.8;
  color: #59677a;
}

.ccs-hero-logo {
  width: min(260px, 30%);
  object-fit: contain;
}

.ccs-button {
  display: inline-block;
  margin-top: 18px;
  padding: 14px 22px;
  background: #2874c8;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}

/* Page Sections */
.ccs-section {
  padding: 85px 8%;
  scroll-margin-top: 100px;
}

.ccs-section-light {
  background: #f5f8fc;
}

.ccs-section-heading {
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;
}

.ccs-section-heading h2 {
  font-size: 34px;
  margin: 12px 0;
}

.ccs-section-heading > p:last-child {
  color: #667386;
  line-height: 1.7;
}

/* Cards and Grids */
.ccs-program-grid,
.ccs-faculty-grid,
.ccs-partner-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.ccs-program-card,
.ccs-faculty-card,
.ccs-partner-card {
  background: white;
  padding: 24px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 5px 22px #2030470d;
}

.ccs-program-code {
  display: inline-block;
  padding: 9px 13px;
  border-radius: 8px;
  background: #eaf3ff;
  color: #2874c8;
  font-weight: bold;
}

.ccs-program-card h3 {
  font-size: 18px;
  line-height: 1.5;
}

.ccs-program-card p,
.ccs-faculty-card p {
  color: #667386;
  line-height: 1.7;
  font-size: 14px;
}

.ccs-faculty-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 950px;
  margin: 0 auto;
}

.ccs-faculty-card img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
}

.ccs-faculty-card h3 {
  margin-bottom: 6px;
}

.ccs-partner-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 900px;
  margin: 0 auto;
}

.ccs-partner-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ccs-partner-card img {
  width: 100%;
  max-width: 170px;
  height: 100px;
  object-fit: contain;
}

/* Footer */
.ccs-footer {
  padding: 35px 20px;
  text-align: center;
  background: #203047;
  color: white;
}

.ccs-footer img {
  width: 55px;
  height: 55px;
  object-fit: contain;
}

.ccs-footer p {
  margin: 8px 0;
}

/* Tablet */
@media (max-width: 900px) {
  .ccs-program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ccs-hero-logo {
    width: 190px;
  }

  .ccs-nav {
    gap: 14px;
  }
}

/* Mobile Navigation */
@media (max-width: 650px) {
  .ccs-header {
    flex-wrap: wrap;
  }

  .ccs-brand span {
    max-width: 220px;
  }

  .ccs-menu-button {
    display: block;
  }

  .ccs-nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .ccs-nav.ccs-nav-open {
    display: flex;
  }

  .ccs-nav a {
    padding: 14px 4px;
  }

  .ccs-hero {
    min-height: auto;
    padding: 65px 7%;
    flex-direction: column-reverse;
    text-align: center;
  }

  .ccs-hero-logo {
    width: 150px;
  }

  .ccs-section {
    padding: 60px 6%;
  }

  .ccs-section-heading h2 {
    font-size: 28px;
  }

  .ccs-program-grid,
  .ccs-faculty-grid,
  .ccs-partner-grid {
    grid-template-columns: 1fr;
  }
}
</style>