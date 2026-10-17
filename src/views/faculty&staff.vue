
<script setup>
import faculty1 from '../image/faculty1.jpg'
import faculty2 from '../image/faculty2.jpg'
import faculty3 from '../image/faculty3.jpg'
</script>

<template>
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
            alt="Staff member"
          />
          <h4>Arthur Tan</h4>
          <p>Computer Laboratory Coordinator</p>
        </div>
      </div>
    </div>
  </section>
</template>
