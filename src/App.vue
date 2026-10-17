
<script setup>
import ccsLogo from './image/ccs-logo.jpg'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <div>
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
        @click="menuOpen = !menuOpen"
      >
        ☰
      </button>

      <div class="nav-links" :class="{ active: menuOpen }">
        <RouterLink to="/" @click="menuOpen = false">
          Home
        </RouterLink>

        <RouterLink to="/program" @click="menuOpen = false">
          Programs
        </RouterLink>

        <RouterLink to="/faculty" @click="menuOpen = false">
          Faculty &amp; Staff
        </RouterLink>

        <RouterLink to="/partnerships" @click="menuOpen = false">
          Partnerships
        </RouterLink>
      </div>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>
