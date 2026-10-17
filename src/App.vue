
<script setup>
import { ref } from 'vue'

import ccsLogo from './image/ccs-logo.jpg'
import faculty1 from './image/faculty1.jpg'
import faculty2 from './image/faculty2.jpg'
import faculty3 from './image/faculty3.jpg'
import cisco from './image/cisco.png'
import lenovo from './image/lenovo.jpg'
import oracle from './image/oracle.png'

const menuOpen = ref(false)

const programs = [
  {
    name: 'BS Information Technology',
    abbreviation: 'BSIT',
    description: 'Learn about web development, networking, databases, and IT solutions.'
  },
  {
    name: 'BS Computer Science',
    abbreviation: 'BSCS',
    description: 'Explore programming, algorithms, software development, and computing.'
  },
  {
    name: 'BS Data Management and Information Analytics',
    abbreviation: 'BSDMIA',
    description: 'Develop skills in managing, analyzing, and interpreting data.'
  },
  {
    name: 'Bachelor of Library and Information Science',
    abbreviation: 'BLIS',
    description: 'Learn to organize, manage, and provide access to information resources.'
  }
]

const faculty = [
  { name: 'Faculty Member 1', image: faculty1 },
  { name: 'Faculty Member 2', image: faculty2 },
  { name: 'Faculty Member 3', image: faculty3 }
]

const partners = [
  { name: 'Cisco', image: cisco },
  { name: 'Lenovo', image: lenovo },
  { name: 'Oracle', image: oracle }
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="ccs-page">
    <!-- Navigation -->
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
        <a href="#programs" @click="closeMenu">Programs</a>
        <a href="#faculty" @click="closeMenu">Faculty &amp; Staff</a>
        <a href="#partnerships" @click="closeMenu">Partnerships</a>
      </nav>
    </header>

    <main>
      <!-- Section 1: Home -->
      <section id="home" class="ccs-hero">
        <div class="ccs-hero-content">
          <p class="ccs-eyebrow">WELCOME TO</p>
          <h1>College of Computer Studies</h1>
          <p>
            Discover opportunities to learn, innovate, and develop
            technology skills for the future.
          </p>
          <a href="#programs" class="ccs-button">Explore Our Programs</a>
        </div>

        <img :src="ccsLogo" alt="College of Computer Studies logo"
          class="ccs-hero-logo" />
      </section>

      <!-- Section 2: Programs -->
      <section id="programs" class="ccs-section">
        <div class="ccs-section-heading">
          <p class="ccs-eyebrow">WHAT WE OFFER</p>
          <h2>Academic Programs</h2>
          <p>Explore the programs offered by the College of Computer Studies.</p>
        </div>

        <div class="ccs-program-grid">
          <article
            v-for="program in programs"
            :key="program.abbreviation"
            class="ccs-program-card"
          >
            <span class="ccs-program-code">{{ program.abbreviation }}</span>
            <h3>{{ program.name }}</h3>
            <p>{{ program.description }}</p>
          </article>
        </div>
      </section>

      <!-- Section 3: Faculty & Staff -->
      <section id="faculty" class="ccs-section ccs-section-light">
        <div class="ccs-section-heading">
          <p class="ccs-eyebrow">MEET OUR TEAM</p>
          <h2>Faculty &amp; Staff</h2>
          <p>Meet the people who support our students' learning and development.</p>
        </div>

        <div class="ccs-faculty-grid">
          <article
            v-for="member in faculty"
            :key="member.name"
            class="ccs-faculty-card"
          >
            <img :src="member.image" :alt="member.name" />
            <h3>{{ member.name }}</h3>
            <p>College of Computer Studies</p>
          </article>
        </div>
      </section>

      <!-- Section 4: Partnerships -->
      <section id="partnerships" class="ccs-section">
        <div class="ccs-section-heading">
          <p class="ccs-eyebrow">OUR COLLABORATIONS</p>
          <h2>Industry Partnerships</h2>
          <p>
            Our industry connections help students discover technology,
            tools, and professional opportunities.
          </p>
        </div>

        <div class="ccs-partner-grid">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="ccs-partner-card"
          >
            <img :src="partner.image" :alt="partner.name" />
            <h3>{{ partner.name }}</h3>
          </div>
        </div>
      </section>
    </main>

    <footer class="ccs-footer">
      <img :src="ccsLogo" alt="" />
      <p>College of Computer Studies</p>
      <p>Learning today, innovating tomorrow.</p>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
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
  min-height: 76px;
  padding: 12px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000;
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

.ccs-section {
  padding: 85px 8%;
  scroll-margin-top: 85px;
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

@media (max-width: 900px) {
  .ccs-program-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .ccs-hero-logo {
    width: 190px;
  }
}

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
