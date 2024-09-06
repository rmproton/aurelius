<template>
  <div v-if="!hasStartedJourney">
    <StartingComponent @start-journey="startJourney" />
  </div>
  <div v-else-if="!hasSelectedAddiction">
    <SelectionComponent @addiction-selected="onAddictionSelected" />
  </div>
  <div v-else class="popup" :class="currentTheme" @click="closeCountControls">
    <h1 class="banner">Aurelius</h1>
     <div class="content">

      <div class="count-container">
      <transition name="slide-fade">
        <p v-if="showCount" class="count-text" aria-live="polite"> ~ Day {{ count }} ~</p>
      </transition>
      <span class="addiction-tag" :style="{ backgroundColor: getAddictionColor() }">{{ selectedAddiction }} addiction</span>
    </div>
      <div class="quote-container">
        <div class="quote-bubble">
          <p class="quote-text"> {{ quoteText }} </p>
        </div>
        <p class="quote-author">- {{ quoteAuthor }}</p>
      </div>
    </div>
    <div class="ellipsis-container">
      <button @click.stop="toggleCountControls" class="count-button" aria-expanded="false" aria-controls="count-controls">
        <template v-if="showCountControls">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="currentTheme === 'light-theme' ? '#333333' : '#ffffff'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </template>
        <template v-else>
          <span class="ellipsis" :style="{ color: currentTheme === 'light-theme' ? '#333333' : '#ffffff', userSelect: 'none' }">...</span>
        </template>
      </button>
      <transition name="fade">
        <div v-if="showCountControls" class="count-controls" @click.stop id="count-controls">
          <button @click="openResetStreakModal" class="reset-button">Restart streak</button>
          <button @click="openSetStreakModal" class="set-streak-button">Set streak day</button>
        </div>
      </transition>
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
    <transition name="fade">
      <div v-if="showSetStreakModal" class="modal-overlay" @click="closeSetStreakModal" aria-modal="true" role="dialog" tabindex="0">
        <div class="modal" @click.stop>
          <h2>Set Streak Day</h2>
          <input v-model="newStreakDay" type="number" min="1" class="streak-input" aria-label="Set Streak Day">
          <div class="modal-buttons">
            <button @click="closeSetStreakModal" class="close-button" aria-label="Close" tabindex="0">X</button>
            <button @click="setStreakDay" class="accept-button" aria-label="Accept" tabindex="0">✓</button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="showResetStreakModal" class="modal-overlay" @click="closeResetStreakModal" aria-modal="true" role="dialog" tabindex="0">
        <div class="modal" @click.stop>
          <h3>Do you really want to reset your streak?</h3>
          <div class="modal-buttons">
            <button @click="closeResetStreakModal" class="close-button" aria-label="No" tabindex="0">No</button>
            <button @click="confirmResetStreak" class="accept-button" aria-label="Yes" tabindex="0">Yes</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import quotes from '../quotes/quotes.json';
import './popup.css';
import StartingComponent from './StartingComponent.vue';
import SelectionComponent from './SelectionComponent.vue';

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
      selectedAddiction: '',
      quoteText: '',
      quoteAuthor: '',
      count: 0,
      showCountControls: false,
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
      newStreakDay: 1
    }
  },
  created() {
    this.checkJourneyStarted();
    if (this.hasStartedJourney && this.hasSelectedAddiction) {
      this.setDailyQuote();
      this.loadCount();
      this.checkLastOpened();
      this.loadTheme();
      this.loadSelectedAddiction();
      setTimeout(() => {
        this.showCount = true;
      }, 100);
    }
  },
  methods: {
    checkJourneyStarted() {
      const journeyStarted = localStorage.getItem('journeyStarted');
      this.hasStartedJourney = journeyStarted === 'true';
      const addictionSelected = localStorage.getItem('addictionSelected');
      this.hasSelectedAddiction = addictionSelected === 'true';
    },
    startJourney() {
      this.hasStartedJourney = true;
      localStorage.setItem('journeyStarted', 'true');
    },
    onAddictionSelected(addiction) {
      this.hasSelectedAddiction = true;
      this.selectedAddiction = addiction;
      localStorage.setItem('addictionSelected', 'true');
      localStorage.setItem('selectedAddiction', addiction);
      this.setDailyQuote();
      this.loadCount();
      this.checkLastOpened();
      this.loadTheme();
      setTimeout(() => {
        this.showCount = true;
      }, 100);
    },
    loadSelectedAddiction() {
      this.selectedAddiction = localStorage.getItem('selectedAddiction') || '';
    },
    getAddictionColor() {
      const colors = {
        'Drug': '#4B0082',
        'Sex': '#FF69B4',
        'Porn': '#FF1493',
        'Gambling': '#32CD32',
        'Alcohol': '#FFA500',
        'Other': '#A9A9A9'
      };
      return colors[this.selectedAddiction] || '#A9A9A9';
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
    toggleCountControls() {
      this.showCountControls = !this.showCountControls;
    },
    closeCountControls() {
      this.showCountControls = false;
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
    openResetStreakModal() {
      this.showResetStreakModal = true;
    },
    closeResetStreakModal() {
      this.showResetStreakModal = false;
    },
    confirmResetStreak() {
      this.resetCount();
      this.closeResetStreakModal();
    }
  }
}
</script>

<style>
.addiction-tag {
  font-size: 1em;
  padding: 0.4rem 1rem;
  border-radius: 10px;
  color: white; 
}

.count-text {
  margin-bottom: 1rem;
}


</style>
