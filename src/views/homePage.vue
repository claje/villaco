
<script setup>
import ccsLogo from '../image/ccs-logo.jpg'
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <p class="welcome">WELCOME TO CCS</p>

      <h1>College of Computer Studies</h1>

      <p>
        Discover technology, develop your skills, and prepare
        for your future in the digital world.
      </p>

      <RouterLink to="/program" class="hero-button">
        Explore Programs
      </RouterLink>
    </div>

    <div class="hero-image">
      <img :src="ccsLogo" alt="College of Computer Studies Logo" />
    </div>
  </section>
</template>
