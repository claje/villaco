
<script setup>
import faculty1 from '../image/faculty1.jpg'
import faculty2 from '../image/faculty2.jpg'
import faculty3 from '../image/faculty3.jpg'
import staff1 from '../image/staff1.jpg'
import staff2 from '../image/staff2.jpg'
import staff3 from '../image/staff3.jpg'
</script>

<template>
  
<!-- Section 3: Faculty & Staff -->
<section id="faculty" class="ccs-section ccs-section-light">
  <div class="ccs-section-heading">
    <p class="ccs-eyebrow">MEET OUR TEAM</p>
    <h2>Faculty &amp; Staff</h2>
    <p>
      Meet the people who support our students' learning and development.
    </p>
  </div>

  <div class="ccs-team-grid">
    <!-- Faculty -->
    <div class="ccs-team-panel">
      <h3>👥 Faculty</h3>
      <p>Our dedicated educators and academic professionals.</p>

      <div class="ccs-member-grid">
        <article
          v-for="member in faculty"
          :key="member.name"
          class="ccs-faculty-card"
        >
          <img :src="member.image" :alt="member.name" />
          <h4>{{ member.name }}</h4>
          <p>{{ member.role }}</p>
          <p>{{ member.department }}</p>
        </article>
      </div>
    </div>

    <!-- Staff -->
    <div class="ccs-team-panel">
      <h3>👥 Staff</h3>
      <p>Our support team helps the college run smoothly.</p>

      <div class="ccs-member-grid">
        <article
          v-for="member in staff"
          :key="member.name"
          class="ccs-faculty-card"
        >
          <img :src="member.image" :alt="member.name" />
          <h4>{{ member.name }}</h4>
          <p>{{ member.role }}</p>
          <p>{{ member.department }}</p>
        </article>
      </div>
    </div>
  </div>
</section>

</template>
