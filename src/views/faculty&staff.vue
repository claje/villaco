
<script setup>
import deanPhoto from '../image/dean.png'
import dh from '../image/dh.jpg'
import dh2 from '../image/dh2.jpg'
import dh3 from '../image/dh3.jpg'
import fac1 from '../image/fac1.jpg'
import fac2 from '../image/fac2.jpg'
import fac3 from '../image/fac3.jpg'
import staff1 from '../image/staff1.jpg'
import staff2 from '../image/staff2.jpg'

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

        </article>
      </div>
    </div>
  </div>
</section>

</template>
