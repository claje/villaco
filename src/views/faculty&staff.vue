```vue
<script setup>
import deanPhoto from '../image/dean.png'
import dh from '../image/dh.jpg'
import dh2 from '../image/dh2.jpg'
import dh3 from '../image/dh3.jpg'
import fac1 from '../image/fac1.jpg'
import fac2 from '../image/fac2.jpg'
import fac3 from '../image/fac3.jpg'
import fac4 from '../image/fac4.jpg'
import fac5 from '../image/fac5.jpg'
import staff1 from '../image/staff1.jpg'
import staff2 from '../image/staff2.jpg'
import staff3 from '../image/staff3.png'
import staff4 from '../image/staff4.jpg'

const dean = [
  {
    name: 'Ma. Christina Quijano',
    role: 'Dean',
    image: deanPhoto
  }
]

const departmentHeadandCoordinators = [
  { name: 'Rea Balontong', role: 'Department Head', image: dh },
  { name: 'Marjee Rose Parreno', role: 'Program Coordinator', image: dh2 },
  { name: 'Rhea Joy Fernandez', role: 'Program Coordinator', image: dh3 },
]

const faculty = [
  { name: 'Leo Paulo Beldia', role: 'Faculty ', image: fac1 },
  { name: 'Rodolfo Eregia', role: 'Faculty ', image: fac2 },
  { name: 'Gleason Baylon', role: 'Faculty ', image: fac4 },
  { name: 'Ma. Shiela Sapul', role: 'Faculty ', image: fac3 },
  { name: 'Antonio Montano', role: 'Faculty ', image: fac5 },
]

const staff = [
  { name: 'Chrislyn Castano', role: 'Secretary', image: staff2 },
  { name: 'A.M.P Latter Taasan', role: 'Computer Technician', image: staff1 },
  { name: 'Junyee Pacheco', role: 'Computer Technician', image: staff3 },
  { name:'Pedro Peter Rhys Cambonero', role:'Laboratory Coordinator', image: staff4}
]
</script>

<template>
  <section id="faculty" class="ccs-section ccs-section-light">
    <div class="ccs-section-heading">
      <p class="ccs-eyebrow">MEET OUR TEAM</p>
      <h2>Faculty &amp; Staff</h2>
      <p>
        Meet the people who support our students' learning and development.
      </p>
    </div>


    <div class="team-panel">
      <h3>Dean</h3>
      <div class="member-grid single">
        <article v-for="person in dean" :key="person.name" class="member-card">
          <img :src="person.image" :alt="person.name" />
          <h4>{{ person.name }}</h4>
          <p>{{ person.role }}</p>
        </article>
      </div>
    </div>


<div class="team-panel">
  <h3>Department Head &amp; Coordinators</h3>

  <div class="member-grid four-members">
    <article
      v-for="person in departmentHeadandCoordinators"
      :key="person.name"
      class="member-card"
    >
      <img :src="person.image" :alt="person.name" />
      <h4>{{ person.name }}</h4>
      <p>{{ person.role }}</p>
    </article>
  </div>
</div>

    <div class="team-panel">
      <h3>Faculty Members</h3>
      <div class="member-grid">
        <article v-for="person in faculty" :key="person.name" class="member-card">
          <img :src="person.image" :alt="person.name" />
          <h4>{{ person.name }}</h4>
          <p>{{ person.role }}</p>
        </article>
      </div>
    </div>


    <div class="team-panel">
      <h3>Staff</h3>
      <div class="member-grid">
        <article v-for="person in staff" :key="person.name" class="member-card">
          <img :src="person.image" :alt="person.name" />
          <h4>{{ person.name }}</h4>
          <p>{{ person.role }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-panel {
  max-width: 1100px;
  margin: 30px auto;
  padding: 20px;
}

.team-panel h3 {
  margin-bottom: 22px;
  text-align: center;
  color: #203047;
}

.member-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.member-grid.single {
  display: grid;
  grid-template-columns: minmax(220px, 280px);
  justify-content: center;
  width: 100%;
}

.member-card {
  padding: 20px;
  text-align: center;
  background: white;
  border: 1px solid #e5edf7;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(32, 48, 71, 0.08);
}

.member-card img {
  width: 150px;
  height: 150px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.member-card h4 {
  margin: 14px 0 6px;
  color: #203047;
}

.member-card p {
  margin: 0;
  color: #667386;
  font-size: 14px;
}

@media (max-width: 700px) {
  .member-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .member-grid.single {
    grid-template-columns: minmax(0, 280px);
  }
}

@media (max-width: 450px) {
  .member-grid {
    grid-template-columns: 1fr;
  }
}
.four-members {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

@media (max-width: 700px) {
  .four-members {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 450px) {
  .four-members {
    grid-template-columns: 1fr;
  }
}
</style>
