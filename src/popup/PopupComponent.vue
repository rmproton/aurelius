<template>
  <div v-if="!hasStartedJourney">
    <StartingComponent @start-journey="startJourney" />
  </div>
  <div v-else-if="!hasSelectedAddiction">
    <SelectionComponent @addiction-selected="onAddictionSelected" />
  </div>
  <div v-else class="popup" :class="currentTheme" >
    <h1 class="banner">Aurelius</h1>
     <div class="content">

      <div class="count-container" ref="countContainer">
      <div v-for="(addiction) in selectedAddictions.sort((a, b) => a.position - b.position)" 
           :key="addiction.addiction" 
           class="addiction-tag" 
           :style="{ backgroundColor: addiction.addictionColor, transform: addiction === draggedAddiction ? 'scale(1.05)' : 'none' }"
           :class="{ 'dragging': addiction === draggedAddiction }"
           :data-addiction="addiction.addiction"
           draggable="true"
           @dragstart="dragStart($event, addiction)"
           @dragover.prevent
           @dragenter.prevent="dragEnter($event, addiction)"
           @dragleave="dragLeave($event)"
           @drop="drop($event, addiction)">
        <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
          <img :src="getAddictionIcon(addiction.addiction)" :alt="`${addiction.addiction} icon`" class="addiction-icon">
          <span style="font-family: 'Poppins', sans-serif;"> {{ addiction.addiction }}</span>
        </div>
        <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; width: 100%; ">
          <div v-if="showCount" class="count-text" aria-live="polite" style="display: flex; align-items: center; font-family: 'Poppins', sans-serif;">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
           <span style="font-size: 0.9rem;">  {{ Math.floor((new Date() - new Date(addiction.dateCreated)) / (1000 * 60 * 60 * 24)) }}
            {{ Math.floor((new Date() - new Date(addiction.dateCreated)) / (1000 * 60 * 60 * 24)) === 1 ? 'day' : 'days' }} </span>
          </div>

          <button @click.stop="toggleCountControls(addiction.addiction)" class="count-button" :aria-expanded="showCountControls[addiction.addiction]" :aria-controls="`count-controls-${addiction.addiction}`">
            <template v-if="showCountControls[addiction.addiction]">
              <div @click.stop="closeCountControls(addiction.addiction)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </template>
            <template v-else>
              <span class="ellipsis" :style="{ color: currentTheme === 'light-theme' ? '#ffffff' : '#ffffff', userSelect: 'none' }">...</span>
            </template>
          </button>
        </div>
        <transition name="fade">
            <div v-if="showCountControls[addiction.addiction]" class="modal-overlay" @click.self="closeCountControls(addiction.addiction)" aria-modal="true" role="dialog" tabindex="0" style="z-index: 999999;">
              <div class="modal">
                <div class="modal-header">
                  <h3 :style="{ color: currentTheme === 'light-theme' ? '#333333' : '#ffffff' }">What do you want to do ?</h3>
                </div>
                <div class="addiction-tag" 
                    :style="{ backgroundColor: addiction.addictionColor }"
                    :data-addiction="addiction.addiction">
                  <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 0.2rem;">
                    <img :src="getAddictionIcon(addiction.addiction)" :alt="`${addiction.addiction} icon`" class="addiction-icon">
                    <span style="font-family: 'Poppins', sans-serif; "> {{ addiction.addiction }}  </span>
                  </div>
                  <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; width: 100%; margin-left: 2rem;">
                    <div class="count-text" aria-live="polite" style="display: flex; align-items: center;  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {{ addiction.days }}
                      {{ addiction.days === 1 ? 'day' : 'days' }} 
                    </div>
                  </div>
                </div>
                <div class="modal-buttons">
                  <button @click="openResetStreakModal(addiction.addiction)" class="reset-button">Restart streak</button>
                  <button @click="openSetStreakModal(addiction.addiction)" class="set-streak-button">Set streak day</button>
                </div>
              </div>
            </div>
          </transition>
        <svg v-if="draggedAddiction && draggedAddiction !== addiction" class="switch-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <polyline points="7 23 3 19 7 15"></polyline>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>
      </div>
     

      <div class="add-button-container" v-if="selectedAddictions.length < 3">
        <button class="add-button" aria-label="Add" title="Add" @click="goToSelectionComponent">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>


    </div>
  
      <div class="quote-container">
          <div class="quote-bubble">
            <p class="quote-text"> {{ quoteText }} </p>
          </div>
          <p class="quote-author">- {{ quoteAuthor }}</p>
      </div>
    </div>
   
    <div class="support-icon" @click="goToOptions" @keydown.space.prevent="goToOptions" title="Online Support Guides" aria-label="Online Support Guides" tabindex="0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    </div>
    <div class="theme-switcher" @click="toggleTheme" @keydown.space.prevent="toggleTheme" title="Toggle Theme" aria-label="Toggle Theme" tabindex="0">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>

    </div>
 
  </div>
