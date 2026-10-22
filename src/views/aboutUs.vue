
```vue
<template>
  <div class="about-page">
    <section id="about" class="ccs-section">
      <p class="eyebrow">GET TO KNOW US</p>
      <h1>About the College</h1>

      <div class="about-card">
        <h2>Vision</h2>
        <p>
          The College of Computer Studies is founded on the vision of academic
          excellence in Information Technology Education and responsive to the
          needs of the total person and the world.
        </p>
      </div>

      <div class="about-card">
        <h2>Mission</h2>
        <p>
          A College of the future with a mission to educate students with the
          Christian principles and practices of computer studies, preparing
          them to advance studies, careers in software development, computing
          systems technology, information management, and for a lifetime
          learning.
        </p>
      </div>

      <div class="about-card">
        <h2>Quality Policy</h2>
        <p>
          To fulfill the mission and realize the vision of Central Philippine
          University, we commit to consistently provide superior quality
          services by integrating Christian values, academic excellence,
          highest level of professionalism, and quality consideration in every
          aspect of our operations.
        </p>

        <p>
          We maintain a quality management system that complies with
          international quality management system that complies with
          international quality standards. We continually improve to achieve
          global excellence that satisfies the expectations of the university
          community, partner institutions, and the general public.
        </p>
      </div>
    </section>
  </div>
</template>
```

<style scoped>
.about-page {
  color: #222;
  font-family: Arial, sans-serif;
}

.about-hero {
  padding: 80px 8%;
  text-align: center;
  background: #38a758;
}

.eyebrow {
  margin-bottom: 15px;
  color: #174a8b;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 3px;
}

.about-hero h1 {
  margin-bottom: 20px;
  color: #17365d;
  font-size: 42px;
}

.about-hero > p:last-child {
  max-width: 650px;
  margin: 0 auto;
  color: #666;
  line-height: 1.8;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 25px;
}

.about-card {
  padding: 30px;
  background: #fff;
  border: 1px solid #e0e7ef;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 22px #17365d15;
}

.about-icon {
  margin-bottom: 20px;
  font-size: 32px;
}

.about-card h2,
.about-description h2 {
  margin-bottom: 15px;
  color: #17365d;
}

.about-card p,
.about-description p {
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

.about-description {
  padding: 60px 8%;
  text-align: center;
  background: #edf4fc;
}

.about-description p {
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 700px) {
  .about-hero h1 {
    font-size: 32px;
  }

  .about-content {
    grid-template-columns: 1fr;
    padding: 45px 6%;
  }

  .about-hero,
  .about-description {
    padding: 55px 6%;
  }
}
.about-card {
  max-width: 900px;
  margin: 25px auto;
  padding: 25px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.about-card h2 {
  color: #2874c8;
  margin-bottom: 12px;
}

.about-card p {
  color: #59677a;
  line-height: 1.8;
}
</style>
