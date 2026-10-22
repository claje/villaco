
<script setup>
import ccsLogo from '../image/ccs-logo.jpg'
</script>

<template>
  <section id="home" class="home-page">
    
    <div class="hero">
      <div class="hero-content">
        <p class="eyebrow">CENTRAL PHILIPPINE UNIVERSITY</p>

        <h1>
          College of<br />
          <span>Computer Studies</span>
        </h1>

        <p class="hero-description">
          Empowering future technology professionals through
          quality education, innovation, and digital excellence.
        </p>

        <div class="hero-buttons">
          <a href="#programs" class="primary-button">
            Explore Our Programs →
          </a>
          <a href="#about" class="secondary-button">
            Learn About Us
          </a>
        </div>
      </div>

      <div class="hero-image">
        <div class="logo-circle">
          <img :src="ccsLogo" alt="College of Computer Studies Logo" />
        </div>
        <p>LEARN · INNOVATE · EXCEL</p>
      </div>
    </div>

   
    <div class="welcome-section">
      <div class="welcome-heading">
        <p class="eyebrow">WELCOME TO CCS</p>
        <h2>Building Skills for a Digital Future</h2>
      </div>

      <p class="welcome-text">
        The College of Computer Studies prepares students for opportunities
        in the growing field of technology. Through academic learning,
        practical activities, and innovation, students develop the knowledge
        and skills needed to contribute to the digital world.
      </p>
    </div>


  </section>
</template>

<style scoped>
.home-page {
  color: #203047;
  background: #fff;
}

.hero {
  min-height: 490px;
  padding: 70px 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  background: linear-gradient(120deg, #eaf3ff 0%, #f8fbff 60%, #d9e9fc 100%);
}

.hero-content {
  max-width: 650px;
}

.eyebrow {
  color: #2874c8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.hero h1 {
  font-size: clamp(38px, 5vw, 62px);
  line-height: 1.12;
  margin: 20px 0;
  color: #203047;
}

.hero h1 span {
  color: #2874c8;
}

.hero-description {
  max-width: 540px;
  color: #59677a;
  font-size: 17px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.primary-button,
.secondary-button {
  display: inline-block;
  padding: 14px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.2s ease;
}

.primary-button {
  background: #2874c8;
  color: white;
}

.primary-button:hover {
  background: #1b5799;
  transform: translateY(-2px);
}

.secondary-button {
  border: 1px solid #2874c8;
  color: #2874c8;
  background: white;
}

.secondary-button:hover {
  background: #eaf3ff;
}

.hero-image {
  min-width: 230px;
  text-align: center;
}

.logo-circle {
  width: 250px;
  height: 250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 8px solid #ffffffb8;
  border-radius: 50%;
  box-shadow: 0 15px 40px #2030471c;
}

.logo-circle img {
  width: 82%;
  height: 82%;
  object-fit: contain;
  border-radius: 50%;
}

.hero-image > p {
  margin-top: 22px;
  color: #2874c8;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
}

.welcome-section {
  padding: 65px 8%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 45px;
}

.welcome-heading h2 {
  max-width: 450px;
  margin: 12px 0 0;
  font-size: clamp(27px, 3vw, 38px);
  line-height: 1.3;
}

.welcome-text {
  color: #667386;
  font-size: 16px;
  line-height: 1.9;
}



.card-link {
  margin-top: auto;
  padding-top: 12px;
  color: #2874c8;
  font-size: 14px;
  font-weight: 700;
}

@media (max-width: 750px) {
  .hero {
    padding: 55px 7%;
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-image {
    min-width: 0;
  }

  .logo-circle {
    width: 175px;
    height: 175px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .welcome-section {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 50px 7%;
  }

}
</style>
