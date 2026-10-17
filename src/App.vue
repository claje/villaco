
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ccsLogo from './image/ccs-logo.jpg'

const menuOpen = ref(false)
</script>

<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar">
      <RouterLink
        to="/"
        class="logo"
        @click="menuOpen = false"
      >
        <img :src="ccsLogo" alt="CCS Logo" />
      </RouterLink>

      <button
        class="menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

      <div
        class="nav-links"
        :class="{ active: menuOpen }"
      >
        <RouterLink
          to="/"
          @click="menuOpen = false"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/program"
          @click="menuOpen = false"
        >
          Programs
        </RouterLink>

        <RouterLink
          to="/faculty"
          @click="menuOpen = false"
        >
          Faculty &amp; Staff
        </RouterLink>

        <RouterLink
          to="/partnerships"
          @click="menuOpen = false"
        >
          Partnerships
        </RouterLink>
      </div>
    </nav>

    <!-- Display the selected page -->
    <main>
      <RouterView />
    </main>
  </div>
</template>