</template>
<script>
import quotes from '../quotes/quotes.json';
import './popup.css';
import StartingComponent from './StartingComponent.vue';
import SelectionComponent from './SelectionComponent.vue';
import drugIcon from '../assets/icons/drugs-icon.svg'
import sexIcon from '../assets/icons/sex-icon.svg'
import pornIcon from '../assets/icons/porn-icon.svg'
import gamblingIcon from '../assets/icons/gambling-icon.svg'
import alcoholIcon from '../assets/icons/alcohol-icon.svg'
import otherIcon from '../assets/icons/other-icon.svg'

export default {
  name: "PopupComponent",
  components: {
    StartingComponent,
    SelectionComponent
  },
  data() {
    return {
      hasStartedJourney: false,
      hasSelectedAddiction: false,
      selectedAddictions: [],
      quoteText: '',
      version: '',
      quoteAuthor: '',
      count: 0,
      showCountControls: [],
      showCount: false,
      lastOpenedDate: null,
      motivations: [
        "Keep going, you're great!",
        "You're making excellent progress!",
        "Stay strong, you've got this!",
        "Your dedication is inspiring!",
        "Every day is a new opportunity!",
        "You're doing an amazing job!",
        "Keep up the fantastic work!",
        "Your persistence is admirable!",
        "Believe in yourself, you're capable of greatness!",
        "You're on the right track, keep pushing!"
      ],
      currentTheme: 'dark-theme', // Default theme
      themes: ['dark-theme', 'light-theme', 'ocean-theme', 'forest-theme'], // Available themes
      showSetStreakModal: false,
      showResetStreakModal: false,
      newStreakDay: 1,
      draggedAddiction: null
    }
  },
  mounted(){
    this.fetchVersion(); 
  },
  created() {
    this.checkJourneyStarted();
    this.hasSelectedAddictionOnce()
    if (this.hasStartedJourney && this.hasSelectedAddiction) {
      this.loadCount();
      this.setDailyQuote()
      this.checkLastOpened();
      this.loadTheme();
      this.loadSelectedAddiction();
      setTimeout(() => {
        this.showCount = true;
      }, 100);
    }
  },
  methods: {
    async fetchVersion() {
      try {
        const response = await fetch('/manifest.json');
        const manifest = await response.json();
        this.version = manifest.version;
      } catch (error) {
        console.error('Failed to fetch version:', error);
      }
    },
    checkJourneyStarted() {
      const journeyStarted = localStorage.getItem('journeyStarted');
      this.hasStartedJourney = journeyStarted === "true";
    },
    hasSelectedAddictionOnce(){
      const addictionSelected = localStorage.getItem('hasSelectedAddiction');
      this.hasSelectedAddiction = addictionSelected === 'true'  
    },
    startJourney() {
      this.hasStartedJourney = true;
      localStorage.setItem('journeyStarted', 'true');
    },
    onAddictionSelected() {
      this.hasSelectedAddiction = localStorage.getItem("hasSelectedAddiction")
      this.loadSelectedAddiction()
      this.setDailyQuote();
      this.loadCount();
      this.checkLastOpened();
      this.loadTheme();
      setTimeout(() => {
        this.showCount = true;
      }, 100);
    },
    loadSelectedAddiction() {
      const storeAddictions = localStorage.getItem('selectedAddictions');
      this.selectedAddictions = JSON.parse(storeAddictions) || [];
      this.selectedAddictions.forEach((addiction, index) => {
        addiction.position = index;
      });
    },
    getAddictionColor() {
      const colors = {
        'Drugs': '#4B0082',
        'Sex': '#FF69B4',
        'Porn': '#FF1493',
        'Gambling': '#32CD32',
        'Alcohol': '#FFA500',
        'Other': '#A9A9A9'
      };
      return colors[this.selectedAddiction] || '#A9A9A9';
    },
    getAddictionIcon(icon) {
      const icons = {
        'Drugs': drugIcon,
        'Sex': sexIcon,
        'Porn': pornIcon,
        'Gambling': gamblingIcon,
        'Alcohol': alcoholIcon,
        'Other': otherIcon
      };
      return icons[icon];
    },
    dragStart(event, addiction) {
      this.draggedAddiction = addiction;
      event.dataTransfer.setData('text/plain', addiction.addiction);
    },
    dragEnter(event, targetAddiction) {
      if (targetAddiction !== this.draggedAddiction) {
        const draggedIndex = this.selectedAddictions.findIndex(a => a === this.draggedAddiction);
        const targetIndex = this.selectedAddictions.findIndex(a => a === targetAddiction);
        
        if (draggedIndex < targetIndex) {
          event.target.closest('.addiction-tag').classList.add('drag-over-bottom');
        } else {
          event.target.closest('.addiction-tag').classList.add('drag-over-top');
        }
      }
    },
    dragLeave(event) {
      event.target.closest('.addiction-tag').classList.remove('drag-over-top', 'drag-over-bottom');
    },
    drop(event, targetAddiction) {
      event.target.closest('.addiction-tag').classList.remove('drag-over-top', 'drag-over-bottom');
      if (this.draggedAddiction === targetAddiction) return;

      const draggedIndex = this.selectedAddictions.findIndex(a => a === this.draggedAddiction);
      const targetIndex = this.selectedAddictions.findIndex(a => a === targetAddiction);

      if (draggedIndex !== -1 && targetIndex !== -1) {
        // Remove the dragged addiction from its original position
        this.selectedAddictions.splice(draggedIndex, 1);
        // Insert it at the new position
        this.selectedAddictions.splice(targetIndex, 0, this.draggedAddiction);

        // Update positions
        this.selectedAddictions.forEach((addiction, index) => {
          addiction.position = index;
        });

        // Save the new order to localStorage
        localStorage.setItem('selectedAddictions', JSON.stringify(this.selectedAddictions));
      }

      this.draggedAddiction = null;
    },
    setDailyQuote() {
      const today = new Date().toISOString().split('T')[0];
      const storedDate = localStorage.getItem('quoteDate');
      const storedQuoteText = localStorage.getItem('dailyQuoteText');
      const storedQuoteAuthor = localStorage.getItem('dailyQuoteAuthor');

      if (storedDate === today && storedQuoteText && storedQuoteAuthor) {
        this.quoteText = storedQuoteText;
        this.quoteAuthor = storedQuoteAuthor;
      } else {
        const todayQuotes = quotes.filter(quote => quote.date && quote.date.startsWith(today));
        let selectedQuote;
        
        if (todayQuotes.length > 0) {
          selectedQuote = todayQuotes[Math.floor(Math.random() * todayQuotes.length)];
        } else {
          selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        }

        this.quoteText = selectedQuote.quote;
        this.quoteAuthor = selectedQuote.author;
        localStorage.setItem('quoteDate', today);
        localStorage.setItem('dailyQuoteText', this.quoteText);
        localStorage.setItem('dailyQuoteAuthor', this.quoteAuthor);
        if (this.hasSelectedAddiction) {
          this.incrementCount();
        }
      }
    },
    loadCount() {
      if (this.hasSelectedAddiction) {
        const storedCount = localStorage.getItem('count');
        this.count = storedCount ? parseInt(storedCount) : 0;
      }
    },
    incrementCount() {
      if (this.hasSelectedAddiction) {
        this.count++;
        localStorage.setItem('count', this.count.toString());
      }
    },
    resetCount() {
      if (this.hasSelectedAddiction) {
        this.count = 1;
        localStorage.setItem('count', '1');
      }
    },
    toggleCountControls(addiction) {
      // Set all controls to false first
      Object.keys(this.showCountControls).forEach(key => {
        this.showCountControls[key] = false;
      });
      // Then set the selected addiction's control to true
      this.showCountControls[addiction] = true;
    },
    closeCountControls(addiction) {
      this.showCountControls[addiction] = false;
    },
    checkLastOpened() {
      if (this.hasSelectedAddiction) {
        const today = new Date().toISOString().split('T')[0];
        this.lastOpenedDate = localStorage.getItem('lastOpenedDate');
        
        if (this.lastOpenedDate !== today) {
          this.showNotification();
        }
        
        localStorage.setItem('lastOpenedDate', today);
      }
    },
    showNotification() {
      if (this.hasSelectedAddiction && 'Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            const motivationIndex = this.count % this.motivations.length;
            const motivation = this.motivations[motivationIndex];
            new Notification('Aurelius - Fight the urge', {
              body: `Day ${this.count}, \nDon't forget to check today's quote! \n ${motivation}`,
              icon: '/icons/icon48.png'
            });
          }  
        });
      }
    },
    goToOptions() {
    if (chrome && chrome.runtime && chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else if (chrome && chrome.runtime && chrome.runtime.getURL) {
      window.open(chrome.runtime.getURL('options.html'));
    } else {
      console.log('Development mode: Opening mock options page');
      // For development, open a local options page
      window.open('/options.html');
      }
    },
    toggleTheme() {
      const currentThemeIndex = this.themes.indexOf(this.currentTheme);
      const nextThemeIndex = (currentThemeIndex + 1) % this.themes.length;
      this.currentTheme = this.themes[nextThemeIndex];
      localStorage.setItem('theme', this.currentTheme);
    },
    loadTheme() {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme && this.themes.includes(storedTheme)) {
        this.currentTheme = storedTheme;
      } else {
        this.currentTheme = 'dark-theme'; // Default theme if not stored or invalid
      }
    },
    openSetStreakModal() {
      this.showSetStreakModal = true;
    },
    closeSetStreakModal() {
      this.showSetStreakModal = false;
    },
    setStreakDay() {
      if (this.hasSelectedAddiction) {
        this.count = parseInt(this.newStreakDay);
        localStorage.setItem('count', this.count.toString());
      }
      this.closeSetStreakModal();
    },
    openResetStreakModal(addiction) {
      this.showResetStreakModal[addiction] = true;
    },
    closeResetStreakModal(addiction) {
      this.showResetStreakModal[addiction] = false;
    },
    confirmResetStreak() {
      this.resetCount();
      this.closeResetStreakModal();
    },
    goToSelectionComponent() {
      this.hasSelectedAddiction = false;
      localStorage.setItem('addictionSelected', 'false');
      localStorage.removeItem('selectedAddiction');
    }
  }
}
</script>
<style scoped>

.add-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.add-button {
  background-color: var(--text-color);
  color: var(--bg-color);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.add-button:hover {
  background-color: var(--accent-color);
  transform: scale(1.1);
}

.add-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--accent-color);
}

.add-button svg {
  width: 24px;
  height: 24px;
}

.count-container {
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
}

.addiction-tag {
  user-select: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
 }

.addiction-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.modal-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
 

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* High z-index to ensure it's above everything */
}

.modal {
   border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10000; /* Even higher z-index for the modal content */
}
</style>
