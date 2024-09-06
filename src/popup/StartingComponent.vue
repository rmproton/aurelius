<template>
  <div class="starting-component" :class="currentTheme">
    <h1 class="banner">Aurelius</h1>
    <div class="content">
      <h2 class="centered-text" data-aos="fade-left">
        Ready to start your journey and fight the urge?
      </h2>
      <div class="timer-icon" data-aos="fade-left">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      </div>
      <p class="description-text" data-aos="fade-right">
        Aurelius is a time tracker to help you remember everyday how long you have made it into your recovery
      </p>
      <button
        class="start-button"
        @click="startJourney"
        data-aos="fade-up"
      >
        Start my journey
      </button>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'StartingComponent',
  data() {
    return {
      currentTheme: 'dark-theme' // Default theme
    }
  },
  mounted() {
    this.loadTheme();
    AOS.init({
      duration: 1000,
      once: true
    });
  },
  methods: {
    startJourney() {
      this.$emit('start-journey');
    },
    loadTheme() {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.currentTheme = storedTheme;
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.starting-component {
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--starting-bg);
  color: var(--starting-text);
}

.banner {
  font-size: 2em;
  margin-bottom: 20px;
  color: var(--accent-color);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.centered-text {
  margin-bottom: 1rem;
  color: var(--starting-text);
}

.description-text {
  margin-bottom: 2rem;
  color: var(--starting-text);
  font-size: 0.9em;
  max-width: 80%;
  font-family: 'Poppins', sans-serif;
}

.start-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--starting-button-bg);
  color: var(--starting-button-text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: var(--starting-button-hover);
}
</style>
