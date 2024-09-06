<template>
  <div class="starting-component" :class="currentTheme">
    <h1 class="banner" :class="{ 'banner-expanded': selectedItem }">Aurelius</h1>
    <div class="content">
      <h4 class="centered-text" data-aos="fade-left" v-if="!selectedItem">
        <span style="font-weight: 400;">Every start is the dawn of success, </span><br/>select what you want to stop:
      </h4>
      
      <div v-if="!selectedItem" class="circular-menu">
        <div class="menu-item" v-for="(item, index) in menuItems" :key="index" @click="selectItem(item)">
          <div class="icon-container" :class="{ 'expanded': selectedItem === item }" :style="{ backgroundImage: `linear-gradient(135deg, ${item.color}, ${item.colorLight})` }">
            <svg v-if="item.name === 'Drug'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 3h12v2H6zm11 3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z"/>
            </svg>
            <svg v-else-if="item.name === 'Sex'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <svg v-else-if="item.name === 'Porn'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            <svg v-else-if="item.name === 'Gambling'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/>
            </svg>
            <svg v-else-if="item.name === 'Alcohol'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm0 5h2v1H5v-1zm15.64-4.46l-.96-.32c-.41-.14-.68-.52-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28c0 .43-.27.81-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm4 16h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-2h7v2z"/>
            </svg>
            <svg v-else-if="item.name === 'Other'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
          <span class="category-name">{{ item.name }}</span>
        </div>
      </div>

      <div v-else class="selected-item-container">
        <button @click="goBack" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <div class="selected-item-content">
          <div class="icon-container expanded" :style="{ backgroundImage: `linear-gradient(135deg, ${selectedItem.color}, ${selectedItem.colorLight})` }">
            <div class="selected-category-content">
              <h2 class="selected-category-name">You have chosen</h2>
              <div class="selected-icon">
                <img v-if="selectedItem.name === 'Drug'" src="../assets/icons/drug-icon.svg" alt="Drug Icon" width="80" height="80">
                <img v-else-if="selectedItem.name === 'Sex'" src="../assets/icons/sex-icon.svg" alt="Sex Icon" width="80" height="80">
                <img v-else-if="selectedItem.name === 'Porn'" src="../assets/icons/porn-icon.svg" alt="Porn Icon" width="80" height="80">
                <img v-else-if="selectedItem.name === 'Gambling'" src="../assets/icons/gambling-icon.svg" alt="Gambling Icon" width="80" height="80">
                <img v-else-if="selectedItem.name === 'Alcohol'" src="../assets/icons/alcohol-icon.svg" alt="Alcohol Icon" width="80" height="80">
                <img v-else-if="selectedItem.name === 'Other'" src="../assets/icons/other-icon.svg" alt="Other Icon" width="80" height="80">
              </div>
              <h2 class="selected-category-name">{{ selectedItem.name }}<br>Addiction</h2>
            </div>
            
          </div>
        </div>
      </div>

      <button v-if="selectedItem" @click="confirmSelection" class="confirm-button">
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'SelectionComponent',
  data() {
    return {
      currentTheme: 'dark-theme', // Default theme
      selectedItem: null,
      menuItems: [
        { name: 'Drug', color: '#4B0082', colorLight: '#8A2BE2' },
        { name: 'Sex', color: '#FF69B4', colorLight: '#FFA6D2' },
        { name: 'Porn', color: '#FF1493', colorLight: '#FF69B4' },
        { name: 'Gambling', color: '#32CD32', colorLight: '#90EE90' },
        { name: 'Alcohol', color: '#FFA500', colorLight: '#FFD700' },
        { name: 'Other', color: '#A9A9A9', colorLight: '#C7C7C7' }
      ]
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
    selectItem(item) {
      this.selectedItem = item;
    },
    goBack() {
      this.selectedItem = null;
    },
    confirmSelection() {
      if (this.selectedItem) {
        localStorage.setItem('selectedAddiction', this.selectedItem.name);
        localStorage.setItem('addictionColor', this.selectedItem.color);
        localStorage.setItem('addictionColorLight', this.selectedItem.colorLight);
        this.$emit('addiction-selected', this.selectedItem.name);
      }
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
  position: relative;
  overflow: hidden;
}

.banner {
  font-size: 2em;
  margin-bottom: 20px;
  color: var(--accent-color);
  position: relative;
  z-index: 10;
  transition: color 0.3s ease;
}

.banner-expanded {
  color: white;
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
  font-family: 'Poppins', sans-serif;
}

.circular-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
  width: 250px;
  gap: 1rem;
  margin-bottom: 20px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.icon-container {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  transition: all 0.5s ease;
  position: relative;
}

.icon-container.expanded {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 0;
  z-index: 5;
  animation: expand 0.5s ease-out forwards;
}

@keyframes expand {
  0% {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 100%;
    height: 100%;
    border-radius: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.icon-container svg {
  width: 30px;
  height: 30px;
  transition: all 0.3s ease;
}

.icon-container:hover svg {
  transform: scale(1.2);
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));
}

.icon-container.expanded svg {
  opacity: 0;
}

.category-name {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-top: 5px;
}

.selected-category-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 10;
}
.selected-category-name {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  text-align: center;
  z-index: 10;
  position: relative;
  white-space: nowrap;
}

.confirm-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--starting-button-bg);
  color: var(--starting-button-text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.confirm-button:hover {
  background-color: var(--starting-button-hover);
}

.back-button {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

.back-button svg {
  width: 30px;
  height: 30px;
}

.selected-icon {
  z-index: 10;
  position: relative;
}

.selected-icon img {
  width: 80px;
  height: 80px;
}
</style>