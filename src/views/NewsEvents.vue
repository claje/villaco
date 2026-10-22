<script setup>
import news1 from '../image/ne1.jpg'
import news2 from '../image/ne2.jpg'
import news3 from '../image/ne3.jpg'
</script>

<template>
  <div class="news-page">
    <section id="news-events" class="news-section">
      <div class="section-heading">
        <p class="eyebrow">STAY UPDATED</p>
        <h2>Tournament &amp; Events</h2>
        <p>
          Celebrating the achievements, talents, and innovations
          of the College of Computer Studies community.
        </p>
      </div>

      <div class="news-grid">
        <!-- News 1 -->
        <article class="news-card">
          <div class="news-image">
            <img :src="news1" alt="Nathan Zech C. Pugales" />
          </div>

          <div class="news-content">
            <span class="category">Tournament Update</span>
            <h3>Victory for Nathan Zech C. Pugales</h3>
            <p>
              A well-earned victory for Nathan Zech C. Pugales,
              who emerged as the CHAMPION of the MC3D Prime
              HO Cebu Grand Opening LAN Tournament - TEKKEN
              Tournament!
            </p>
            <span class="date">2026</span>
          </div>
        </article>

        <!-- News 2 -->
        <article class="news-card">
          <div class="news-image">
            <img :src="news2" alt="Enactus Philippines Top 60 team" />
          </div>

          <div class="news-content">
            <span class="category">Student Achievement</span>
            <h3>A PLACE AMONG THE TOP 60!</h3>
            <p>
              Making their mark on the national stage, BS Computer
              Science 3 students Abegail Lentija, Fred Allen Dimo,
              and John Reynelle Delfin have secured a spot among
              the Top 60 teams out of 200+ participants in the
              Enactus Philippines National Competition 2026 -
              Early-Stage Project Track!
            </p>
            <p>
              With the guidance of their adviser, Ma'am Roda
              Katrina C. Eregia, the team continues to demonstrate
              the potential of young innovators to turn ideas into
              meaningful impact.
            </p>
            <span class="date">October 2, 2026</span>
          </div>
        </article>

        <!-- News 3 -->
        <article class="news-card">
          <div class="news-image">
            <img :src="news3" alt="CCS Warriors 3 Peat Champs" />
          </div>

          <div class="news-content">
            <span class="category">University Week 2026</span>
            <h3>3 Peat Champs</h3>
            <p>
              The CCS Warriors brought the heat to the streets
              of Central Philippine University on October 2, 2026,
              during the University Week and Centralian Festival
              2026 Street Dance Competition, delivering a
              performance packed with energy, creativity,
              and teamwork!
            </p>
            <span class="date">October 2, 2026</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-page {
  font-family: Arial, sans-serif;
  color: #203047;
  background: #f5f8fc;
}

.news-section {
  padding: 85px 8%;
  scroll-margin-top: 100px;
}

.section-heading {
  max-width: 700px;
  text-align: center;
  margin: 0 auto 45px;
}

.eyebrow {
  color: #2874c8;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.section-heading h2 {
  color: #17365d;
  font-size: 34px;
  margin: 10px 0 15px;
}

.section-heading > p:last-child {
  color: #667386;
  line-height: 1.8;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;
}

.news-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #ffffff;
  border: 1px solid #e0e7ef;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 5px 22px #2030470d;
  transition: transform 0.2s, box-shadow 0.2s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px #20304718;
}

.news-image {
  width: 100%;
  height: 210px;
  overflow: hidden;
  background: #eaf3ff;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.news-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px;
}

.category {
  color: #2874c8;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.news-content h3 {
  color: #17365d;
  font-size: 20px;
  line-height: 1.45;
  margin: 0 0 14px;
}

.news-content p {
  color: #667386;
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 14px;
}

.date {
  margin-top: auto;
  padding-top: 15px;
  color: #2874c8;
  font-size: 12px;
  font-weight: bold;
}

@media (max-width: 1000px) {
  .news-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .news-section {
    padding: 60px 6%;
  }

  .section-heading h2 {
    font-size: 28px;
  }

  .news-grid {
    grid-template-columns: 1fr;
  }

  .news-image {
    height: 220px;
  }
}
</style>
