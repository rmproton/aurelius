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
        >
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
           
                <div class="addiction-tag" 
                    :style="{ backgroundColor: addiction.addictionColor }"
                    :data-addiction="addiction.addiction">
                  <div style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 0.2rem;">
                    <img :src="getAddictionIcon(addiction.addiction)" :alt="`${addiction.addiction} icon`" class="addiction-icon">
                    <span style="font-family: 'Poppins', sans-serif; "> {{ addiction.addiction }}  </span>
                  </div>
                  <div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; width: 100%; margin-left: 2rem;">
                    <div class="count-text" aria-live="polite" style="display: flex; align-items: center; font-size: 0.9rem; ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      {{ formatDuration(new Date() - new Date(addiction.dateCreated)) }}
                    </div>
                  </div>
                </div>
                <transition name="fade">
                  <div v-if="inputStreakVisible[addiction.addiction]" class="set-streak-container" style="margin-top: 1rem;">
                    <input 
                      v-model="streakDays"
                      type="number" 
                      min="0" 
                      class="streak-input" 
                      placeholder="Enter days"
                      aria-label="Enter number of days for streak"
                    >
                    <button 
                      @click="setStreakDay(addiction.addiction)" 
                      class="set-streak-button-validate"
                      :disabled="!streakDays || streakDays < 0"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    </button>
                    <button 
                      @click="inputStreakVisible[addiction.addiction] = false" 
                      class="cancel-streak-button"
                      aria-label="Cancel setting streak"
                      style="background-color: #FFB3BA; color: #FFFFFF; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </transition>

                
                <div class="modal-buttons">
                  <button @click="openResetStreakModal(addiction.addiction)" class="reset-button">Restart streak</button>
                  <button @click="showInputStreak(addiction.addiction)" class="set-streak-button">Set streak day</button>
                  <button @click="openDeleteAddictionModal(addiction.addiction)" class="delete-button">Delete addiction</button>
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
  
 
      <div class="quote-container"    >
          <div class="quote-bubble" data-aos="fade-bottom" data-aos-duration="800"      data-aos-easing="linear"   >
            <p class="quote-text"> {{ quoteText }} </p>
          </div>
          <p class="quote-author" data-aos="fade-left" data-aos-duration="800"      data-aos-easing="linear"  >- {{ quoteAuthor }}</p>
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
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      streakDays: undefined,
      inputStreakVisible: [],
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
    AOS.init();
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
    openResetStreakModal(addiction) {
      if (confirm(`Are you sure you want to reset the streak for ${addiction}?`)) {
        const selectedAddictions = JSON.parse(localStorage.getItem('selectedAddictions') || '[]');
        const index = selectedAddictions.findIndex(item => item.addiction === addiction);
        if (index !== -1) {
          selectedAddictions[index].dateCreated = new Date().toISOString();
          localStorage.setItem('selectedAddictions', JSON.stringify(selectedAddictions));
          this.loadSelectedAddiction(); // Refresh the displayed addictions
        }
        this.showCountControls[addiction] = false 
      }
    
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
    formatDuration(duration) {
      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
 
      let formattedDuration = '';
      if (months > 0 && remainingDays > 0) {
        formattedDuration = `${months}m ${remainingDays}d`;
      } else if (months > 0) {
        formattedDuration = `${months}m`;
      } else {
        formattedDuration = `${days}d`;
      }
  
      return formattedDuration.trim();
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
    showInputStreak(addiction){
      this.inputStreakVisible[addiction] = true
    },
    setStreakForCurrentAddiction() {
      if (this.streakDays !== null && this.streakDays >= 0) {
        this.setStreakDay(this.streakDays);
      }
    },
    setStreakDay(addiction ) {
      if (addiction && this.streakDays) {
        let selectedAddictions = JSON.parse(localStorage.getItem('selectedAddictions') || '[]');
        const index = selectedAddictions.findIndex(item => item.addiction === addiction);
        
        if (index !== -1) {
          const today = new Date();
          const newDateCreated = new Date(today.getTime() - this.streakDays * 24 * 60 * 60 * 1000);
          console.log(newDateCreated)
          const confirmMessage = `Are you sure you want to set the streak for ${addiction} to ${this.streakDays} days?`;
          if (confirm(confirmMessage)) {
            selectedAddictions[index].dateCreated = newDateCreated.toISOString();
            localStorage.setItem('selectedAddictions', JSON.stringify(selectedAddictions));
            this.loadSelectedAddiction(); // Refresh the displayed addictions
          }
          
          this.closeCountControls(addiction);
          this.inputStreakVisible[addiction] = false;
        }
      }
      this.streakDays = null; // Reset the streak days input
    },  
    confirmResetStreak(addiction) {
      if (confirm(`Are you sure you want to reset the streak for ${addiction}?`)) {
        let selectedAddictions = JSON.parse(localStorage.getItem('selectedAddictions') || '[]');
        const index = selectedAddictions.findIndex(item => item.addiction === addiction);
        if (index !== -1) {
          selectedAddictions[index].dateCreated = new Date().toISOString();
          localStorage.setItem('selectedAddictions', JSON.stringify(selectedAddictions));
          this.loadSelectedAddiction(); // Refresh the displayed addictions
        }
        this.showCountControls[addiction] = false
      }
    },
    closeResetStreakModal(addiction) {
      this.showResetStreakModal[addiction] = false;
    }, 
    openDeleteAddictionModal(addiction) {
      if (confirm(`Are you sure you want to delete the ${addiction} addiction?`)) {
        let selectedAddictions = JSON.parse(localStorage.getItem('selectedAddictions') || '[]');
        selectedAddictions = selectedAddictions.filter(item => item.addiction !== addiction);
        localStorage.setItem('selectedAddictions', JSON.stringify(selectedAddictions));

        if (selectedAddictions.length === 0) {
          localStorage.removeItem('hasSelectedAddiction');
          this.hasSelectedAddiction = false;
        }

        this.showCountControls[addiction] = false;
        
        // Reload the selected addictions
        this.loadSelectedAddiction();
      }
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
  transition: box-shadow 0.3s ease;
  position: relative;
 }

.addiction-tag:hover {
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
.reset-button, .set-streak-button {
  background-color: #BDFCC9; /* Pastel green */
  color: #333; /* Dark text for contrast */
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 8px; /* Add some space between buttons */
}

.reset-button:hover, .set-streak-button:hover {
  background-color: #A2F0B0; /* Slightly darker pastel green on hover */
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.reset-button:active, .set-streak-button:active {
  background-color: #8AE49A; /* Even darker when clicked */
  transform: translateY(0);
  box-shadow: none;
}

.delete-button {
  background-color: #FFB3BA; /* Pastel red */
  color: #333; /* Dark text for contrast */
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.delete-button:hover {
  background-color: #FF9AA2; /* Slightly darker pastel red on hover */
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.delete-button:active {
  background-color: #FF8389; /* Even darker when clicked */
  transform: translateY(0);
  box-shadow: none;
}


.set-streak-container {
  display: flex;
  align-items: baseline;
  margin-bottom: 16px;
}

.streak-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;
}

.set-streak-button {
  background-color: #BDFCC9;
  color: #333;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.set-streak-button:hover {
  background-color: #A2F0B0;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.set-streak-button:active {
  background-color: #8AE49A;
  transform: translateY(0);
  box-shadow: none;
}

.set-streak-button:disabled {
  background-color: #E0E0E0;
  color: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.cancel-streak-button,
.set-streak-button-validate {
  background-color: #FFB3BA;
  color: #333;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  margin-left: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cancel-streak-button:hover,
.set-streak-button-validate:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cancel-streak-button:active,
.set-streak-button-validate:active {
  transform: translateY(0);
  box-shadow: none;
}

.cancel-streak-button:hover {
  background-color: #FF99A3;
}

.cancel-streak-button:active {
  background-color: #FF8090;
}

.set-streak-button-validate {
  background-color: #A2F0B0;
}

.set-streak-button-validate:hover {
  background-color: #8AE49A;
}

.set-streak-button-validate:active {
  background-color: #72D882;
}

.set-streak-button-validate:disabled {
  background-color: #E0E0E0;
  color: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.cancel-streak-button svg,
.set-streak-button-validate svg {
  width: 14px;
  height: 14px;
}

.streak-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  font-size: 14px;
  height: 40px;
  box-sizing: border-box;
}

</style>
