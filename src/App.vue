
<script setup>
import ccsLogo from './image/ccs-logo.jpg'
import faculty1 from './image/faculty1.jpg'
import faculty2 from './image/faculty2.jpg'
import faculty3 from './image/faculty3.jpg'
import cisco from './image/cisco.png'
import lenovo from './image/lenovo.jpg'
import oracle from './image/oracle.png'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
<a href="#home" class="logo" @click="menuOpen = false">
  <img :src="ccsLogo" alt="CCS Logo" />
</a>

      <button class="menu-button" @click="menuOpen = !menuOpen">
        ☰
      </button>

      <div class="nav-links" :class="{ active: menuOpen }">
        <a href="#home" @click="menuOpen = false">Home</a>
        <a href="#programs" @click="menuOpen = false">Programs</a>
        <a href="#faculty" @click="menuOpen = false">Faculty & Staff</a>
        <a href="#partnerships" @click="menuOpen = false">
          Partnerships
        </a>
      </div>
    </nav>

    <!-- Section 1: Hero -->

<!-- Section 1: Hero -->
<section id="home" class="hero">
  <div class="hero-content">
    <p class="welcome">WELCOME TO CCS</p>

    <h1>College of Computer Studies</h1>

    <p>
      Discover technology, develop your skills, and prepare
      for your future in the digital world.
    </p>

    <a href="#programs" class="hero-button">
      Explore Programs
    </a>
  </div>

  <div class="hero-image">
    <img :src="ccsLogo" alt="College of Computer Studies Logo" />
  </div>
</section>


    <!-- The other three sections will be added next -->
     
<!-- Section 2: Programs Offered -->
<section id="programs" class="programs">
  <div class="section-heading">
    <p>OUR ACADEMIC PROGRAMS</p>
    <h2>Programs Offered</h2>
    <span>
      Explore our programs and find the path that fits your interests.
    </span>
  </div>

  <div class="program-list">
    <div class="program-card">
      <div class="program-logo">IT</div>
      <h3>BSIT</h3>
      <h4>Bachelor of Science in Information Technology</h4>
      <p>
        Learn about software, networking, web development,
        and information systems.
      </p>
    </div>

    <div class="program-card">
      <div class="program-logo">CS</div>
      <h3>BSCS</h3>
      <h4>Bachelor of Science in Computer Science</h4>
      <p>
        Study programming, computing concepts, algorithms,
        and software development.
      </p>
    </div>

    <div class="program-card">
      <div class="program-logo">DM</div>
      <h3>BSDMIA</h3>
      <h4>Bachelor of Science in Data Mining and Analytics</h4>
      <p>
        Explore data analysis, data management, and
        information used for decision-making.
      </p>
    </div>

    <div class="program-card">
      <div class="program-logo">LI</div>
      <h3>BLIS</h3>
      <h4>Bachelor of Library and Information Science</h4>
      <p>
        Learn to organize, manage, and provide access
        to information and library resources.
      </p>
    </div>
  </div>
</section>

<!-- Section 3: Faculty and Staff -->
<section id="faculty" class="faculty">
  <div class="section-heading">
    <p>MEET OUR TEAM</p>
    <h2>Faculty and Staff</h2>
    <span>
      Meet the people who support learning and development at CCS.
    </span>
  </div>

  <div class="department">
    <h3>Faculty</h3>

    <div class="faculty-list">
      <div class="faculty-card">
        <img
  class="faculty-photo"
  :src="faculty1"
  alt="Faculty member"
/>
        <h4>Shiela Young</h4>
        <p>Department Head</p>
      </div>

      <div class="faculty-card">
        <img
  class="faculty-photo"
  :src="faculty2"
  alt="Faculty member"
/>
        <h4>Katrina Cruz</h4>
        <p>Associate Professor</p>
      </div>
    </div>
  </div>

  <div class="department">
    <h3>Staff</h3>

    <div class="faculty-list">
      <div class="faculty-card">
        <img
  class="faculty-photo"
  :src="faculty3"
  alt="Faculty member"
/>
        <h4>Arthur Tan</h4>
        <p>Computer Laboratory Coordinator</p>
      </div>
    </div>
  </div>
</section>

<!-- Section 4: Partnerships and Memberships -->
<section id="partnerships" class="partnerships">
  <div class="section-heading">
    <p>OUR CONNECTIONS</p>
    <h2>Partnerships and Memberships</h2>
    <span>
      Working with organizations to support technology,
      education, and professional growth.
    </span>
  </div>

  <div class="partner-list">
    <div class="partner-card">
      <img
  class="partner-logo"
  :src="cisco"
  alt="Partner organization logo"
/>
      
    </div>

    <div class="partner-card">
      <img
  class="partner-logo"
  :src="lenovo"
  alt="Partner organization logo"
/>
      
    </div>

    <div class="partner-card">
      <img
  class="partner-logo"
  :src="oracle"
  alt="Partner organization logo"
/>
     
    </div>
  </div>
</section>

  </div>
</template>
