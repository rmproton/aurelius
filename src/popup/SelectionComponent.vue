<template>
  <div class="starting-component" :class="currentTheme">
    <button v-if="storedAddictions && storedAddictions.length > 0" @click="goBackToPopup" class="back-arrow" :class="currentTheme">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="currentTheme === 'dark-theme' ? '#ffffff' : '#000000'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </button>
    <h1 class="banner" :class="{ 'banner-expanded': selectedItems.length > 0 }">Aurelius</h1>
    <div class="content">
      <h4 class="centered-text" data-aos="fade-left" v-if="selectedItems.length === 0">
        <span style="font-weight: 400;">Every start is the dawn of success, </span><br/>select up to three addictions you want to stop:
      </h4>
      
      <div v-if="selectedItems.length === 0" class="circular-menu">
        <div v-for="(item, index) in availableMenuItems" :key="index" class="menu-item" @click="selectItem(item)">
          <div class="icon-container" :class="{ 'expanded': selectedItems.includes(item) }" :style="{ backgroundImage: `linear-gradient(135deg, ${item.color}, ${item.colorLight})` }">
            <svg v-if="item.name === 'Drugs'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
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

      <div v-else class="selected-items-container">
        <button @click="goBack" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <div class="selected-items-content">
          <div v-for="(item, index) in selectedItems" :key="index" class="selected-item">
            <div class="icon-container expanded" :style="{ backgroundImage: `linear-gradient(135deg, ${item.color}, ${item.colorLight})` }">
              <div class="selected-category-content">
                <h2 class="selected-category-name">{{ item.name }} Addiction</h2>
                <div class="selected-icon">
                  <img :src="getIconSrc(item.name)" :alt="`${item.name} Icon`" width="60" height="60">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button v-if="selectedItems.length > 0" @click="confirmSelection" class="confirm-button">
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
      selectedItems: [],
      storedAddictions: JSON.parse(localStorage.getItem('selectedAddictions') || '[]'),
      menuItems: [
        { name: 'Drugs', color: '#4B0082', colorLight: '#8A2BE2' },
        { name: 'Sex', color: '#FF69B4', colorLight: '#FFA6D2' },
        { name: 'Porn', color: '#FF1493', colorLight: '#FF69B4' },
        { name: 'Gambling', color: '#32CD32', colorLight: '#90EE90' },
        { name: 'Alcohol', color: '#FFA500', colorLight: '#FFD700' },
        { name: 'Other', color: '#A9A9A9', colorLight: '#C7C7C7' }
      ]
    }
  },
  computed: {
    availableMenuItems() {
      const existingAddictions = JSON.parse(localStorage.getItem('selectedAddictions') || '[]');
      return this.menuItems.filter(item => !existingAddictions.some(addiction => addiction.addiction === item.name));
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
      if (this.selectedItems.includes(item)) {
        this.selectedItems = this.selectedItems.filter(i => i !== item);
      } else if (this.selectedItems.length < 3) {
        this.selectedItems.push(item);
      } else {
        // Optionally, you can show a message to the user that they can't add more than 3 items
        console.log("You can't add more than 3 items.");
        // Or you could emit an event to show a notification in the parent component
        // this.$emit('max-items-reached');
      }
    },
    goBack() {
      this.selectedItems = [];
    },
    goBackToPopup() {
        this.$emit('addiction-selected');
    },
    confirmSelection() {
      if (this.selectedItems.length > 0) {
        const existingAddictions = JSON.parse(localStorage.getItem('selectedAddictions') || '[]');
        const newAddictions = this.selectedItems.map((item, index) => ({
          addiction: item.name,
          days: 1,
          addictionColor: item.color,
          position: index,
          dateCreated: new Date().toISOString()
        }));
        // Ensure the total number of addictions doesn't exceed 3
        const totalAddictions = existingAddictions.length + newAddictions.length;
        if (totalAddictions > 3) {
          const availableSlots = Math.max(0, 3 - existingAddictions.length);
          newAddictions.splice(availableSlots);
        }
        
        const updatedAddictions = [...existingAddictions, ...newAddictions].slice(0, 3);
        
        localStorage.setItem('selectedAddictions', JSON.stringify(updatedAddictions));
        
        // Set hasSelectedAddiction to true if at least one addiction is selected
        localStorage.setItem('hasSelectedAddiction', 'true');
        
        this.$emit('addiction-selected');
      }
    },
    loadTheme() {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        this.currentTheme = storedTheme;
      }
    },
    getIconSrc(name) {
      return `../assets/icons/${name.toLowerCase()}-icon.svg`;
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


.back-arrow {
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  transition: transform 0.3s ease;
}

.back-arrow:hover {
  transform: scale(1.1);
}
</style>