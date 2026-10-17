
<script setup>
import cisco from '../image/cisco.png'
import lenovo from '../image/lenovo.jpg'
import oracle from '../image/oracle.png'
</script>

<template>
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
          alt="Cisco logo"
        />
      </div>

      <div class="partner-card">
        <img
          class="partner-logo"
          :src="lenovo"
          alt="Lenovo logo"
        />
      </div>

      <div class="partner-card">
        <img
          class="partner-logo"
          :src="oracle"
          alt="Oracle logo"
        />
      </div>
    </div>
  </section>
</template>
